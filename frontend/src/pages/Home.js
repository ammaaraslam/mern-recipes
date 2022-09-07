import React, { useEffect } from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { getRecipes } from "../actions/recipes";

function Home({ currentId, setCurrentId }) {
  const recipes = useSelector((state) => state.recipes.reverse());
  const navigate = useNavigate();
  console.log(recipes);
  const dispatch = useDispatch();
  const reversedRecipes = recipes.reverse();
  const numberOfRecipes = recipes.length;

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
