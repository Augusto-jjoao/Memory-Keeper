// src/pages/HomePage.jsx

import React, { useState, useEffect } from 'react';
import './HomePage.css';

// Nosso "banco" de frases de boas-vindas
const frasesComuns = [
  "Meu amoRR ❤️",
  "Meu Deus... Aquela menina..",
  "Tudo ficou diferente com você",
  "Você é meu motivo",
  "Makes me wanna shine",
  "See you in the moorning is a motivation",
];

// Função que verifica se hoje é uma data especial
function getMensagemEspecial() {
  const hoje = new Date();
  const dia = hoje.getDate();
  const mes = hoje.getMonth() + 1; // Meses em JS são de 0 a 11
  const anoAtual = hoje.getFullYear();

  // Dia 10 de Outubro - Nosso Aniversário
  if (dia === 10 && mes === 10) {
    const anoQueNosConhecemos = 2024;
    const anosDeNamoro = anoAtual - anoQueNosConhecemos;
    return `Feliz ${anosDeNamoro} ano${anosDeNamoro > 1 ? 's' : ''}, meu amor! Te amo.`;
  }

  // Dia 27 de Fevereiro - Aniversário dela
  if (dia === 27 && mes === 2) {
    return "Feliz aniversário, minha rainha! Que seu dia seja tão incrível quanto você.";
  }

  // Adicione outras datas especiais aqui...
  // if (dia === XX && mes === XX) { ... }

  // Se não for uma data especial, retorna nulo
  return null;
}


function HomePage() {
  // Estado para a frase do banner
  const [mensagem, setMensagem] = useState('');

  // Estado para guardar os links das imagens que vêm do backend
  const [imagensDecorativas, setImagensDecorativas] = useState({ home_esquerda: null, home_direita: null });

  // Estado para controlar a animação de entrada
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. Define a frase (seja especial ou uma aleatória)
    const mensagemEspecial = getMensagemEspecial();
    if (mensagemEspecial) {
      setMensagem(mensagemEspecial);
    } else {
      const indiceAleatorio = Math.floor(Math.random() * frasesComuns.length);
      setMensagem(frasesComuns[indiceAleatorio]);
    }

    // 2. Busca as imagens decorativas na nossa API
    fetch('http://127.0.0.1:8000/api/decoracao/')
      .then(response => response.json())
      .then(data => {
        const imagens = {};
        // Organiza as imagens nos lugares certos
        data.forEach(item => {
          if (item.nome === 'home_esquerda') {
            imagens.home_esquerda = item.imagem;
          } else if (item.nome === 'home_direita') {
            imagens.home_direita = item.imagem;
          }
        });
        setImagensDecorativas(imagens);
        // 3. Ativa o estado de "carregado" para disparar a animação no CSS
        setIsLoaded(true);
      })
      .catch(error => console.error("Erro ao buscar imagens decorativas!", error));

  }, []); // O [] garante que este código rode apenas uma vez

  return (
    // A classe 'loaded' é adicionada aqui quando as imagens terminam de carregar
    <div className={`homepage-container ${isLoaded ? 'loaded' : ''}`}>

      {/* A imagem da esquerda só aparece se o link dela existir */}
      {imagensDecorativas.home_esquerda && (
        <img
          src={imagensDecorativas.home_esquerda}
          alt="Decoração esquerda"
          className="homepage-imagem-decorativa esquerda"
        />
      )}

      <h1 className="homepage-frase">{mensagem}</h1>

      {/* A imagem da direita só aparece se o link dela existir */}
      {imagensDecorativas.home_direita && (
        <img
          src={imagensDecorativas.home_direita}
          alt="Decoração direita"
          className="homepage-imagem-decorativa direita"
        />
      )}
    </div>
  );
}

export default HomePage;