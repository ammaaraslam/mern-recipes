import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import CardActionMenu from "./CardActionMenu";

function RecipeCard({ name, description, id, setCurrentId }) {
  return (
    <div className="relative w-64 h-64 border-2 rounded-2xl p-3 bg-gray-100 hover:bg-gray-200 hover:scale-105 transition-all duration-150">
      <div className="flex justify-end">
        <CardActionMenu id={id} setCurrentId={setCurrentId} />
      </div>
      <Link
        to="/"
        className="font-semibold text-2xl underline decoration-orange-500 hover:underline-offset-1 text-black hover:text-orange-500 transition-all duration-150"
      >
        {name}
      </Link>
      <p className="text-lg line-clamp-4 mt-1 italic leading-5">
        {description}
      </p>
      <Link
        className="absolute inline-flex items-center justify-center font-semibold right-4 bottom-3 text-base text-gray-600 hover:text-black"
        to="/"
      >
        View Recipe
        <BsArrowRightShort className="my-auto" size={25} />
      </Link>
    </div>
  );
}

export default RecipeCard;
