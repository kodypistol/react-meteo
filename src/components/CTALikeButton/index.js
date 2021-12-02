import React, { useState, useContext } from "react";
import styles from "./styles.module.css";
import { AppContext } from "../AppContext/AppContext.js";

const CTALikeButton = ({id}) => {
  const {productsIdLiked, setProductsIdLiked } = useContext(AppContext);
  const [animation, startAnimation] = useState(false);


  const isliked = productsIdLiked.includes(id);


  const likeAProduct = () => {

    let pos = productsIdLiked.indexOf(id);
    startAnimation(true)
    setProductsIdLiked([...productsIdLiked, id]); 

    if (isliked) {
      productsIdLiked.splice(pos, 1);
      console.log(productsIdLiked);

    } else {

      console.log(productsIdLiked);
    }

    //Si produit dans tableau, je supprime

    // setLiked(state => ({ ...state, productId: index, liked: !isliked }));
    // setLiked(!isliked)

    setTimeout(() => {
      startAnimation(false)
    }, 500)
}
  return(
    <button id={styles.like} className={animation && styles.animation} onClick={() => likeAProduct()}>

    <div>
      <span><img src={!isliked ? "/assets/svg/heart-outline-black.svg" : "/assets/svg/heart-all-red.svg"} alt="Like Button"></img></span>
    </div>

    </button>
  );
}


export default CTALikeButton;
