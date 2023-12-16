import React, { Component } from 'react';
import CarouselBox from '../Companents/CarouselBox';
import dForest from "../assets/forest.jpg";
import bgImg from "../assets/bgImg.png"
import { Container } from 'react-bootstrap';

class Home extends Component {
  render() {

    return (
      <div style={{width:'100%',height:'11100px',backgroundColor: '#474747',backgroundImage: `url(${bgImg})`, backgroundRepeat: "no-repeat",backgroundSize: "contain"}}>
        {/* <img 
          src={dForest}
          width="100%"
        /> */}
        <a style={{fontFamily:'Montserrat', fontSize:'128px'}}>Hello world!!!</a>
      </div>
    );
  }
}
 
export default Home;