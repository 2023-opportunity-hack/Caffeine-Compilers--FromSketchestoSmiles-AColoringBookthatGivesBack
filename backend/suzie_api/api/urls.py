from api.views import NonProfitsViewSet, DrawingsViewSet, BooksViewSet, SponsorViewSet, \
    UserRegistrationView, UserLoginView, UserListView, SponsorImageViewSet, SponsorPayAPIView, CreateDrawingsViewSet, GenerateBooksView
from django.urls import include, path
from rest_framework import routers
from rest_framework_simplejwt import views as jwt_views


router = routers.DefaultRouter()
router.register(r'sponsors', SponsorViewSet, basename="sponsors")
router.register(r'nonprofits', NonProfitsViewSet, basename="nonprofits")
router.register(r'drawings', DrawingsViewSet, basename="drawings")
router.register(r'upload_drawings', CreateDrawingsViewSet, basename="upload_drawings")
router.register(r'books', BooksViewSet, basename="books")

urlpatterns = [
    path('', include(router.urls)),
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('register', UserRegistrationView.as_view(), name='register'),
    path('login', UserLoginView.as_view(), name='login'),
    path('users', UserListView.as_view(), name='users'),
    path('sponsor_img', SponsorImageViewSet.as_view(), name='sponsor_img'),
    path('sponsor_pay', SponsorPayAPIView.as_view(), name='sponsor_pay'),
    path('generate_book', GenerateBooksView.as_view(), name='generate_book'),
]
