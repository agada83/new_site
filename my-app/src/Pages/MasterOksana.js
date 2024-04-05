import React from 'react';
import Reviews from '../Companents/Reviews/Reviews.js'
import OksanaPage from '../Companents/OksanaPage/OksanaPage.js';
import Sale from '../Companents/Sale/Sale.js';
import PartnerBrands from '../Companents/PartnerBrands/PartnerBrands.js';
import Footer from '../Companents/Footer/Footer.js';


function MasterOksana() {
  return (
    <div id='main'>
      <OksanaPage />
      <Sale />
      <Reviews />
      <PartnerBrands />
      <Footer />
    </div>
  );
}

export default MasterOksana;
