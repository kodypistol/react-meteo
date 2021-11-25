import React, { useState } from "react";


const CTARemindingButton = () => {
  const [isreminded, setRemind] = useState(true);

  return(
    <button onClick={() => setRemind(!isreminded)}>

    <div className="reminding-button">
      <span>{isreminded ? "Me prévenir" : "Check"}</span>
    </div>

    </button>
  );
}

export default CTARemindingButton;
