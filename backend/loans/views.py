# loans/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from .models import LoanApplication
from .serializers import LoanApplicationSerializer

class LoanApplicationView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        serializer = LoanApplicationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response({"message": "Loan application submitted successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoansView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        loans = LoanApplication.objects.filter(user=request.user)
        serializer = LoanApplicationSerializer(loans, many=True)
        return Response(serializer.data)


class UpdateLoanStatusView(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request, pk):
        try:
            loan = LoanApplication.objects.get(id=pk, user=request.user)
        except LoanApplication.DoesNotExist:
            return Response({'error': 'Loan not found'}, status=status.HTTP_404_NOT_FOUND)

        data = request.data

        # Update stage if provided
        if 'stage' in data:
            loan.stage = data['stage']

        # Incremental payment handling
        payment = data.get('payment')  # amount paid in this request
        if payment:
            loan.total_paid += float(payment)
            # Automatically mark as completed if fully paid
            if loan.total_paid >= loan.loan_amount:
                loan.stage = 'completed'
                loan.total_paid = loan.loan_amount  # cap total_paid

        # Update monthly payment & due date if provided
        loan.monthly_payment = data.get('monthly_payment', loan.monthly_payment)
        loan.due_date = data.get('due_date', loan.due_date)

        # Optional: Update other fields like screening_completed
        if 'screening_completed' in data:
            loan.screening_completed = data['screening_completed']

        loan.save()
        serializer = LoanApplicationSerializer(loan)
        return Response(serializer.data, status=status.HTTP_200_OK)
