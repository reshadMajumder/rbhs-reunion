from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from rest_framework.permissions import AllowAny

from .models import Notice,Sponsors
from .serializers import NoticeSerializer,SponsorsSerializer

class NoticeListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        try:
            notice = Notice.objects.all().order_by('-created_at')
            serializer = NoticeSerializer(notice, many= True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Notice.DoesNotExist:
            return Response({"detail": "No Notice available or and error occured "}, status=status.HTTP_404_NOT_FOUND)


class SponsorsListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        try:
            sponsors = Sponsors.objects.all().order_by('serial_number')
            serializer = SponsorsSerializer(sponsors, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Sponsors.DoesNotExist:
            return Response({"detail": "No Sponsors available or an error occurred "}, status=status.HTTP_404_NOT_FOUND)

    