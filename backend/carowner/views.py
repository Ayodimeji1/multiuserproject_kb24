from carowner.models import Owner
from carowner.serializers import OwnerSerializer
from rest_framework import generics, permissions
from rest_framework.permissions import IsAuthenticated


class OwnerListView(generics.ListCreateAPIView):
    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer
    permission_classes = [IsAuthenticated]


class OwnerDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer
    permission_classes = [IsAuthenticated]