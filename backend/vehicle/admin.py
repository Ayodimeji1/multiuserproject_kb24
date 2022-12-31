from django.contrib import admin
from .models import Motor, MotorImage,  MotorRating, BrandVehicle, Booking, BookingItems

# Register your models here.


# admin.site.register(Motor) 
admin.site.register(MotorRating)
admin.site.register(BrandVehicle)
admin.site.register(Booking)
admin.site.register(BookingItems)

admin.site.register(MotorImage)
class MotorImagesInline(admin.StackedInline):
    model = MotorImage

class MotorAdmin(admin.ModelAdmin):
    # prepopulated_fields ={'slug':('name',)}   
    inlines = [
        MotorImagesInline,
    ] 
admin.site.register(Motor,MotorAdmin)    