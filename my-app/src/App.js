// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Companents/Header/Header.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Promo from './Pages/Promo.js';
import Prices from './Pages/Prices.js';
import Masters from './Pages/Masters.js';
import Services from './Pages/Services.js';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/promo" element={<Promo />} />
          <Route exact path="/prices" element={<Prices />} />
          <Route exact path="/masters" element={<Masters />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
