import React from 'react';

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
      <button className = "share-btn" onClick = {sharePage}>
      Partager
      </button>
    </div>
  );

}

export default CTAShareButton;
