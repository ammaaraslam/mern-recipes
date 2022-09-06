import React from "react";

function Button({ children, handleOnClick }) {
  return (
    <button
      onClick={handleOnClick}
      className="py-2 px-3 font-inter font-semibold tracking-wider border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-light transition-all duration-150 ease-in-out"
    >
      {children}
    </button>
  );
}

export default Button;
