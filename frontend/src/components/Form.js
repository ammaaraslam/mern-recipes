// This is a Form component reused by the Add & Edit pages for recieving input from the user.

import React, { useEffect, useState } from "react";
import IngredientsInput from "../components/IngredientsInput";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe, updateRecipe } from "../actions/recipes";
import { useNavigate } from "react-router-dom";

function Form({ props }) {
  // Setting state variables for each entity of a recipe.
  const [recipeName, setRecipeName] = useState("");
  const [recipeDesciption, setRecipeDesciption] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Checking if a "currentId" is passed in to the Form and fetching the recipe that matches that id.
  const recipe = useSelector((state) =>
    props.currentId
      ? state.recipes.find((r) => r._id === props.currentId)
      : null
  );

  // Logic to pre-fill the form if the Form is for editing an existing recipe.
  useEffect(() => {
    // If a currentId is passed to this form, then setting the values of that recipe to the state variables.
    if (recipe) {
      setRecipeName(recipe.name);
      setRecipeDesciption(recipe.description);
      setRecipeIngredients(recipe.ingredients);
    }
  }, [props, recipe]);

  // Function perfomed when the submit button is clicked.
  const handleSubmit = async (e) => {
    // Prevent page from reloading.
    e.preventDefault();

    // Contains all the values set by the user in a format that is accepted by the server.
    const body = {
      name: recipeName,
      description: recipeDesciption,
      ingredients: recipeIngredients,
    };

    // Since the submit button performs two functions, either adding a recipe or editing an exising recipe, the following logic checks if the form is for editing or adding new.

    if (props.currentId) {
      // Task to perform if it is for editing
      dispatch(updateRecipe(props.currentId, body));
      navigate("/");
      props.setCurrentId(null);
    } else {
      // Task to perform if it is for adding new.
      dispatch(addRecipe(body));
      navigate("/");
    }
  };

  return (
    <div className="font-inter mt-5">
      <form className="md:space-y-4 md:py-8 md:px-12 py-4 px-6 md:w-4/6 w-11/12 ml-auto mr-auto text-left rounded-3xl bg-light border-2 border-primary">
        <div className="w-full px-2 py-2 text-lg">
          <label
            className="block mb-1 text-primary font-semibold"
            htmlFor="formGridCode_name"
          >
            Give your recipe a name *
          </label>
          <input
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            className="w-full h-10 px-3 text-lg border-2 border-mid rounded-lg "
            type="text"
          />
        </div>
        <div className="w-full  px-2 py-2 text-lg">
          <label
            className="block mb-1 text-primary font-semibold"
            htmlFor="formGridCode_last"
          >
            Describe your recipe *
          </label>
          <textarea
            value={recipeDesciption}
            className="w-full px-3 text-lg border-2 border-mid rounded-lg"
            onChange={(e) => setRecipeDesciption(e.target.value)}
            name="description"
            rows="3"
            cols="50"
          />
        </div>
        <div className="w-full px-2 py-2 mb-1 text-lg">
          <label
            className="block text-primary font-semibold"
            htmlFor="formGridCode_last"
          >
            Add ingredients used in your recipe *<br></br>
            <span className="text-sm italic">
              (Type an ingredient and press enter to add to the list.)
            </span>
          </label>

          <IngredientsInput
            ingredients={recipeIngredients}
            setIngredients={setRecipeIngredients}
          />
        </div>
        <div className="flex items-center justify-center">
          <Button type="submit" handleOnClick={handleSubmit}>
            {props.currentId ? "Save Recipe" : "Add Recipe"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
