// src/components/MusicPlayer.jsx
import React, { useState, useEffect, useRef } from 'react';
import './MusicPlayer.css';

function MusicPlayer() {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Começa com 50% de volume
  const [isMuted, setIsMuted] = useState(false);

  // useRef é usado para acessar o elemento <audio> diretamente
  const audioRef = useRef(null);

  // 1. Busca a lista de músicas da nossa API
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/musicas/')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setPlaylist(data);
        }
      })
      .catch(error => console.error("Erro ao buscar músicas!", error));
  }, []);

  // 2. Controla o play/pause e o volume no elemento <audio>
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Autoplay bloqueado pelo navegador."));
      } else {
        audioRef.current.pause();
      }
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [isPlaying, volume, isMuted, currentTrackIndex]); // Roda sempre que algo mudar

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
    if (isMuted) setIsMuted(false); // Se ajustar o volume, remove o mudo
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const playNextTrack = () => {
    // Vai para a próxima música, ou volta para a primeira se for a última
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIndex);
  };

  // Se não houver músicas, o componente não renderiza nada
  if (playlist.length === 0) {
    return null;
  }

  const currentTrack = playlist[currentTrackIndex];

  return (
    <div className="music-player">
      {/* O elemento <audio> fica escondido, nós o controlamos via botões */}
      <audio
        ref={audioRef}
        src={currentTrack.arquivo_audio}
        onEnded={playNextTrack} // Quando a música acaba, toca a próxima
      />

      <div className="track-info">
        <p>Tocando agora: {currentTrack.titulo} - {currentTrack.artista}</p>
      </div>

      <div className="controls">
        <button onClick={handlePlayPause} className="play-pause-btn">
          {isPlaying ? '❚❚' : '▶'}
        </button>
        <div className="volume-control">
          <button onClick={toggleMute} className="mute-btn">
            {isMuted || volume === 0 ? '🔇' : '🔊'}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;