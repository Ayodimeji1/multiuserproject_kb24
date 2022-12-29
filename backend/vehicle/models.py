import datetime
from django.db import models
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill

from customer.models import Customer
from carowner.models import Owner



# Create your models here.

year_dropdown = []
for y in range(2011, (datetime.datetime.now().year + 1)):
    year_dropdown.append((y, y))




class BrandVehicle(models.Model):
    name = models.CharField(max_length=100)
    pictures = models.ImageField(upload_to='images/brands_img', default=False)
    # picture_thumbnail = ImageSpecField(source='brands_img',
    #                                   processors=[ResizeToFill(100, 50)],
    #                                   format='JPEG',
    #                                   options={'quality': 80})

    def __str__(self):
        return self.name



class Motor(models.Model):
    name = models.CharField(max_length=200)
    brand = models.ForeignKey(BrandVehicle,on_delete=models.SET_NULL, null=True, related_name='brand_vehicles') 
    owner = models.ForeignKey(Owner,on_delete=models.SET_NULL, null=True, related_name='owner')   
    year = models.IntegerField(('year'), choices=year_dropdown, default=datetime.datetime.now().year)
    price = models.FloatField()
    available_from = models.DateTimeField(auto_now=False, auto_now_add=False)
    available_end = models.DateTimeField(auto_now=False, auto_now_add=False)
    pick_up_location = models.CharField(max_length=200)   
    drop_off_location = models.CharField(max_length=200)
    pictures = models.ImageField(upload_to='images/motors_img')
    

    def __str__(self):
        # return self.name+'self.year' 
        return f'{self.name}  {self.year}'








class MotorRating(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='ratings_customers')
    motor = models.ForeignKey(Motor, on_delete=models.CASCADE, related_name='motor_ratings')   
    rating = models.IntegerField()
    reviews = models.TextField() 
    add_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.rating} - {self.reviews}'        
 


# Booking model
class Booking(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer_bookings')
    booked_from = models.DateTimeField(auto_now_add=True)
    booked_to = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return '%s' % self.time


# Booking Items
class BookingItems(models.Model):
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE, related_name='booking_items')
    vehicle = models.ForeignKey(Motor, on_delete=models.CASCADE)

    def __str__(self):
        return self.vehicle.name    
