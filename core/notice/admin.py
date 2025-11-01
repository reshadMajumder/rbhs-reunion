from django.contrib import admin

# Register your models here.
from .models import Notice,Sponsors,ContactMessage

admin.site.register(Notice)
admin.site.register(Sponsors)
admin.site.register(ContactMessage)