import React, { useEffect, useState } from "react";

import logo from "../assets/images/logo_A.svg";

function Header() {
  const [scroll, setScroll] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const visible = scroll > currentScrollPos || currentScrollPos < 10;
    setScroll(currentScrollPos);
    setVisible(visible);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll, visible]);
  return (
    <div className={visible ? "header" : "header hidden"}>
      <a href="#">
        <img src={logo} alt="Logo du portfolio" className="header__logo" />
      </a>
      <nav className="header__nav">
        <a href="#about" className="header__link">
          À propos
        </a>
        <a href="#skills" className="header__link">
          Compétences
        </a>
        <a href="#projects" className="header__link">
          Projets
        </a>
        <a href="#contact" className="header__link">
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Header;
