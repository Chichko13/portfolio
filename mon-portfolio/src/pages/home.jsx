import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/About";
import Footer from "../components/footer";
import Projets from "../components/project";
import Skills from "../components/skills";
import ExternalLink from "../components/link";
import Mail from "../components/mail";
import Contact from "../components/contact";
function Home() {
  return (
    <div>
      <Header />
      <ExternalLink />
      <Mail />
      <section id="hero" className="hero">
        <Hero />
      </section>
      <section id="about" className="about">
        <About />
      </section>
      <section id="skills" className="skills">
        <Skills />
      </section>
      <section className="projects">
        <Projets />
      </section>
      <section className="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
