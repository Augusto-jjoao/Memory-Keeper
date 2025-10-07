// src/components/Capitulo.jsx
import React, { useState, useEffect, useRef } from 'react';

// Recebemos os dados do capítulo como uma "prop"
function Capitulo({ capitulo }) {
  // 1. Criamos um estado para saber se o componente está visível ou não
  const [isVisible, setIsVisible] = useState(false);

  // 2. Criamos uma referência para "marcar" o elemento <section> no DOM
  const ref = useRef(null);

  // 3. Este useEffect vai rodar uma vez para configurar o observador
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quando o elemento entra na tela (isIntersecting), mudamos o estado
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Depois de se tornar visível uma vez, paramos de observar
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1 // Dispara quando 10% do elemento estiver visível
      }
    );

    // Começamos a observar o elemento que marcamos com a ref
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Limpamos o observador quando o componente é desmontado
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // 4. Usamos a ref no elemento e adicionamos a classe 'visible' condicionalmente
  return (
    <section ref={ref} className={`capitulo ${isVisible ? 'visible' : ''}`}>
      <h2>{capitulo.titulo}</h2>
      <p className="capitulo-data">{new Date(capitulo.data_evento).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' })}</p>

      {capitulo.imagem_capitulo && (
        <img
          src={capitulo.imagem_capitulo}
          alt={capitulo.titulo}
          className="capitulo-imagem"
        />
      )}

      <div className="capitulo-texto" dangerouslySetInnerHTML={{ __html: capitulo.texto.replace(/\n/g, '<br />') }} />
    </section>
  );
}

export default Capitulo;