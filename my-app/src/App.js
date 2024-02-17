// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Companents/Header/Header.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Prices from './Pages/Prices.js';
import Masters from './Pages/Masters.js';
import MasterOksana from './Pages/MasterOksana.js';
import MasterVera from './Pages/MasterVera.js';
import MasterEkaterina from './Pages/MasterEkaterina.js';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/prices" element={<Prices />} />
          <Route exact path="/masters" element={<Masters />} />
          <Route exact path="/oksana-makalkina" element={<MasterOksana />} />
          <Route exact path="/vera-marycheva" element={<MasterVera />} />
          <Route exact path="/ekaterina-loseva" element={<MasterEkaterina />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
