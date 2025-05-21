import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Interests from './pages/Interests.js'
import Projects from './pages/Projects.js'
import LilyPadPlunge from './pages/projects/LilyPadPlunge.js';
import WindTurbine from './pages/projects/WindTurbine.js'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/personalPortfolio" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Interests" element={<Interests />}/>
        <Route path="/Projects/LilyPadPlunge" element={<LilyPadPlunge />}/>
        <Route path="/Projects/WindTurbine" element={<WindTurbine />}/>
      </Routes>
    </div>
  );
}

export default App;
