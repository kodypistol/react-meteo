import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';
import Image from 'components/Image';
// import heart from './public/assets/svg/heart-outline-black';


const StylingComponents = () => {

  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  }

  const visibleText = visible ? 'C\'est visible' : 'Ça n\'est pas visible'

  return (
    <div>

      <button onClick={toggleVisible}>
        Changer
      </button>

      <Image src={"./public/assets/svg/heart-all-red"} alt="Coeur"/>

      <p className={
        clsx(
          styles.description,
          {[styles.descriptionHidden]: !visible}
        )
      }>
        {visibleText}
      </p>
    </div>
  );
}

export default StylingComponents;
