from django.contrib import admin
from rest_framework import routers
from django.urls import path, include
from . import views

router=routers.DefaultRouter()
router.register(r'users',views.UserView,'user')

urlpatterns=[
    path('admin/',admin.site.urls),
    path('api/',include(router.urls))
]