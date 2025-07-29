import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ServiceGrid } from "../components/ServiceGrid";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ServiceGrid />
      <Footer />
    </>
  );
};
