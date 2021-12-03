import React from 'react';
import styles from './styles.module.css'

const CTAShareButton = () => {

  const sharePage = () => {
    if (navigator.share) {
      navigator.share({
          text: 'Via Nike SNKRS:',
          url: window.location.href
        }).then(() => {
          console.log('Shared!');
        })
        .catch(err => {
          console.log(`Couldn't share because of`, err.message);
        });
    } else {
      console.log('web share not supported');
    }

  }


  return (
    <div>
      <button className={styles.shareBtn} onClick = {sharePage}>
      <img src="/assets/svg/share-button.svg" alt="Share Button"></img>
      </button>
    </div>
  );

}

export default CTAShareButton;
