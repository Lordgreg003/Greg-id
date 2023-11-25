import React from "react";
import { Hero, About, Project1, Others } from "../components/home";
import { Footer, Nav } from "../components/layouts/Index";

const HomeScreen = () => {
  return (
    <section>
      <Nav />
      <Hero />
      <About />
      <Project1 />
      <Others />
      <Footer />
    </section>
  );
};

export default HomeScreen;
