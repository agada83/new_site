import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Companents/Header";
import Home from "./Pages/Home"
import Carousel from './Companents/Carousel/Carousel.js'

function App() {
  return (
    // <div>
    //   <Header />
    // </div>  
    <Carousel>
      <div className='item item-1'>1</div>
      <div className='item item-2'>2</div>
      <div className='item item-3'>3</div>
    </Carousel>
  );
}

export default App;
