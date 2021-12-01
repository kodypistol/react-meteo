import React, { useState } from "react";
import styles from "./styles.module.css";


const CTALikeButton = () => {
  const [isliked, setLiked] = useState(false);

  const toggleAnimation = (isliked) => {

    setLiked(!isliked)
    const activedItem = window.event.target;

    if (isliked === true){
    activedItem.classList.remove(styles.animationOff);
    activedItem.classList.add(styles.animationOn);

  } else {
    activedItem.classList.remove(styles.animationOn);
    activedItem.classList.add(styles.animationOff);

  }
}
  return(
    <button id={styles.like} onClick={() => toggleAnimation(isliked)}>

    <div>
      <span><img src={!isliked ? "/assets/svg/heart-outline-black.svg" : "/assets/svg/heart-all-red.svg"} alt="Like Button"></img></span>
    </div>

    </button>
  );
}


export default CTALikeButton;
