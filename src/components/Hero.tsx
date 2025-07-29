import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <h2>Soluções financeiras com rapidez e segurança</h2>
      <p>Atendimento humanizado e condições que cabem no seu bolso.</p>
      <a
        href="https://wa.me/558796389947"
        target="_blank"
        rel="noopener"
        className="btn-contato"
      >
        Fale conosco no WhatsApp
      </a>
    </section>
  );
};
