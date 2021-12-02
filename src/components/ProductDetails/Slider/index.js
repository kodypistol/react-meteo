import React from 'react';
import "./style.css";
import Image from "components/Image";
import InputRange from "./InputRange";

function Slider (props) {   
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const next = () => {
        if(currentImageIndex === props.images.length - 1) {
            setCurrentImageIndex(0);
        }
        else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }

    const back = () => {
        if(currentImageIndex === 0) {
            setCurrentImageIndex(props.images.length - 1);
        }
        else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    }

    let lastValue = 0;


    const onSliderChange = (value) => {
        console.log("onSliderChange : ", value);

        if(value > lastValue) {
            // next();
        }
        else if (value < lastValue) {
            // back();
        }

        lastValue = value;
    }

    return (
        <div className="slider">
            <ul className="image-list">
                {props.images.map((image, index) => (
                    <li key={index}>
                        <Image src={image} alt="Slider component" className={index === currentImageIndex ? "active" : "unactive"} />
                    </li>
                ))}
            </ul>

            <InputRange onChange={onSliderChange} />
        </div>
    );
}

export default Slider;
