import React from "react";
import Button from "../components/Button";
import { useSelector } from "react-redux";

function Home() {
  const recipes = useSelector((state) => state.recipes);
  console.log(recipes);

  return (
    <main className="w-full h-full px-16 py-20">
      <div className="w-full inline-flex justify-between">
        <h1 className="font-bold text-3xl">Here are your yummy recipes!</h1>
        <Button>Add Recipe</Button>
      </div>
      <div></div>
    </main>
  );
}

export default Home;
