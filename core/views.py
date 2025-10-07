from django.shortcuts import render
from rest_framework import generics
from .models import Historia, Album, ImagemDecorativa, Musica
from .serializers import HistoriaSerializer, AlbumSerializer, ImagemDecorativaSerializer, MusicaSerializer

class HistoriaListCreateView(generics.ListCreateAPIView):
    queryset = Historia.objects.all()
    serializer_class = HistoriaSerializer

class AlbumListCreateView(generics.ListCreateAPIView):
    queryset = Album.objects.all().order_by('-data_evento')
    serializer_class = AlbumSerializer

class ImagemDecorativaListCreateView(generics.ListCreateAPIView):
    queryset = ImagemDecorativa.objects.all()
    serializer_class = ImagemDecorativaSerializer
    pagination_class = None # Não precisamos de paginação para poucas imagens

class MusicaListView(generics.ListAPIView):
    queryset = Musica.objects.all()
    serializer_class = MusicaSerializer
    pagination_class = None