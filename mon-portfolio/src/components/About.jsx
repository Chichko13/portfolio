import Photo from "../assets/images/picture.webp";
function About() {
  return (
    <>
      <h2 className="title">A propos de moi</h2>
      <div className="about__container">
        <div>
          <p className="about__text">
            Salut ! Je suis Alexandre, intrigué par le développement depuis
            quelque temps. J'ai décidé de me lancer dans une formation
            intégrateur web avec OpenClassroom en juin 2023.
          </p>
          <p>
            Grâce à celle-ci j'ai pu acquérir les bases nécessaires à mon
            évolution dans la voie du développement.
          </p>
        </div>
        <div className="about__image">
          <img src={Photo} alt="image de moi mais c'est pas moi" />
        </div>
      </div>
    </>
  );
}

export default About;
