from django.contrib import admin

# Register your models here.
from .models import Notice,Sponsors

admin.site.register(Notice)
admin.site.register(Sponsors)