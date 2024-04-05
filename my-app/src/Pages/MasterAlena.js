import React from 'react';
import Reviews from '../Companents/Reviews/Reviews.js'
import AlenaPage from '../Companents/AlenaPage/AlenaPage.js';
import Sale from '../Companents/Sale/Sale.js';
import PartnerBrands from '../Companents/PartnerBrands/PartnerBrands.js';
import Footer from '../Companents/Footer/Footer.js';


function MasterAlena() {
  return (
    <div id='main'>
      <AlenaPage />
      <Sale />
      <Reviews />
      <PartnerBrands />
      <Footer />
    </div>
  );
}

export default MasterAlena;
