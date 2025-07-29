import React from 'react'
import { ServiceCard } from './ServiceCard';
import './ServiceGrid.css';

const services = [
  { titulo: 'INSS', descricao: 'Crédito para aposentados e pensionistas.' },
  { titulo: 'CLT', descricao: 'Empréstimo com desconto na folha para carteira assinada.' },
  { titulo: 'Bolsa Família', descricao: 'Crédito com agilidade e condições especiais.' },
  { titulo: 'FGTS', descricao: 'Antecipe seu Saque-Aniversário.' },
  { titulo: 'Conta de Energia', descricao: 'Desconto direto na conta de luz, sem SPC/Serasa.' },
  { titulo: 'Servidor Estadual', descricao: 'Ativos e inativos com desconto direto em folha.' },
  { titulo: 'Servidor Federal', descricao: 'Condições exclusivas para servidores federais.' },
  { titulo: 'LOAS', descricao: 'Representantes legais com crédito facilitado.' },
];

export const ServiceGrid = () => {
  return (
    <section id="servicos" className="service-grid">
      {services.map((s, i) => (
        <ServiceCard key={i} {...s} />
      ))}
    </section>
  );
};
