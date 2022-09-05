import React from "react";
import Button from "../components/Button";

function Home() {
  return (
    <main className="w-full h-full px-16 py-20">
      <div className="w-full inline-flex justify-between">
        <h1 className="font-bold text-3xl">Here are your yummy recipes!</h1>
        <Button>Add Recipe</Button>
      </div>
    </main>
  );
}

export default Home;
