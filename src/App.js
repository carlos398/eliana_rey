import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Inicio from "./pages/Inicio";
import Comercio from "./pages/Comercio";
import Navigation from "./components/Navegation";
import FooterComp from "./components/FooterComp";

import "./css/App.css";


function App() {

  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="Container">
      <header>
        <button onClick={toggleNav}>
          <img src={require("./images/menu.png")} alt="menu" />
        </button>
        <h1>Eliana<span>Rey</span></h1>
      </header>

      <main>
        <Router>
          <Navigation condition = {showNav}/>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/tienda" element={<Comercio />} />
          </Routes>
        </Router>
      </main>

      <footer>
        <FooterComp/>
      </footer>
    </div>
  );
}

export default App;
