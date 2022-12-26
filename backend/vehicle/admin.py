from django.contrib import admin
from .models import Motor, MotorRating, Brand, Booking, BookingItems

# Register your models here.


admin.site.register(Motor)
admin.site.register(MotorRating)
admin.site.register(Brand)
admin.site.register(Booking)
admin.site.register(BookingItems)