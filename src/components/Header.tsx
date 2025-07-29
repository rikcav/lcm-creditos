import React from "react";
import "./Header.css";
import logo from "../../public/lcm_header.png";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="LCM Créditos Logo" className="logo-image" />
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
