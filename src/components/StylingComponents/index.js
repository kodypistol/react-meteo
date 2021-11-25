import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css'

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
