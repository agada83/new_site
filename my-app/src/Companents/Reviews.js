import React, { Component } from 'react';

class Reviews extends Component {
  render() {
        return (
            <div style={{marginBottom:'150px',marginTop:'100px'}}>
              <h1 style={{fontFamily:'Montserrat',fontSize:'40px', textAlign:'center',marginBottom:'75px'}}>Отзывы</h1>
              <div style={{width:'560px',marginLeft:'auto',marginRight:'auto',height:'800px',overflow:'hidden',position:'relative'}}><iframe style={{width:'100%',height:'100%',border:'1px solid #e6e6e6',borderRadius:'8px',boxSizing:'border-box'}} src="https://yandex.ru/maps-reviews-widget/121516923860?comments"></iframe><a href="https://yandex.ru/maps/org/tinto/121516923860/" target="_blank" style={{boxSizing:'border-box',textDecoration:'none',color:'#b3b3b3',fontSize:'10px',fontFamily:'YS Text,sans-serif',padding:'0 20px',position:'absolute',bottom:'8px',width:'100%',textAlign:'center',left:'0',overflow:'hidden',textOverflow:'ellipsis',display:'block',maxHeight:'14px',whiteSpace:'nowrap',padding:'0 16px',boxSizing:'border-box'}}>Tinto на карте Москвы — Яндекс Карты</a></div>
            </div>
        );
    }
}

export default Reviews;
