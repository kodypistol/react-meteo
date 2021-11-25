import React from 'react';

const ShareButton = () => {

  if (navigator.share) {
    navigator.share({
      title: 'web.dev',
      text: 'Check out web.dev.',
      url: 'https://web.dev/',
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }

  return(
    <div>
      <button onClick={"navigator.share()"}>
        Clique moi
      </button>

    </div>
  );

}

export default ShareButton;
