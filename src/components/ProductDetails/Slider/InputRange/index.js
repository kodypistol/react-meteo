import React from "react";

import ReactSlider from 'react-slider';
import styled from 'styled-components';

function InputRange (props) {

    const StyledSlider = styled(ReactSlider)`
        width: 100%;
        height: 25px;
    `;
    
    const StyledThumb = styled.div`
        height: 25px;
        line-height: 25px;
        width: 25px;
        text-align: center;
        background-color: #000;
        color: #fff;
        border-radius: 50%;
        cursor: grab;
    `;
    const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;
    
    const StyledTrack = styled.div`
        top: 0;
        bottom: 0;
        background: ${props => props.index === 1 ? '#ddd' : 'grey'};
        border-radius: 999px;
    `;
    const Track = (props, state) => <StyledTrack {...props} index={state.index} />;


    return (
        <StyledSlider
            defaultValue={0}
            renderTrack={Track}
            renderThumb={Thumb}
            onChange={(value) => props.onChange(value)}
        />
    );
}

export default InputRange;