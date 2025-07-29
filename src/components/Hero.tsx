import React from "react";
import { useEffect, useState } from "react";
import "./Hero.css";

const frases = [
  "Soluções financeiras com rapidez e segurança",
  "Atendimento humanizado e condições que cabem no seu bolso",
  "Crédito com confiança, respeito e facilidade",
  "Empréstimos para transformar sua vida com tranquilidade",
];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % frases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <h2 className="hero-frase">{frases[index]}</h2>

      <div className="hero-dots">
        {frases.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Ir para frase ${i + 1}`}
          ></button>
        ))}
      </div>

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
