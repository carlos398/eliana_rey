import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Inicio from "./pages/Inicio";
import Comercio from "./pages/Comercio";

import "./css/App.css";
import Navigation from "./components/Navegation";

function App() {

  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="Container">
      <header>
        <button onClick={toggleNav}>
          <img src={require("./images/menu.png")} alt="facebook" />
        </button>
        <h1>ElianaRey</h1>
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
    </div>
  );
}

export default App;
