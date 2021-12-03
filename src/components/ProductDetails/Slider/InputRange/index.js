import React from "react";

import { Range } from "react-range";

function InputRange (props) {

    return (
        <Range
            step={1}
            min={1}
            max={36}
            values={props.values}
            onChange={(values) => { props.onChange(values) }}
            renderTrack={({ props, children }) => (
            <div
                {...props}
                style={{
                ...props.style,
                height: '4px',
                width: '80%',
                margin: '0 auto',
                backgroundColor: '#e5e5e5',
                borderRadius: '1000px'
                }}
            >
                {children}
            </div>
            )}
            renderThumb={({ props }) => (
            <div
                {...props}
                style={{
                ...props.style,
                height: '12px',
                width: '12px',
                backgroundColor: '#d3d3d3',
                borderRadius: '1000px'
                }}
            />
            )}
        />
    );
}

export default InputRange;