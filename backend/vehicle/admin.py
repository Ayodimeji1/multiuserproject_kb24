from django.contrib import admin
from .models import Motor, MotorRating, BrandVehicle, Booking, BookingItems

# Register your models here.


admin.site.register(Motor)
admin.site.register(MotorRating)
admin.site.register(BrandVehicle)
admin.site.register(Booking)
admin.site.register(BookingItems)