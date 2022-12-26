from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('motor-rating', views.MotorRatingViewsets)
router.register('vehicles', views.MotorListView)


urlpatterns = [
    # path('vehicles/', views.MotorListView.as_view()),
    # path('search/', views.MotorListSearchView.as_view()),
    path('vehicles/<int:pk>/', views.MotorDetailView.as_view()), 
    path('brands/', views.BrandListView.as_view()), 
    path('bookings/', views.BookingListView.as_view()),
    # path('bookings/<int:pk>/', views.BookingDetailView.as_view()), 
    # path('bookingitems/', views.BookingItemsListView.as_view()),
    path('bookingitems/<int:pk>/', views.BookingItemsDetailView.as_view()), 

]

urlpatterns += router.urls