from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic.base import TemplateView
from django.contrib.sitemaps.views import sitemap
from django.views.generic import RedirectView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from markets.views import *

urlpatterns = [
    url(r'^place_offer/', PlaceOffer.as_view(), name="place_offer"),
    url(r'^myitems/', MyItems.as_view(), name="myitems")
]
