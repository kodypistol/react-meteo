import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(null);

  return(
    <button onClick={() => setLiked(!liked)}
    className={"like-button-wrapper", {liked}}>

    <div className="like-button">
      <span>Like</span>
    </div>

    </button>
  );
}

export default LikeButton;
