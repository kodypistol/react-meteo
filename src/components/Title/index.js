//jshint esversion:6

import React from 'react';


const Title = (props) => {

  return (

    <div>
      <h3>{props.subtitle}</h3>
      <h2>{props.title}</h2>
      <p>{props.price}</p>
    </div>
  );
};

export default Title;
