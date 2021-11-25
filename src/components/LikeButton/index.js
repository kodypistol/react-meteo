import React, { useState } from "react";


const LikeButton = () => {
  const [isliked, setLiked] = useState(false);

  return(
    <button onClick={() => setLiked(!isliked)}>

    <div className="like-button">
      <span>{isliked ? "You Liked" : "Like"}</span>
    </div>

    </button>
  );
}

export default LikeButton;
