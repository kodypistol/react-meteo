import React from 'react';
import "./style.css";

import Image from "components/Image";

function Slider (props) {   
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    
    function next() {
        if(currentImageIndex === props.images.length - 1) {
            setCurrentImageIndex(0);
        }
        else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }

    function back() {
        if(currentImageIndex === 0) {
            setCurrentImageIndex(props.images.length - 1);
        }
        else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    }

    // Swipe detection
    let xDown = 0;

    function onTouchStart (event) {
        xDown = event.touches[0].screenX;
    }

    function onTouchEnd (event) {        
        let xDir = xDown - event.changedTouches[0].screenX;
        if(Math.abs(xDir) > 40) { // Min swipe distance
            if(xDir > 0) { // Wich swipe direction ?
                back();
            }else {
                next();
            }
        }
    }

    return (
        <div className="slider">
            <ul className="image-list" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                {props.images.map((image, index) => (
                    <li key={index}>
                        <Image src={image} alt="Slider component" className={index === currentImageIndex ? "active" : "unactive"} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Slider;
