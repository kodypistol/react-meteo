import React from 'react';
import "./style.css";

import Image from "components/Image";

let isHolding = false;

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

    function onClickStart (event) {
        xDown = event.clientX;
        isHolding = true;
        console.log("Down");
    }

    function onClickEnd () {
        isHolding = false;
    }

    function onClickMove (event) {
        if(isHolding) {
            let xDir = xDown - event.clientX;
            // console.log(xDown, event.clientX, xDir);

            if(Math.abs(xDir) > 10) { // Min swipe distance
                if(xDir > 0) { // Wich swipe direction ?
                    back();
                }else {
                    next();
                }
            }
            xDown = event.clientX;
        }
        
    }

    return (
        <div className="slider">
            <ul className="image-list" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} 
            onMouseDown={onClickStart} onMouseUp={onClickEnd} onMouseMove={onClickMove}>
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
