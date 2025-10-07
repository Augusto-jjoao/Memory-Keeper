from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Historia, Album, Foto, ImagemDecorativa, Musica

class FotoInline(admin.TabularInline):
    model = Foto
    extra = 1 # Quantos campos de upload de foto extras aparecerão

@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    inlines = [FotoInline]
    list_display = ('titulo', 'data_evento')

admin.site.register(Historia)

@admin.register(ImagemDecorativa)
class ImagemDecorativaAdmin(admin.ModelAdmin):
    list_display = ('nome', 'imagem', 'criado_em')

@admin.register(Musica)
class MusicaAdmin(admin.ModelAdmin):
    list_display = ('ordem', 'titulo', 'artista')