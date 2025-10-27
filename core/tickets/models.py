import uuid
from django.db import models
from accounts.models import User

class Ticket(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tickets')
    gift_received = models.BooleanField(default=False)
    food_received = models.BooleanField(default=False)
    has_donation = models.BooleanField(default=False)
    

    def __str__(self):
        return f"Ticket for {self.user.phone}"
