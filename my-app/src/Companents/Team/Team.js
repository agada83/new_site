import React from 'react';
import CarouselStyle from './Carousel-style/Carousel-style.js';
import Manager from './Manager/Manager.js';
import CarouselAdmins from './Carousel-admins/Carousel-admins.js';
import './Team.css'
const Team = () => {
  return (
    <div className='team-box'>
      <div className='separator'>
        <a>Стилисты</a>
        <hr/>
      </div>
      <CarouselStyle/>
      <Manager/>
      <CarouselAdmins/>
    </div>
  );
};

export default Team;