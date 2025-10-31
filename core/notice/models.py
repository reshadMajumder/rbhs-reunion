from django.db import models



class Notice(models.Model):
    title = models.CharField(max_length=55)
    content = models.TextField(null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title


class Sponsors(models.Model):
    name = models.CharField(max_length=55)
    logo = models.ImageField(upload_to='sponsors/logos/')
    serial_number = models.IntegerField(unique=True,)


    def __str__(self):
        return self.name