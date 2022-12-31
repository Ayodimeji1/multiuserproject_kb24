from .models import Booking, BookingItems, Motor, BrandVehicle, MotorRating
from .serializers import BookingItemsSerializer, BookingSerializer, MotorSerializer, MotorDetailSerializer, BrandSerializer, MotorRatingSerializer
from rest_framework import generics, viewsets
from django_filters import rest_framework as filters

from vehicle import models
# from rest_framework import filters 

# from django_filters import FilterSet, DateTimeFilter
# from django_filters.rest_framework import DjangoFilterBackend




class MotorFilter(filters.FilterSet):
    available_from = filters.DateTimeFilter(field_name='available_from', lookup_expr='gte')
    available_end = filters.DateTimeFilter(field_name='available_end', lookup_expr='lte')

    class Meta:
        model = Motor 
        fields = ['name'] 


class MotorBrandListView(viewsets.ModelViewSet): 
    queryset = Motor.objects.all()
    serializer_class = MotorSerializer 
    

    def get_queryset(self):
        qs = super().get_queryset()
        brand = self.request.GET['brand']
        brand = BrandVehicle.objects.get(id=brand)
        qs = qs.filter(brand=brand)
        return qs 
   




class MotorListView(generics.ListCreateAPIView):
    queryset = Motor.objects.all()
    serializer_class = MotorSerializer
    filter_backends = (filters.DjangoFilterBackend,)   
    filterset_class = MotorFilter
    ordering_fields = ['price',]

        


class MotorDetailView(generics.RetrieveUpdateDestroyAPIView): 
    queryset = Motor.objects.all()
    serializer_class = MotorDetailSerializer




class BrandListView(generics.ListCreateAPIView): 
    queryset = BrandVehicle.objects.all()
    serializer_class = BrandSerializer 



class BrandDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = BrandVehicle.objects.all()
    serializer_class = BrandSerializer


# Booking views
class BookingListView(generics.ListCreateAPIView): 
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer


# class BookingDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Booking.objects.all()
#     serializer_class = BookingSerializer


# BookingItems views
# class BookingItemsListView(generics.ListCreateAPIView): 
#     queryset = BookingItems.objects.all() 
#     serializer_class = BookingItemsSerializer


class BookingItemsDetailView(generics.ListAPIView):
    serializer_class = BookingItemsSerializer   

    def get_queryset(self):
        booking_id = self.kwargs['pk']
        booking = Booking.objects.get(id=booking_id)   
        booking_items = BookingItems.objects.filter(booking=booking)
        return booking_items


# MotorRating viewsets
class MotorRatingViewsets(viewsets.ModelViewSet):
    serializer_class = MotorRatingSerializer
    queryset = MotorRating.objects.all()     




# class FeedFilter(django_filters.rest_framework.FilterSet):
#     start_date = django_filters.DateTimeFilter(field_name='available_from', lookup_expr='gte')
#     end_date = django_filters.DateTimeFilter(field_name='available_end', lookup_expr='lte')

#     class Meta:
#         model = Motor
#         fields = ('available_from', 'available_end')    



# class MotorSearchView(generics.ListAPIView):
#     queryset = Motor.objects.all()
#     serializer_class = MotorSerializer