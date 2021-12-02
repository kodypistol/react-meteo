import React from 'react';
import "./style.css";
import Image from "components/Image";
import InputRange from "./InputRange";

let isHolding = false;

function Slider (props) {   
    const [currentImageIndex, setCurrentImageIndex] = React.useState([1]);

    function GetUrl (currentIndex) {
        // Get base url
        let url = props.baseUrl;

        // Replace index
        let currentIndexStr = currentIndex.toString();
        if(currentIndex <= 9) {
            currentIndexStr = "0" + currentIndexStr;
        }
        url = url.replace(":index:", currentIndexStr);
        return url;
    }

    function onMouseDown (event) {
        console.log("onMouseDown");

        isHolding = true;
        event.preventDefault();
        return false;
    }

    function onMouseUp (event) {
        console.log("onMouseUp");

        isHolding = false;
        event.preventDefault();
        return false;
    }

    function onMouseMove (event) {
        if(isHolding) {
            let index = (event.clientX / window.screenX) * 36;
            index = Math.round(index);
            index = Math.min(Math.max(index, 1), 36);
            setCurrentImageIndex([index]);
        }
    }

    function onTouchMove (event) {
        console.log("onTouchMove");

        let index = (event.targetTouches[0].clientX / window.screenX) * 36;
        index = Math.round(index);
        index = Math.min(Math.max(index, 1), 36);
        setCurrentImageIndex([index]);
    }

    return (
        <div className="slider" onMouseMove={onMouseMove}
                                onMouseDown={onMouseDown}
                                onMouseUp={onMouseUp}
                                onTouchStart={onMouseDown}
                                onTouchEnd={onMouseUp}
                                onTouchMove={onTouchMove}>

            <Image src={GetUrl(currentImageIndex)} alt={"Slider component " + currentImageIndex} />
            <InputRange onChange={setCurrentImageIndex} values={currentImageIndex} />
            <span className="pepe">Par pepe la best</span>
        </div>
    );
}

export default Slider;
