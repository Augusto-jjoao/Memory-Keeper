from django.urls import path
from .views import HistoriaListCreateView, AlbumListCreateView, ImagemDecorativaListCreateView, MusicaListView

urlpatterns = [
    path('historias/', HistoriaListCreateView.as_view(), name='lista-historias'),
    path('albuns/', AlbumListCreateView.as_view(), name='lista-albuns'),
    path('decoracao/', ImagemDecorativaListCreateView.as_view(), name='lista-decoracao'),
    path('musicas/', MusicaListView.as_view(), name='lista-musicas'),
]