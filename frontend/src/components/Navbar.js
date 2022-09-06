import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <header className="fixed z-50 w-full px-6 py-4 bg-orange-400 flex items-center justify-between">
      <Link className="font-lato font-extrabold text-2xl uppercase" to="/">
        Mern Recipes
      </Link>
      <div>
        <Button handleOnClick={refreshPage}>Refresh Page</Button>
      </div>
    </header>
  );
}

export default Navbar;
