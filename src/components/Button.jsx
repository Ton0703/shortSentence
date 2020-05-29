import React from "react";

function Button({ onClick }) {
  return (
    <div className="button" onClick={onClick}>
      Click Me!
    </div>
  );
}

export default Button;
