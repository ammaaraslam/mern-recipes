import React, { useEffect } from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";
import { getRecipes } from "../actions/recipes";

function Home({ currentId, setCurrentId }) {
  const recipes = useSelector((state) => state.recipes);
  const navigate = useNavigate();
  console.log(recipes);
  const dispatch = useDispatch();

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
            Add A New Recipe
          </Button>
        </div>
        <p className="font-inter text-xl mt-2">
          You currently have {numberOfRecipes} recipes in total.
        </p>
      </div>
      {recipes.length ? (
        <div className="mx-auto py-14 px-7 flex flex-wrap gap-20 items-center justify-center">
          {recipes.map((recipe) => (
            <RecipeCard
              name={recipe.name}
              description={recipe.description}
              id={recipe._id}
              setCurrentId={setCurrentId}
            />
          ))}
        </div>
      ) : (
        <div className="mx-auto py-14 px-7 flex flex-wrap gap-20 items-center justify-center">
          <CgSpinner className="animate-spin" size={40} />
        </div>
      )}
    </main>
  );
}

export default Home;
