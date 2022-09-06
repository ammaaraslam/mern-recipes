import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../actions/recipes";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import IngredientsInput from "../components/IngredientsInput";

function Add() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [recipeName, setRecipeName] = useState("");
  const [recipeDesciption, setRecipeDesciption] = useState("Article");
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [addingRcipe, setAddingRcipe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.key === "Enter") e.preventDefault();
    try {
      setAddingRcipe(true);
      const body = {
        name: recipeName,
        description: recipeDesciption,
        ingredients: recipeIngredients,
      };
      dispatch(addRecipe(body));
      navigate("/");
      setAddingRcipe(false);
    } catch (error) {
      setAddingRcipe(false);
      console.log(error.message);
    }
  };
  return (
    <main className="w-full md:h-screen h-fit bg-white">
      <div className="pt-28 md:px-16 md:pb-0 pb-4 px-8 text-center">
        <h1 className="font-montserrat md:text-6xl text-4xl font-extrabold capitalize md:max-w-4xl ml-auto mr-auto leading-none tracking-wider">
          Add a new recipe
        </h1>
        <div>
          <div className="font-montserrat mt-5">
            <form className="md:space-y-4 md:py-8 md:px-12 py-4 px-6 md:w-4/6 w-11/12 ml-auto mr-auto text-left rounded-3xl bg-gray-400">
              <div className="w-full px-2 py-3 text-lg">
                <label className="block mb-1" htmlFor="formGridCode_name">
                  Give your recipe a name *
                </label>
                <input
                  onChange={(e) => setRecipeName(e.target.value)}
                  className="w-full h-10 px-3 text-lg border-2 border-gray-400 rounded-lg "
                  type="text"
                  required
                />
              </div>
              <div className="w-full  px-2 py-2 text-lg">
                <label className="block mb-1" htmlFor="formGridCode_last">
                  Describe your recipe *
                </label>
                <textarea
                  className="w-full h-10 px-3 text-lg border-2 border-gray-400 rounded-lg "
                  onChange={(e) => setRecipeDesciption(e.target.value)}
                  required
                  name="descripotion"
                  rows="4"
                  cols="50"
                />
              </div>
              <div className="w-full px-2 py-3 text-lg">
                {/* <label className="block mb-1" htmlFor="formGridCode_name">
                  Add the ingredients used in your recipe *
                </label>
                <input
                  onChange={(e) => setRecipeIngredients(e.target.value)}
                  className="w-full h-10 px-3 text-lg border-2 border-gray-400 rounded-lg "
                  type="text"
                  required
                /> */}
                <IngredientsInput
                  ingredients={recipeIngredients}
                  setIngredients={setRecipeIngredients}
                />
              </div>

              <Button type="submit" handleOnClick={handleSubmit}>
                Add Recipe{" "}
              </Button>
              {/* <div className="text-center">
                {addingResource && (
                  <OutlinedButton type="submit">
                    Adding Resource{" "}
                    <CgSpinner className="ml-2 mt-auto mb-auto animate-spin" />
                  </OutlinedButton>
                )}
                {!addingResource && (
                  <OutlinedButton type="submit">Add Resource</OutlinedButton>
                )}
              </div> */}
            </form>
          </div>
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

export default Add;
