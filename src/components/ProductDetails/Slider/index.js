import React from 'react';
import "./style.css";

import Image from "components/Image";

function Slider (props) {
    const imagesUrl = [
        "https://picsum.photos/300/300",
        "https://picsum.photos/500/300",
        "https://picsum.photos/800/300"
    ];
    
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    function next() {
        console.log("next image");
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
            <ul className="image-list">
                {imagesUrl.map((image, index) => (
                    <li key={index}>
                        <Image src={image} alt="Slider component" className={index === currentImageIndex ? "active" : "unactive"} />
                    </li>
                ))}
            </ul>
            
            <div className="actions">
                <button onClick={next}>Suivant</button>
                <button onClick={back}>Précédent</button>
            </div>

        </div>
    );
}

export default Slider;
