from django.urls import path
from .views import NoticeListView,SponsorsListView

urlpatterns = [
    path('', NoticeListView.as_view(), name='payment-list-create'),
    path('sponsors/', SponsorsListView.as_view(), name='sponsors-list'),
]
