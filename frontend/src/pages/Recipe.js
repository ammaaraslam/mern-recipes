import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniqueRecipe } from "../actions/recipes";
import { useParams } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import IngredientsList from "../components/IngredientsList";

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
