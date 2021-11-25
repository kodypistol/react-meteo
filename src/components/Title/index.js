//jshint esversion:6

import React from 'react';

import "./style.css";

const Title = (props) => {

  return (

    <div className="title">
      <h3>{props.subtitle}</h3>
      <h2>{props.title}</h2>
      <p>{props.price}</p>
    </div>
  );
};

export default Title;
