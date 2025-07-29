import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer" id="endereco">
      <p>Dantas Barreto 161A, Garanhuns - PE, 55293465</p>
      <p>
        &copy; {new Date().getFullYear()} LCM Créditos. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};
