import React, { Component } from 'react';
import bgImg from "../assets/bgImg.png"
import '../App.css'

class FirstComp extends Component {
  render() {

    return (
      <div style={{width:'100%',height:'800px',backgroundColor: '#474747',backgroundImage: `url(${bgImg})`, backgroundRepeat: "no-repeat",backgroundSize: "contain"}}>
        {/* <img 
          src={dForest}
          width="100%"
        /> */}
        <div >
          <div className='font-montserrat-regular' style={{marginLeft: '20%',position: 'relative', top: '140px',}}>
            <a style={{fontSize:'900%',color:'white'}}>TINTO</a>
            <div style={{marginLeft: '73%',position: 'relative', top: '-195px'}}>
              <a style={{fontSize:'250%',color:'white',}}>Скидка 20%</a><br/>
              <a style={{fontSize:'125%',color:'white',position: 'relative', top: '-10px',}}>на первое посещение</a><br/>
              <button style={{fontSize:'125%',position: 'relative', top: '5px',borderRadius:'25px', width:'240px',height:'50px',backgroundColor:'transparent',color:'white',borderColor:'white',border:'2px solid'}}>Записаться</button>
            </div>
          </div>
          <div className='font-montserrat-regular' style={{marginLeft: '27%',position: 'relative', top: '-50px'}}>
          <a style={{fontSize:'900%',color:'white'}}>BEAUTY SALON</a>
          </div>
          <div className='font-montserrat-light' style={{marginLeft: '18%',position: 'relative', top: '70px'}}>
            <a style={{fontSize:'100%',color:'white'}}>Нижняя Красносельская 35 стр. 3, п. 2 </a><br />
            <a style={{fontSize:'100%',color:'white'}}>+7 905 798 16 28</a><br />

          </div>
        </div>
      </div>
    );
  }
}
 
export default FirstComp;