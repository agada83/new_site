import './Carousel.css'
import { Children, cloneElement, useEffect, useState } from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'


const PAGE_WIDTH = 450

export const Carousel = ({children}) => {
    const [pages, setPages] = useState([])

    const handleLeftArrowClick = () =>{
        console.log('handleLeftArrowClick')
    }
    const handleRightArrowClick = () =>{
        console.log('handleRightArrowClick')
    }


    useEffect(()=>{
setPages(
    Children.map(children, child => {
        return cloneElement(child, {
            style:{
                minWidth:`${PAGE_WIDTH}px`,
                maxWidth:`${PAGE_WIDTH}px`,
                height:'100%'
            }
        })
    })
)
    },[])

    return (
        <div className="main-container">
            <FaChevronLeft className='arrow' onClick={handleLeftArrowClick}/>
            <div className="window">
                <div className="all-pages-container">
                    {children}
                </div>
            </div>
            <FaChevronRight className='arrow' onClick={handleRightArrowClick}/>
        </div>
    )
}