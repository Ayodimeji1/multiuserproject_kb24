from rest_framework import serializers
from .models import Booking, BookingItems, Motor, MotorImage, BrandVehicle, MotorRating




# Vehicle serializer
class MotorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Motor
        fields = ['id', 'brand', 'owner', 'name', 'price', 'year', 'available_from', 'available_end',
                    'pick_up_location', 'drop_off_location', 'pictures'] 

    def __init__(self, *args, **kwargs):
        super(MotorSerializer, self).__init__(*args, **kwargs)  
        # self.Meta.depth = 1




# Motor images serializer
class MotorImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = MotorImage
        fields = ['id', 'motor', 'image']

  

  

# Vehicle detail serializer
class MotorDetailSerializer(serializers.ModelSerializer):
    motor_ratings = serializers.StringRelatedField(many=True, read_only=True) 
    motor_images = MotorImageSerializer(many=True, read_only=True) 
    class Meta:
        many =True
        model = Motor
        fields = ['id', 'brand', 'owner', 'name', 'price', 'year', 'available_from', 'available_end',
                    'pick_up_location', 'drop_off_location', 'motor_ratings', 'motor_images' ]

    def __init__(self, *args, **kwargs):
        super(MotorDetailSerializer, self).__init__(*args, **kwargs)  
        # self.Meta.depth = 1





  

# Brand serializer
class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = BrandVehicle
        fields = ['id','name', 'pictures']

    # def __init__(self, *args, **kwargs):
    #     super(BrandSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1        




# Booking Serializer
class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'customer', 'booked_from', 'booked_to']

    def __init__(self, *args, **kwargs):
        super(BookingSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1  



# BookingItem Serializer
class BookingItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingItems
        fields = ['id', 'booking', 'vehicle']

    def __init__(self, *args, **kwargs):
        super(BookingItemsSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1     



# Motor rating
class MotorRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = MotorRating
        fields = ['id', 'customer', 'motor', 'rating', 'reviews', 'add_time']

    def __init__(self, *args, **kwargs):
        super(MotorRatingSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1             




