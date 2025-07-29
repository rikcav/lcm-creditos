import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer" id="endereco">
      <div className="email-button-wrapper">
        <a className="email-button" href="mailto:mariascredito@gmail.com">
          ✉️ mariascredito@gmail.com
        </a>
      </div>

      <div className="whatsapp-buttons">
        <a
          className="whatsapp-button"
          href="https://wa.me/558796389947"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale com a gente: +55 87 9638-9947
        </a>
        <a
          className="whatsapp-button"
          href="https://wa.me/558796574191"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale com a gente: +55 87 9657-4191
        </a>
      </div>

      <p>Dantas Barreto 161A, Garanhuns - PE, 55293-465</p>
      <p>CNPJ: 60.558.573/0001-67</p>

      <p>
        &copy; {new Date().getFullYear()} LCM Créditos. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};
