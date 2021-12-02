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
                height: '6px',
                width: '100%',
                backgroundColor: '#ccc'
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
                backgroundColor: 'transparent',
                borderRadius: '1000px'
                }}
            />
            )}
        />
    );
}

export default InputRange;