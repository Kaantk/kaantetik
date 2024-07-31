import React, { useEffect } from "react";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import ScrollReveal from "scrollreveal";
import { About } from "./components/pages/About";
import { Projects } from "./components/pages/Projects";
import { Experiences } from "./components/pages/Experiences";
import { Contact } from "./components/pages/Contact";

export const App = () => {
  useEffect(() => {
    // ScrollReveal'i başlatma
    ScrollReveal().reveal("header", {
      distance: "100px",
      origin: "top",
      duration: 2000,
      delay: 300,
    });
    ScrollReveal().reveal("main", {
      distance: "100px",
      origin: "top",
      duration: 2000,
      delay: 300,
    });
    ScrollReveal().reveal("footer", {
      distance: "100px",
      origin: "top",
      duration: 2000,
      delay: 300,
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Experiences />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
