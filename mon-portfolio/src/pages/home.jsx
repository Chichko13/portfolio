import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/About";
import Footer from "../components/footer";
import Projets from "../components/project";
import Skills from "../components/skills";
import ExternalLink from "../components/link";
import Mail from "../components/mail";
import Contact from "../components/contact";
import Loader from "../components/loader";
function Home() {
  const [loading, setLoading] = useState(true);
  const [showHeader, setShowHeader] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [showBottom, setShowBottom] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    const headerTimer = setTimeout(() => {
      setShowHeader(true);
    }, 3000);
    const heroTimer = setTimeout(() => {
      setShowHero(true);
    }, 4000);
    const bottomTimer = setTimeout(() => {
      setShowBottom(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(headerTimer);
      clearTimeout(heroTimer);
      clearTimeout(bottomTimer);
    };
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div>
          <header className={showHeader ? "fadeIn" : "hidden"}>
            <Header />
          </header>
          <main>
            <section
              id="hero"
              className={`hero ${showHero ? "fadeIn" : "hidden"}`}
            >
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
            <section className="contact" id="contact">
              <Contact />
            </section>
            <ExternalLink
              className={`link ${showBottom ? "fadeIn" : "hidden"}`}
            />
            <Mail className={`mail ${showBottom ? "fadeIn" : "hidden"}`} />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
