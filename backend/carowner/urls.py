from django.urls import path
from carowner import views


urlpatterns = [
    path('owners/', views.OwnerListView.as_view()),
    path('owners/<int:pk>/', views.OwnerDetailView.as_view()) 
]