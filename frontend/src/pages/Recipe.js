// This is the reusable Recipe page component that is used to display individual recipes. The path of the page is "/:id"

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniqueRecipe } from "../actions/recipes";
import { useParams } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import IngredientsList from "../components/IngredientsList";

function Recipe() {
  // Getting the id parameter from the query.
  const id = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipes);
  console.log(recipe);

  // Logic that gets the recipe by id on every page load.
  useEffect(() => {
    dispatch(getUniqueRecipe(id.id));
  }, [dispatch, id]);

  return (
    <main className="w-full h-full px-16 py-20">
      {/* Displaying the details of the recipe if the recipe is fetched, else displaying a loader similar to the one in the Home page until the recipe is fetched and made available. */}
      {recipe._id ? (
        <div className="w-full h-full py-16">
          <h1 className="font-lato font-bold text-4xl underline">
            {recipe.name}
          </h1>
          <p className="mt-4 font-inter text-xl">{recipe.description}</p>
          <h2 className="my-3 font-inter font-semibold text-2xl underline">
            Ingredients:
          </h2>
          <IngredientsList ingredientsList={recipe.ingredients} />
        </div>
      ) : (
        <div className="flex mt-36 justify-center items-center">
          <IoFastFoodOutline className="animate-pulse" size={60} />
        </div>
      )}
    </main>
  );
}

export default Recipe;
