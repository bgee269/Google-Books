import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn btn-outline-secondary", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}

export default Button;
