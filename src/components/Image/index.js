import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

const Image = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(props.src) {
      let image = new window.Image();
      image.src = props.src;
      image.onload = () => {
        setIsLoading(false);
      };
    }
  }, [props.src]);

  if(isLoading) {
    return (
      <div className={props.className} style={{ backgroundColor: 'grey', paddingBottom: '100%' }}></div>
    );
  }

  return (
    <img className={props.className} src={props.src} alt={props.alt} />
  );
};

Image.propTypes = {
  className: PropTypes.string,
}

export default Image;
