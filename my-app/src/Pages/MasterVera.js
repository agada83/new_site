import React from 'react';
import Reviews from '../Companents/Reviews.js'
import VeraPage from '../Companents/VeraPage/VeraPage.js';
import Sale from '../Companents/Sale/Sale.js';
import PartnerBrands from '../Companents/PartnerBrands/PartnerBrands.js';
import Footer from '../Companents/Footer/Footer.js';


function MasterVera() {
  return (
    <div>
      <VeraPage />
      <Sale />
      <Reviews />
      <PartnerBrands />
      <Footer />
    </div>
  );
}

export default MasterVera;
