import React from "react";
import { Link } from 'react-router-dom';

import "./style.css"

const RemindMeButton = (props) => {


    return (
        <Link to="/" className="active remind-btn">{props.text ? props.text : "Me prévenir"}</Link>
    );

}
export default RemindMeButton;
