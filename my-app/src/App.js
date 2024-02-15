// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Companents/Header/Header.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Promo from './Pages/Promo.js';
import Prices from './Pages/Prices.js';
import Masters from './Pages/Masters.js';
import MasterOksana from './Pages/MasterOksana.js';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/promo" element={<Promo />} />
          <Route exact path="/prices" element={<Prices />} />
          <Route exact path="/masters" element={<Masters />} />
          <Route exact path="/oksana-makalkina" element={<MasterOksana />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
