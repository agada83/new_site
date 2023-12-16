import React, { Component } from 'react';
import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import forestImg from "../assets/forest.jpg"
import dforestImg from "../assets/dforest.jpg"

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={forestImg}
                        alt='Forest'
                    />
                    <Carousel.Caption>
                        <h3>123</h3>
                        <p>321</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={dforestImg}
                        alt='Forest'
                    />
                    <Carousel.Caption>
                        <h3>234</h3>
                        <p>432</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;