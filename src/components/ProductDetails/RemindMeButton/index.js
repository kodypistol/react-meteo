import React, { useState } from "react";
import { Link } from 'react-router-dom';

import "./style.css"

const RemindMeButton = (props) => {
  const [buttonClass, setButtonClass] = useState(false)
  const toggleButton = () => {
      setButtonClass(!buttonClass);
  }
    return (
        <button className={buttonClass ? "unactive remind-btn" : "active remind-btn"} onClick={toggleButton}>{
          props.text ? props.text : "Me prévenir"}
          </button>
    );

}
export default RemindMeButton;
