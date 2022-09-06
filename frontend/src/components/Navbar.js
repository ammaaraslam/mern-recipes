import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <header className="fixed z-50 w-full px-6 py-4 bg-dark text-primary flex items-center justify-between">
      <Link
        className="font-lato font-semibold text-2xl uppercase tracking-wider"
        to="/"
      >
        <span className="text-light">M</span>ern{" "}
        <span className="text-light">R</span>ecipes
      </Link>
      <div>
        <Button handleOnClick={refreshPage}>Refresh Page</Button>
      </div>
    </header>
  );
}

export default Navbar;
