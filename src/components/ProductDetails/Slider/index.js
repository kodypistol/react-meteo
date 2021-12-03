import React from 'react';
import { useDrag } from '@use-gesture/react'

import "./style.css";
import Image from "components/Image";
import InputRange from "./InputRange";


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

    // With use-gesture package
    const onDrag = useDrag( ({values: [x, y]}) => {
        let index = (x / window.innerWidth) * 36;
        console.log("Dragging", "with index ", index, " of ", window.innerWidth);

        index = Math.round(index);
        index = Math.min(Math.max(index, 1), 36);
        setCurrentImageIndex([index]);
    })

    return (
        <div className="slider" {...onDrag()}>
            <Image src={GetUrl(currentImageIndex)} alt={"Slider component " + currentImageIndex} />
            <InputRange onChange={setCurrentImageIndex} values={currentImageIndex} />
        </div>
    );
}

export default Slider;
