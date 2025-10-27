import csv
from django.http import HttpResponse
from django.contrib import admin
from .models import User


def export_users_csv(modeladmin, request, queryset):
    """
    Export selected users as CSV.
    """
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="users.csv"'

    writer = csv.writer(response)
    # Header row
    writer.writerow(['Phone', 'Name', 'Batch', 'Gender', 'Staff', 'Active', 'Date Joined'])

    for user in queryset:
        writer.writerow([
            user.phone,
            user.name,
            user.batch,
            user.gender,
            user.is_staff,
            user.is_active,
            user.date_joined,
        ])

    return response


export_users_csv.short_description = "Export Selected Users to CSV"


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        'phone', 'name', 'batch', 'gender', 'is_staff', 'is_active', 'date_joined'
    )
    search_fields = ('phone', 'name')
    list_filter = ('batch', 'gender', 'is_staff', 'is_active')
    ordering = ('-date_joined',)
    actions = [export_users_csv]  # Add the CSV action
