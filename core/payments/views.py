from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Payment
from .serializers import PaymentSerializer
from django.db import transaction

class PaymentListCreateView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self,request):

        try:
            ticket = Payment.objects.filter(user=request.user).order_by('-created_at')
            serializer = PaymentSerializer(ticket,many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Payment.DoesNotExist:
            return Response({"detail": "No payments found for this user."}, status=status.HTTP_404_NOT_FOUND)



    @transaction.atomic
    def post(self, request):
        serializer = PaymentSerializer(data=request.data)
        if serializer.is_valid():
            try:
                payment = serializer.save(user=request.user)
                return Response(
                    PaymentSerializer(payment).data,
                    status=status.HTTP_201_CREATED
                )
            except Exception as e:
                # rollback automatically triggered by atomic if exception raised
                transaction.set_rollback(True)
                return Response(
                    {"detail": f"Payment creation failed: {str(e)}"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    