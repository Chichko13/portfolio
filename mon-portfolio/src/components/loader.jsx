import React from "react";
import Logo from "../assets/images/logo_A.svg";

function Loader() {
  return (
    <div className="loader">
      <img src={Logo} alt="Logo du portfolio" className="loader__animation" />
    </div>
  );
}

export default Loader;
