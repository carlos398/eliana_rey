import React from "react";
import logo from "../images/logoERsvg.svg";

import "../css/FooterComp.css";

const FooterComp = () => {
  return (
    <div className="footerContainer">
      <div className="ElianaRey_Redes">
        <div className="ElianaRey_Redes_Logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="ElianaRey_Redes_Social">
          <a href="" target="_blank">
            <i className="fab fa-facebook-f">facebook</i>
          </a>
          <a href="" target="_blank">
            <i className="fab fa-facebook-f">facebook</i>
          </a>
          <a href="" target="_blank">
            <i className="fab fa-facebook-f">facebook</i>
          </a>
        </div>
      </div>
      <div className="creadroRedes">
        <a href="" target="_blank">
          <i className="fab fa-facebook-f">facebook</i>
        </a>
        <a href="" target="_blank">
          <i className="fab fa-facebook-f">facebook</i>
        </a>
        <a href="" target="_blank">
          <i className="fab fa-facebook-f">facebook</i>
        </a>
      </div>
    </div>
  );
};

export default FooterComp;
