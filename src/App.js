import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Interests from './pages/Interests.js'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/personalPortfolio" element={<Home />} />
        <Route path="/Interests" element={<Interests />}/>
      </Routes>
    </div>
  );
}

export default App;
