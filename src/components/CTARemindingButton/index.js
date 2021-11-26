import React, { useState } from "react";

import "./style.css";

const CTARemindingButton = () => {
  const [isreminded, setRemind] = useState(true);

  return(
    <button className="reminding-button" onClick={() => setRemind(!isreminded)}>
      <span>{isreminded ? "Me prévenir" : "Check"}</span>
    </button>
  );
}

export default CTARemindingButton;
