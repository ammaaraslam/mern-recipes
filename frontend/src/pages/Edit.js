import React from "react";
import { useState } from "react";
import Form from "../components/Form";

function Edit({ currentId, setCurrentId }) {
  const [recipeName, setRecipeName] = useState("");
  const [recipeDesciption, setRecipeDesciption] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  const props = {
    recipeName,
    setRecipeName,
    recipeDesciption,
    setRecipeDesciption,
    recipeIngredients,
    setRecipeIngredients,
    currentId,
    setCurrentId,
  };
  return (
    <main className="w-full md:h-screen h-fit bg-white">
      <div className="pt-28 md:px-16 md:pb-0 pb-4 px-8 text-center">
        <h1 className="font-montserrat md:text-6xl text-4xl font-extrabold capitalize md:max-w-4xl ml-auto mr-auto leading-none tracking-wider">
          Add a new recipe
        </h1>
        <div>
          <Form props={props} />
        </div>
      </div>
      {/* <div className="md:absolute md:bottom-3 md:left-5 block mt-2 md:p-0 p-4">
        <Link href="/explore">
          <span className="cursor-pointer py-1 px-2 text-black dark:text-white font-medium text-center transition-all ease-in-out duration-150 rounded-lg inline-flex items-center justify-start hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 text-lg">
            <MdOutlineKeyboardBackspace className="mr-1" size={27} />
            Go Back
          </span>
        </Link>
      </div> */}
    </main>
  );
}

export default Edit;
