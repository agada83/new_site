import React, { Component } from 'react';
import '../fonts/Montserrat-Black.ttf'
import '../App.css'
import FirstComp from '../Companents/FirstComp.js'
import ServicesComp from '../Companents/ServicesComp.js'
import Info from '../Companents/Info/Info.js'
import Team from '../Companents/Team/Team.js'

class Home extends Component {
  render() {

    return (
      <div style={{display:'block'}}>
        {/* <FirstComp />
        <ServicesComp />
        <Info /> */}
        <Team />
      </div>
    );
  }
}

export default Home;