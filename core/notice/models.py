from django.db import models



class Notice(models.Model):
    title = models.CharField(max_length=55)
    content = models.TextField(null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title
