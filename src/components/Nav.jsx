import React from "react";

const Nav = () => {
  return (
    <div className="navContainer">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/tienda">Comercio</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
