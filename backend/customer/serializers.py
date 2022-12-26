from rest_framework import serializers
from .models import Customer



# Customer Serializer

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'user', 'phone_number', 'street', 'city', 'state',
                    'nin', 'drivers_license','picture']

    def __init__(self, *args, **kwargs):
        super(CustomerSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1        




     

