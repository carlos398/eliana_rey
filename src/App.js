import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Comercio from "./pages/Comercio";

import "./css/App.css";

function App() {
  return (
    <div className="Container">
      <header>
        <button>
          <img src={require("./images/menu.png")} alt="facebook" />
        </button>
        <h1>ElianaRey</h1>
      </header>

      <main>
        <Router>
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
