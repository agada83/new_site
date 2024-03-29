import React, { Component } from 'react'; 
import './AboutUs.css' 
 
 
class AboutUs extends Component { 
    render() { 
   
      return ( 
            <div className='ab-body'> 
              <div className='ab-text'> 
                <div className='ab-hr'><h3>НАША ФИЛОСОФИЯ<hr/></h3></div> 
                <p>«Тinto» – в переводе означает "красный" – выражает представление о наивысшей красоте. Красный цвет – символ здоровья и процветания. Мы по-особому относимся к слову «ЦВЕТ» </p> 
                <p style={{textAlign:'center'}}>"Цвет — один из фундаментальных элементов восприятия мира! Цвет – это продукт света, вызывающий эмоции."</p> 
                <h4>Гёте И.В.</h4> 
                <p>Мы понимаем важность и ответственность нашей задачи и сделаем все для того чтобы у Вас остались только положительные эмоции! До встречи в «Тinto beauty»!</p> 
              </div> 
              <div className='video'><iframe height="472" src="https://www.youtube.com/embed/8BIHgnV_VOw?si=JA-YKrcjcKewVJx2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> 
            </div> 
        ); 
    } 
  } 
    
  export default AboutUs;