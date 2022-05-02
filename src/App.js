import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Comercio from "./pages/Comercio";

import './css/App.css';

function App() {
  return (
    <div className="Container">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/tienda" element={<Comercio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
