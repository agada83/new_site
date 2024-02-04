import React, { Component } from 'react';
import './Footer.css'
import whatsappImg from '../../assets/whatsappImg.png'


class Footer extends Component {
    render() {
  
      return (
        <div className='ft-body' id='footer'>
            <div className='ft-content'>
                <iframe src="https://yandex.ru/map-widget/v1/?ll=37.672792%2C55.776143&mode=search&oid=121516923860&ol=biz&z=17" className="map-frame" allowfullscreen="true"></iframe>
                <div className='ft-info'>
                    <div className='ft-item'><h1 className='div-h'>АДРЕС</h1><a className='div-a'>Нижняя Красносельская 35 стр. 3, п. 2</a></div>
                    <div className='ft-item'><h1 className='div-h'>КОНТАКТЫ</h1><a className='div-a'>+7 (905) 798-16-28</a></div>
                    <div className='ft-item'><h1 className='div-h'>ГРАФИК РАБОТЫ</h1><a className='div-a'>Пн-Ср 09:00–21:00<br/>Чт-Сб 10:00–22:00<br/>Вс 10:00–21:00</a></div>
                    <div className='ft-item'><h1 className='div-h'>МЕТРО</h1>
                        <div className='metro'><div className='ft-line'><div className='ft-bd red'/><a className='div-a'>Красносельская</a></div></div>
                        <div className='metro'><div className='ft-line'><div className='ft-bd blue'/><a className='div-a'>Бауманская</a></div></div>
                        <div className='metro'><div className='ft-line'><div className='ft-bd red'/><a className='div-a'>Комсомольская</a></div></div>
                    </div>
                    <div className='ft-item'><h1 className='div-h'>СОЦСЕТИ</h1><div style={{display:'flex'}}><img src={whatsappImg} width={'30px'} /><a className='a-href' href='https://wa.me/7XXXXXXXXXX'>Чат WhatsApp</a></div></div>
                </div>
            </div>
        </div>
        );
    }
  }
   
  export default Footer;