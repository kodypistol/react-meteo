import React, { useState, useContext } from "react";
import styles from "./styles.module.css";
import { AppContext } from "../AppContext/AppContext.js";

const CTALikeButton = ({id}) => {
  const {productsIdLiked, setProductsIdLiked } = useContext(AppContext);
  const [animation, startAnimation] = useState(false);

  const isliked = productsIdLiked.includes(id);
  let pos = productsIdLiked.indexOf(id);

  const likeAProduct = () => {

    startAnimation(true)

    if (isliked) {

      console.log("1ère condition");
      console.log("Avant splice : ", productsIdLiked);
      productsIdLiked.splice(pos, 1);
      console.log("Après splice : ", productsIdLiked);

    } else if (!isliked){
      console.log("2eme condition");
      console.log("Avant setProduct : ", productsIdLiked);
      setProductsIdLiked([...productsIdLiked, id]);
      console.log("Après setProduct : ", productsIdLiked);

    }

    //Si produit dans tableau, je supprime
    // genre mettre filter et si l'id est différent de l'id que je cherche alors renvoie tout le tableau sans l'id
    //  productsIdLiked.splice(pos, 1);

    // setLiked(state => ({ ...state, productId: index, liked: !isliked }));
    // setLiked(!isliked)
    setTimeout(() => {
      startAnimation(false)
    }, 500)

}
  return(
    <button id={styles.like} className={animation && styles.animation} onClick={() => likeAProduct()}>

      <img src={!isliked ? "/assets/svg/heart-outline-black.svg" : "/assets/svg/heart-all-red.svg"} alt="Like Button"></img>

    </button>
  );
}


export default CTALikeButton;
