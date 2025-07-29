import React from "react";
import "./ServiceCard.css";

type Props = {
  titulo: string;
  descricao: string;
  imagem?: string;
};

export const ServiceCard = ({ titulo, descricao, imagem }: Props) => {
  return (
    <div className="service-card">
      {imagem && <img src={imagem} alt={titulo} className="service-icon" />}
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
};
