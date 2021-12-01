import React, { useState } from "react";
import styles from "./styles.module.css";


const CTALikeButton = () => {
  const [isliked, setLiked] = useState(false);
  const [animation, startAnimation] = useState(false);

  const toggleAnimation = (isliked) => {
    startAnimation(true)
    setLiked(!isliked)

    setTimeout(() => {
      startAnimation(false)
    }, 500)
}
  return(
    <button id={styles.like} className={animation && styles.animation} onClick={() => toggleAnimation(isliked)}>

    <div>
      <span><img src={!isliked ? "/assets/svg/heart-outline-black.svg" : "/assets/svg/heart-all-red.svg"} alt="Like Button"></img></span>
    </div>

    </button>
  );
}


export default CTALikeButton;
