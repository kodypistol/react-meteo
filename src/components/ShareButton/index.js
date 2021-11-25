import React from 'react';

const ShareButton = () => {

  const sharePage = () => {
    if (navigator.share) {
      navigator.share({
          title: 'Chaussure!',
          text: 'Chauchaussure',
          url: window.location.href
        }).then(() => {
          console.log('Thanks for sharing!');
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
      Clique moi
      </button>
    </div>
  );

}

export default ShareButton;
