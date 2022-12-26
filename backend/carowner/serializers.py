from rest_framework import serializers
from carowner.models import Owner


# Owner serializer

class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields = ['id', 'user', 'phone_number', 'street', 'city', 'state',
                    'nin', 'drivers_license','picture']

    def __init__(self, *args, **kwargs):
        super(OwnerSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1
       


