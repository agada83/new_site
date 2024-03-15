import React, { Component } from 'react';
import './Interior.css'
import interoirImg1 from '../../assets/interiorImg/interoir1.png'
import interoirImg2 from '../../assets/interiorImg/interoir2.png'
import interoirImg3 from '../../assets/interiorImg/interoir3.png'
import interoirImg4 from '../../assets/interiorImg/interoir4.png'
import interoirImgmb1 from '../../assets/interiorImg/interoir1mb.png'
import interoirImgmb2 from '../../assets/interiorImg/interoir2mb.png'
import interoirImgmb3 from '../../assets/interiorImg/interoir3mb.png'
import interoirImgmb4 from '../../assets/interiorImg/interoir4mb.png'

class Interior extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth
        };
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    
    handleWindowSizeChange = () => {
        this.setState({ windowWidth: window.innerWidth });
    };
    render() {
        const { windowWidth } = this.state;
        const redirectToPage = () => {
          // Укажите URL страницы, на которую вы хотите перейти
          const targetPageUrl = "#registration";
          
          // Переносим пользователя на указанную страницу
          window.location.href = targetPageUrl;
        };
        if (windowWidth > 768) {
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
    } else {
        return (
        <div className='invmb-box'>
            <h1>ИНТЕРЬЕР</h1>
            <div className='invmb-content'>
                <div className='invmb-item1'><img className='invmb-img' src={interoirImgmb2}/></div>
                <div className='invmb-item2'><img className='invmb-img' src={interoirImgmb4}/></div>
                <div className='invmb-item3'><img className='invmb-img' src={interoirImgmb3}/></div>
                <div className='invmb-item4'><img className='invmb-img' src={interoirImgmb1}/></div>
            </div>
        </div>
            );
        }
  }
}

  export default Interior;