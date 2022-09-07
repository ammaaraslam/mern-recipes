// This is the Home page of the application, contains the list of all the recipes displayed as a grid through the RecipeCard Component. The path of this page is "/"

import React, { useEffect } from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { getRecipes } from "../actions/recipes";

function Home({ setCurrentId }) {
  // Getting all the recipes from the backend(database).
  const recipes = useSelector((state) => state.recipes.reverse());
  const navigate = useNavigate();
  console.log(recipes);
  const dispatch = useDispatch();
  // This holds the reversed array of the recipes array to display the recently added recipe first.
  const reversedRecipes = recipes.reverse();
  const numberOfRecipes = recipes.length;

  // Logic that gets all the necessary data on every page load.
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <main className="w-full h-full py-16 bg-light">
      <div className="w-full py-24 px-12 bg-mid">
        <div className="w-full inline-flex justify-between items-center">
          <h1 className="font-lato font-bold text-4xl max-w-xl">
            Have fun creating and enjoying your yummy recipes!
          </h1>
          <Button handleOnClick={() => navigate("/add")}>
            Add A New Recipe +
          </Button>
        </div>
        <p className="font-inter text-xl mt-2">
          You currently have {numberOfRecipes} recipe(s) in total.
        </p>
      </div>
      {reversedRecipes.length ? (
        <div className="mx-auto py-14 px-7 flex flex-wrap gap-20 items-center justify-center">
          {/* Using the .map() function to display all the recipes in the list as cards. This also contains a loading annimation that is displayed until the recipes data is fetched and made available. */}
          {reversedRecipes.map((recipe) => (
            <RecipeCard
              name={recipe.name}
              description={recipe.description}
              ingredients={recipe.ingredients}
              id={recipe._id}
              setCurrentId={setCurrentId}
            />
          ))}
        </div>
      ) : (
        <div className="mx-auto py-14 px-7 flex flex-wrap gap-20 items-center justify-center">
          <IoFastFoodOutline className="animate-pulse" size={60} />
        </div>
      )}
    </main>
  );
}

export default Home;
