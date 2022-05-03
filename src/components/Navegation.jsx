import React from "react";
import { NavLink } from "react-router-dom";

import "../css/Nav.css";

const Navigation = (props) => {

  const show = props.condition ? 'navContainer' : 'noNavContainer';

  return (
    <div className={`${show} navigation`}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/comercio">Comercio</NavLink>
        </li>

      </ul>
    </div>
  );
};

export default Navigation;
