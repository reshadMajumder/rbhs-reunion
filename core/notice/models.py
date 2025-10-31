from django.db import models
from cloudinary.models import CloudinaryField


class Notice(models.Model):
    title = models.CharField(max_length=55)
    content = models.TextField(null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title


class Sponsors(models.Model):
    name = models.CharField(max_length=55)
    # store sponsor logos in Cloudinary instead of local MEDIA_ROOT
    logo = CloudinaryField('image', blank=True, null=True)
    serial_number = models.IntegerField(unique=True,)


    def __str__(self):
        return self.name