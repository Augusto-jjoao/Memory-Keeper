// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  // Usando o new Date() para pegar o ano atual automaticamente.
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Feito com todo o meu amor para você. ❤️</p>
      <p>&copy; {anoAtual} | Nossa História</p>
    </footer>
  );
}

export default Footer;