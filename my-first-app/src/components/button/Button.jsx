import React from "react";
import "./Button.css";

//component must start with capital
function Button() {
  return (
    <div>
      <button className="button"> Click</button>
    </div>
  );
}

export default Button;

function Button1() {
  return (
    <div>
      <button className="button1">Click2 </button>
    </div>
  );
}
export { Button1 };
