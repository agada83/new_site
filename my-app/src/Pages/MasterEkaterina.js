import React from 'react';
import Reviews from '../Companents/Reviews/Reviews.js'
import Sale from '../Companents/Sale/Sale.js';
import PartnerBrands from '../Companents/PartnerBrands/PartnerBrands.js';
import Footer from '../Companents/Footer/Footer.js';
import EkaterinaPage from '../Companents/EkaterinaPage/EkaterinaPage.js';


function MasterEkaterina() {
  return (
    <div id='main'>
      <EkaterinaPage />
      <Sale />
      <Reviews />
      <PartnerBrands />
      <Footer />
    </div>
  );
}

export default MasterEkaterina;
