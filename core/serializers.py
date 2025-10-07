from rest_framework import serializers
from .models import Historia, Album, Foto, ImagemDecorativa, Musica

class HistoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Historia
        fields = ['id', 'titulo', 'texto', 'data_evento', 'imagem_capitulo']

class FotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Foto
        fields = ['id', 'imagem', 'legenda']

class AlbumSerializer(serializers.ModelSerializer):
    # Aqui está a mágica: estamos aninhando o serializer de Foto
    # para que cada álbum já venha com sua lista de fotos.
    fotos = FotoSerializer(many=True, read_only=True)

    class Meta:
        model = Album
        fields = ['id', 'titulo', 'descricao', 'foto_capa', 'data_evento', 'fotos']

class ImagemDecorativaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagemDecorativa
        fields = ['id', 'nome', 'imagem']

class MusicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Musica
        fields = ['id', 'titulo', 'artista', 'arquivo_audio']