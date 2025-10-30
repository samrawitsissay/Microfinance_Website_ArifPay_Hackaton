from django.urls import path
from .views import LoanApplicationView, UserLoansView, UpdateLoanStatusView

urlpatterns = [
    path('apply/', LoanApplicationView.as_view(), name='loan-apply'),
    path('my-loans/', UserLoansView.as_view(), name='user-loans'),
    path('update-loan/<int:pk>/', UpdateLoanStatusView.as_view(), name='update-loan'),
]
