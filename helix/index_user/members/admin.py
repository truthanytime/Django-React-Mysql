from django.contrib import admin
from .models import Users

class UsersAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(Users, UsersAdmin)