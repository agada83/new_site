import React, { Component } from 'react';
import '../fonts/Montserrat-Black.ttf'
import '../App.css'
import FirstComp from '../Companents/FirstComp.js'
import ServicesComp from '../Companents/ServicesComp.js'


class Home extends Component {
  render() {

    return (
      <div>
        <FirstComp />
        <ServicesComp />
      </div>
    );
  }
}

export default Home;