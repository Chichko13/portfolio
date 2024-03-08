import { useState } from "react";

function Skills() {
  const data = [
    { id: "1", name: "React", logo: "" },
    { id: "2", name: "Sass", logo: "" },
    { id: "3", name: "React-router", logo: "" },
    { id: "4", name: "Vite", logo: "" },
    { id: "5", name: "Redux", logo: "" },
    { id: "6", name: "Java es6", logo: "" },
    { id: "7", name: "Git", logo: "" },
  ];
  const [active, setActive] = useState("compétences");
  const changeSection = (section) => {
    setActive(section);
  };
  return (
    <>
      <h2 className="title">Compétences & Formation</h2>
      <div className="skills__container">
        <div className="skills__container__btn">
          <button
            onClick={() => changeSection("compétences")}
            className={`skills__btn ${
              active === "compétences" ? "active" : ""
            }`}
          >
            Compétences
          </button>
          <button
            onClick={() => changeSection("formation")}
            className={`skills__btn ${active === "formation" ? "active" : ""}`}
          >
            Formation
          </button>
        </div>
        {active === "compétences" && (
          <div className="skills__content">
            <h3>Mes languages</h3>
            <ul>
              {data.map((tech) => (
                <li key={tech.id}>
                  {tech.logo && <img src={tech.logo} alt={tech.name} />}
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {active === "formation" && (
          <div className="skills__content">
            <h3>
              Intégrateur Web chez{" "}
              <a
                href="https://openclassrooms.com/fr/paths/900-integrateur-web"
                target="_blank"
              >
                @OpenClassRoom
              </a>
            </h3>
            <p className="skills__formation--text">
              J'ai suivie une formations Intégrateur Web auprès d'OpenClassRoom
              qui à durée 9 mois.
            </p>
          </div>
        )}

        <div className="skills__barre"></div>
      </div>
    </>
  );
}
export default Skills;
