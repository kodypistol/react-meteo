import React from 'react';

const ShareButton = () => {

  const sharePage = () => {
    if (navigator.share) {
      navigator.share({
          title: 'Chaussure!',
          text: 'Mettre le lien des chaussures',
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

export default ShareButton;
