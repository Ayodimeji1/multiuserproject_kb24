from django.shortcuts import render
from .models import Customer
from .serializers import CustomerSerializer
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend



# Customer views
class CustomerListView(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['brand', 'price']


class CustomerDetailView(generics.RetrieveUpdateDestroyAPIView): 
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer



