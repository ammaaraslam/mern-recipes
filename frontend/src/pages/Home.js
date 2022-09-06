import React from "react";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";

function Home() {
  const recipes = useSelector((state) => state.recipes);
  const navigate = useNavigate();
  console.log(recipes);

  return (
    <main className="w-full h-full px-16 py-20">
      <div className="w-full inline-flex justify-between">
        <h1 className="font-bold text-3xl">Here are your yummy recipes!</h1>
        <Button handleOnClick={() => navigate("/add")}>Add Recipe</Button>
      </div>
      {recipes.length ? (
        <div className="mx-auto py-14 px-7 flex flex-wrap gap-20 items-center justify-center">
          {recipes.map((recipe) => (
            <RecipeCard
              name={recipe.name}
              description={recipe.description}
              id={recipe._id}
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
