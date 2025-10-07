from django.db import models

# Create your models here.

from django.db import models
from django.core.validators import FileExtensionValidator


class Historia(models.Model):
    titulo = models.CharField(max_length=200)
    texto = models.TextField()
    data_evento = models.DateField()
    imagem_capitulo = models.ImageField(upload_to='historias/', blank=True, null=True)
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo

class Memoria(models.Model):
    titulo = models.CharField(max_length=200)
    descricao = models.TextField(blank=True, null=True)
    foto = models.ImageField(upload_to='memorias/')
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo

class Album(models.Model):
    titulo = models.CharField(max_length=200)
    descricao = models.TextField(blank=True, null=True)
    foto_capa = models.ImageField(upload_to='album_capas/')
    data_evento = models.DateField()
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo

class Foto(models.Model):
    # A 'ForeignKey' cria a relação. Cada foto PERTENCE a um álbum.
    # O related_name='fotos' nos permitirá acessar as fotos a partir de um objeto Album.
    album = models.ForeignKey(Album, related_name='fotos', on_delete=models.CASCADE)
    imagem = models.ImageField(upload_to='fotos/')
    legenda = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"Foto para o álbum: {self.album.titulo}"

class ImagemDecorativa(models.Model):
    nome = models.CharField(max_length=100, unique=True) # Ex: "home_esquerda", "home_direita"
    imagem = models.ImageField(upload_to='decoracao/')
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome

class Musica(models.Model):
    titulo = models.CharField(max_length=200)
    artista = models.CharField(max_length=200, blank=True)
    # Usamos FileField para permitir outros formatos se necessário, e validamos para MP3
    arquivo_audio = models.FileField(
        upload_to='musicas/',
        validators=[FileExtensionValidator(allowed_extensions=['mp3'])]
    )
    ordem = models.PositiveIntegerField(default=0, help_text="Menor número toca primeiro")

    class Meta:
        ordering = ['ordem'] # Garante que a API retorne as músicas na ordem certa

    def __str__(self):
        return f"{self.ordem}. {self.titulo} - {self.artista}"