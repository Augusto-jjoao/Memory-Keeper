// src/pages/MemoriasPage.jsx
import React, { useState, useEffect } from 'react';
import AlbumCard from '../components/AlbumCard';
import GaleriaFotos from '../components/GaleriaFotos';
import './MemoriasPage.css';

function MemoriasPage() {
  const [albuns, setAlbuns] = useState([]);
  const [albumSelecionado, setAlbumSelecionado] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/albuns/')
      .then(response => response.json())
      .then(data => setAlbuns(data))
      .catch(error => console.error("Erro ao buscar álbuns!", error));
  }, []);

  // Se um álbum for selecionado, mostramos a galeria. Se não, a grade.
  if (albumSelecionado) {
    return (
      <GaleriaFotos
        album={albumSelecionado}
        onClose={() => setAlbumSelecionado(null)}
      />
    );
  }

  return (
    <div className="memorias-container">
      <h1>Nossas Memórias</h1>
      <div className="albuns-grid">
        {albuns.map(album => (
          <AlbumCard
            key={album.id}
            album={album}
            onClick={() => setAlbumSelecionado(album)}
          />
        ))}
      </div>
    </div>
  );
}

export default MemoriasPage;