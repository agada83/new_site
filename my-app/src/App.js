// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Header from './Companents/Header/Header.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Prices from './Pages/Prices.js';
import MasterOksana from './Pages/MasterOksana.js';
import MasterVera from './Pages/MasterVera.js';
import MasterEkaterina from './Pages/MasterEkaterina.js';
import MasterAlena from './Pages/MasterAlena.js';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (!pathname.includes('#')) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/prices" element={<Prices />} />
          <Route exact path="/oksana-makalkina" element={<MasterOksana />} />
          <Route exact path="/vera-marycheva" element={<MasterVera />} />
          <Route exact path="/ekaterina-loseva" element={<MasterEkaterina />} />
          <Route exact path="/alena-galan" element={<MasterAlena />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
