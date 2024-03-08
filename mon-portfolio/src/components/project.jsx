import React from "react";
import Nina from "../assets/images/nina.webp";
import ArgentBank from "../assets/images/argentbank.webp";
import Ohmyfood from "../assets/images/ohmyfood.webp";

function Projets() {
  const data = [
    {
      title: "Nina Carducci",
      imgSrc: Nina,
      github: "https://github.com/Chichko13/ninacarducci.github.io",
      page: "https://chichko13.github.io/ninacarducci.github.io/",
      description:
        "Optimisations du SEO et accessibilité du site de photographe Nina Carducci avec l'aide de Lighthouse",
    },
    {
      title: "Ohmyfood",
      imgSrc: Ohmyfood,
      github: "https://github.com/Chichko13/Open_Classrooms_Projet-4",
      page: "https://chichko13.github.io/Open_Classrooms_Projet-4/",
      description:
        "Améliorer l'interface d'un site mobile avec des animations CSS. Première utilisations de SASS et des animations.",
    },
    {
      title: "Argent Bank",
      imgSrc: ArgentBank,
      github: "https://github.com/Chichko13/ArgentBank-website",
      page: "",
      description:
        "Implémentations du front-end d'une application bancaire en utilisant React et Redux grâces aux appels API.",
    },
  ];
  return (
    <>
      <h2 className="title" id="projects">
        Mes projets
      </h2>
      <div className="projects__container">
        {data.map((project) => (
          <div className="projects__item" key={project.title}>
            <a
              href={project.page || project.github}
              className="projects__img"
              target="_blank"
            >
              <img src={project.imgSrc} alt={project.title} />
            </a>
            <div className="projects__content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="projects__content--svg">
                <a href={project.github} target="_blank">
                  <title>GitHub</title>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href={project.page} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-external-link"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Projets;
