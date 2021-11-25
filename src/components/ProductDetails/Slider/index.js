import React from 'react';
import "./style.css";

function Slider () {
    const imagesUrl = [
        "https://picsum.photos/300/200",
        "https://picsum.photos/200/300",
        "https://picsum.photos/300/300"
    ];
    
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    function next() {
        if(currentImageIndex === imagesUrl.length - 1) {
            setCurrentImageIndex(0);
        }
        else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }

    function back() {
        if(currentImageIndex === 0) {
            setCurrentImageIndex(imagesUrl.length - 1);
        }
        else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    }

    return (
        <div className="slider">
            <p>{currentImageIndex} <br /> {imagesUrl[currentImageIndex]}</p>
            <ul className="slider-list" id="slider">
                <li><img src={imagesUrl[currentImageIndex]} alt="Slider component" /></li>
            </ul>
            <button onClick={next}>Suivant</button>
            <button onClick={back}>Précédent</button>
        </div>
    );
}

export default Slider;
