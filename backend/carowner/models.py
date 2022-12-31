from django.db import models
# from PIL import Image
from django.contrib.auth.models import User

# Create your models here.


class Owner(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    phone_number = models.BigIntegerField()
    street = models.TextField()
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    nin = models.BigIntegerField()
    drivers_license = models.ImageField(upload_to='owner_license')
    picture = models.ImageField(upload_to='owner_img', default=False)

    def __str__(self):
        return self.user.username
    
    

    