import React from 'react';
import Reviews from '../Companents/Reviews.js'
import Sale from '../Companents/Sale/Sale.js';
import PartnerBrands from '../Companents/PartnerBrands/PartnerBrands.js';
import Footer from '../Companents/Footer/Footer.js';
import TatyanaPage from '../Companents/TatianaPage/TatyanaPage.js';


function MasterTatyana() {
  return (
    <div id='main'>
      <TatyanaPage />
      <Sale />
      <Reviews />
      <PartnerBrands />
      <Footer />
    </div>
  );
}

export default MasterTatyana;
