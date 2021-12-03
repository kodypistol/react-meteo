import React, { useState } from 'react';

import styles from "./styles.module.css";

const CTARemindingButton = () => {
  const [isreminded, setRemind] = useState(false);

  const toggleReminder = () => {

    const isNewReminded = !isreminded

    setRemind(isNewReminded);
    console.log('newReminded', isNewReminded)

    const currentTarget = window.event.target;

    if (isNewReminded) {

      console.log('start animation')
      currentTarget.innerHTML = "<img src='/assets/svg/check-white.svg' alt='Check logo'></img>";
      currentTarget.animate([
        // keyframes
        { width: '100px' },
        { width: '40px',
          backgroundColor: '#64BE71'
       }
      ], {
        // timing options
        duration: 200,
      });

      currentTarget.style.backgroundColor = '#64BE71'

    } else if (!isNewReminded) {

      console.log('return animation');

        currentTarget.animate([
          // keyframes
          { width: '40px' },
          { width: '100px',
            backgroundColor: '#111111'
         }
        ], {
          // timing options
          duration: 200,
        });
      //
      setTimeout(() => {
        currentTarget.innerHTML = "Me prévenir";
        currentTarget.style.backgroundColor = '#111111'
      }, 200)

    }


  }

  return(
    <button className={styles.remindingButton} onClick={toggleReminder}>
    Me prévenir
    </button>
  );
}

export default CTARemindingButton;
