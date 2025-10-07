// src/components/AlbumCard.jsx
import React from 'react';
import './AlbumCard.css'; // Estilos que vamos criar a seguir

function AlbumCard({ album, onClick }) {
  const coverPhotoUrl = album.foto_capa;

  return (
    <div className="album-card" onClick={onClick}>
      <img src={coverPhotoUrl} alt={album.titulo} />
      <div className="album-card-overlay">
        <h3 className="album-card-title">{album.titulo}</h3>
      </div>
    </div>
  );
}

export default AlbumCard;