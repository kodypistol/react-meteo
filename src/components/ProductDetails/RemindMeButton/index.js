import React from "react";
import { Link } from 'react-router-dom';

import "./style.css"

function RemindMeButton (props) {

    if(props.isActive) {
        return (
            <Link to="/" className="active remind-btn">{props.text ? props.text : "Me prévenir"}</Link>
        );
    }

    return (
        <div to="/" className="remind-btn">{props.text ? props.text : "Me prévenir"}</div>
    );
}

RemindMeButton.defaultProps = {
    isActive: true
};

export default RemindMeButton;