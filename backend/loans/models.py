from django.db import models
from django.conf import settings

class LoanApplication(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    # Personal Info
    title = models.CharField(max_length=20, default='Mr./Ms.')
    first_name = models.CharField(max_length=100, default='Unknown')
    father_name = models.CharField(max_length=100, default='Unknown')
    grandfather_name = models.CharField(max_length=100, blank=True, null=True)
    dob = models.DateField(blank=True, null=True)
    gender = models.CharField(max_length=10, blank=True, null=True)
    marital_status = models.CharField(max_length=20, blank=True, null=True)
    mobile1 = models.CharField(max_length=20, default='0000000000')
    mobile2 = models.CharField(max_length=20, blank=True, null=True)
    kebele_id = models.CharField(max_length=50, default='Unknown')
    email = models.EmailField(default='default@example.com')

    # Business Address
    region = models.CharField(max_length=100, blank=True, null=True)
    sub_city = models.CharField(max_length=100, blank=True, null=True)
    woreda = models.CharField(max_length=50, blank=True, null=True)
    zone = models.CharField(max_length=50, blank=True, null=True)
    specific_location = models.CharField(max_length=255, default='Unknown')
    nisir_branch = models.CharField(max_length=100, blank=True, null=True)

    # Business & Loan Info
    purpose_of_loan = models.TextField(blank=True, null=True)
    legal_status = models.CharField(max_length=100, blank=True, null=True)
    business_sector = models.CharField(max_length=100, default='Unknown')
    business_detail = models.TextField(blank=True, null=True)
    business_license_date = models.DateField(blank=True, null=True)
    loan_type = models.CharField(max_length=100, blank=True, null=True)
    loan_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0.0)

    # Documents
    id_proof = models.FileField(upload_to='loan_docs/id_proofs/', blank=True, null=True)
    salary_slip = models.FileField(upload_to='loan_docs/salary_slips/', blank=True, null=True)
    bank_statement = models.FileField(upload_to='loan_docs/bank_statements/', blank=True, null=True)
    collateral_doc = models.FileField(upload_to='loan_docs/collateral/', blank=True, null=True)

    # Consent & Status
    consent = models.BooleanField(default=False)
    status = models.CharField(max_length=20, default='pending')  # pending, first_screening, active, completed
    created_at = models.DateTimeField(auto_now_add=True)

    # Stage 2: Screening
    monthly_income = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    repayment_period_months = models.PositiveIntegerField(blank=True, null=True)
    proposed_monthly_payment = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    additional_info = models.TextField(blank=True, null=True)
    screening_completed = models.BooleanField(default=False)

    total_paid = models.DecimalField(max_digits=12, decimal_places=2, default=0.0)
    monthly_payment = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    due_date = models.DateField(blank=True, null=True)
    stage = models.CharField(max_length=20, default='pending')  # pending, first_screening, active, completed

    def remaining_balance(self):
        return max(self.loan_amount - self.total_paid, 0)

    def make_payment(self, amount):
        self.total_paid += amount
        if self.total_paid >= self.loan_amount:
            self.stage = 'completed'
        self.save()
    def __str__(self):
        return f"{self.first_name} {self.father_name} — {self.loan_amount}"
