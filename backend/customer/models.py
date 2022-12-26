from django.db import models
from django.contrib.auth.models import User



# Create your models here.


class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    phone_number = models.PositiveBigIntegerField()
    street = models.TextField()
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    govt_issued_id = models.ImageField(upload_to='images/customerid_img')
    drivers_license = models.ImageField(upload_to='images/customerlicense_img')
    picture = models.ImageField(upload_to='images/customer_img', default=False)

    def __str__(self):
        return self.user.username
    



