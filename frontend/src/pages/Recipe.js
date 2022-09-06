import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniqueRecipe } from "../actions/recipes";
import { useParams } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";

function Recipe() {
  const id = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipes);
  console.log(recipe);

  useEffect(() => {
    dispatch(getUniqueRecipe(id.id));
  }, [dispatch, id]);

  return (
    <main className="w-full h-full px-16 py-20">
      {recipe._id ? (
        <>
          <h1>{recipe.name}</h1>
          <p>{recipe.description}</p>
          {recipe.ingredients.map((i) => (
            <li>{i}</li>
          ))}
        </>
      ) : (
        <div className="flex mt-36 justify-center items-center">
          <IoFastFoodOutline className="animate-pulse" size={60} />
        </div>
      )}
    </main>
  );
}

export default Recipe;
