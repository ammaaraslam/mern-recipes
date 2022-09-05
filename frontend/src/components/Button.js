import React from "react";

function Button({ children, handleOnClick }) {
  return (
    <button
      onClick={handleOnClick}
      className="py-2 px-4 font-semibold bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all duration-200 ease-in-out"
    >
      {children}
    </button>
  );
}

export default Button;
