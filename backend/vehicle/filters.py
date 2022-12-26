from django_filters import rest_framework as filters
from .models import Motor


class MotorFilter(filters.FilterSet):
    name = filters.CharFilter(field_name='name')
    available_from = filters.DateTimeFilter(field_name='available_from', lookup_expr='gte')
    available_end = filters.DateTimeFilter(field_name='available_end', lookup_expr='lte')

    class Meta:
        model = Motor
        fields = ['name','available_from', 'available_end']   