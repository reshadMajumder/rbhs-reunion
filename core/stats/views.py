from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from django.db.models import Count
from accounts.models import User
from payments.models import Payment

class RegistrationStatsView(APIView):
    """
    Returns:
    - total registration count
    - batch wise registration count
    - male/female/other count
    Only considers users with approved registration payment.
    """
    permission_classes = [permissions.AllowAny]  # restrict to admin if needed

    def get(self, request):
        # Get users with approved registration payment
        registered_user_ids = Payment.objects.filter(
            payment_type='registration',
            payment_approved=True
        ).values_list('user_id', flat=True).distinct()

        users = User.objects.filter(id__in=registered_user_ids)

        total_count = users.count()

        # Clean batch values and group by batch
        batch_counts = (
            users.exclude(batch__isnull=True).exclude(batch__exact='')
            .values('batch')
            .annotate(count=Count('id'))
            .order_by('batch')
        )

        gender_counts = users.values('gender').annotate(count=Count('id'))

        # normalize batch keys as string
        data = {
            "total_registered": total_count,
            "batch_wise_count": {str(b['batch']).strip(): b['count'] for b in batch_counts},
            "gender_count": {g['gender'] or "unknown": g['count'] for g in gender_counts},
        }

        return Response(data)
