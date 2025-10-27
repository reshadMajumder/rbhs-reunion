from django.urls import path
from .views import RegistrationStatsView

urlpatterns = [
    path('registration-stats/', RegistrationStatsView.as_view(), name='registration-stats'),
]
