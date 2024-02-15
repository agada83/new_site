import React from 'react';
import CarouselStyle from './Carousel-style/Carousel-style.js';
import Manager from './Manager/Manager.js';
import CarouselAdmins from './Carousel-admins/Carousel-admins.js';
import './Team.css'
const Team = () => {
  return (
    <div className='team-box' id='team'>
      <h1>Наша команда</h1>
      <div className='separator'>
        <a>Стилисты</a>
        <hr/>
      </div>
      <CarouselStyle/>
      <div className='separator'>
        <a>Управляющий</a>
        <hr/>
      </div>
      <Manager/>
      <div className='separator'>
        <a>Администратор</a>
        <hr/>
      </div>
      <CarouselAdmins/>
    </div>
  );
};

export default Team;