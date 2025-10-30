# loans/serializers.py
from rest_framework import serializers
from .models import LoanApplication
class LoanApplicationSerializer(serializers.ModelSerializer):
    remaining_balance = serializers.SerializerMethodField()

    class Meta:
        model = LoanApplication
        exclude = ['user']

    def get_remaining_balance(self, obj):
        return obj.remaining_balance()
