import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full px-6 py-2 bg-orange-400">
      <Link to="/">Mern Recipes</Link>
      <div></div>
    </header>
  );
}

export default Navbar;
