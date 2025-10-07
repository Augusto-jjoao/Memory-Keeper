// src/components/GaleriaFotos.jsx
import React, { useState } from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './GaleriaFotos.css';

function GaleriaFotos({ album, onClose }) {
  // ESTADOS PARA O LIGHTBOX (ZOOM)
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // --- NOVA LÓGICA PARA OS PONTOS CUSTOMIZADOS ---
  // 1. Estado para guardar qual slide está ativo
  const [activeIndex, setActiveIndex] = useState(0);

  // 2. Função que o carrossel vai chamar toda vez que o slide mudar
  const updateCurrentSlide = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };
  // --- FIM DA NOVA LÓGICA ---

  const slides = album.fotos.map(foto => ({
    src: foto.imagem
  }));

  return (
    <div className="galeria-container">
      <button onClick={onClose} className="botao-voltar">
        &larr; Voltar para os Álbuns
      </button>
      <h2>{album.titulo}</h2>
      <p className="galeria-descricao">{album.descricao}</p>

      <div className="carousel-wrapper">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          useKeyboardArrows={true}

          // --- MUDANÇAS NO CARROSSEL ---
          showIndicators={false} // 3. Desligamos os pontos padrão da biblioteca
          onChange={updateCurrentSlide} // 4. Dizemos ao carrossel para nos avisar quando a foto mudar
          selectedItem={activeIndex} // 5. Garantimos que o estado esteja sempre sincronizado
          // --- FIM DAS MUDANÇAS ---
        >
          {album.fotos.map((foto, index) => (
            <div key={foto.id} onClick={() => {
                setPhotoIndex(index);
                setLightboxOpen(true);
            }}>
              <img src={foto.imagem} alt={foto.legenda || ''} />
              {foto.legenda && <p className="legend">{foto.legenda}</p>}
            </div>
          ))}
        </Carousel>

        {/* 6. NOSSOS PRÓPRIOS PONTOS, RENDERIZADOS AQUI, FORA DO CARROSSEL */}
        <div className="custom-dots">
          {album.fotos.map((foto, index) => (
            <span
              key={foto.id}
              className={`custom-dot ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={photoIndex}
      />
    </div>
  );
}

export default GaleriaFotos;