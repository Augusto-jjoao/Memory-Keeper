// src/pages/HistoriaPage.jsx
import React, { useState, useEffect } from 'react';
import Capitulo from '../components/Capitulo'; // <-- 1. IMPORTE O NOVO COMPONENTE
import './HistoriaPage.css';

function HistoriaPage() {
  const [capitulos, setCapitulos] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/historias/')
      .then(response => response.json())
      .then(data => {
        const capitulosOrdenados = data.sort((a, b) => new Date(a.data_evento) - new Date(b.data_evento));
        setCapitulos(capitulosOrdenados);
      })
      .catch(error => console.error("Houve um erro ao buscar a história!", error));
  }, []);

  return (
    <div className="historia-container">
      <h1 className="historia-titulo-principal">Nossa História...</h1>
      {capitulos.map(capitulo => (
        // 2. SUBSTITUA O <section> PELO NOSSO NOVO COMPONENTE
        <Capitulo key={capitulo.id} capitulo={capitulo} />
      ))}
    </div>
  );
}

export default HistoriaPage;