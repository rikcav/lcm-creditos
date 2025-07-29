import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <h1>LCM CRÉDITOS</h1>
      <nav>
        <ul>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
          <li>
            <a href="#endereco">Localização</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
