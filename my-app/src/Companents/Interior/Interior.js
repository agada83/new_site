import React, { Component } from 'react';
import './Interior.css'
import interoirImg1 from '../../assets/interiorImg/interoir1.png'
import interoirImg2 from '../../assets/interiorImg/interoir2.png'
import interoirImg3 from '../../assets/interiorImg/interoir3.png'
import interoirImg4 from '../../assets/interiorImg/interoir4.png'

class Interior extends Component {
    render() {
  
      return (
            <div className='int-body' id='interior'>
                <h1>ИНТЕРЬЕР</h1>
                <div className='img-pole'>
                    <div className='first-item-img'><img src={interoirImg1} alt='interoirImg1'/></div>
                    <div className='second-item-img'>
                        <div className='third-item-img'><img src={interoirImg2} alt='interoirImg2'/></div>
                        <div className='fourth-item-img'>
                            <div className='fifth-item-img'><img src={interoirImg3} alt='interoirImg3'/></div>
                            <div className='sixth-item-img'><img src={interoirImg4} alt='interoirImg4'/></div>
                        </div>
                    </div>
                </div>
                <div className='int-text'><div className='int-text1'><a>Красивый и уютный интерьер создает приятную атмосферу, которая помогает расслабиться и насладиться процессом ухода за собой. Поэтому мы уделяем большое внимание дизайну и оформлению нашего салона, чтобы создать идеальное пространство для наших клиентов и сотрудников.</a></div></div>
            </div>
        );
    }
  }
   
  export default Interior;