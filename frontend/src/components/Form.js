import React, { useEffect, useState } from "react";
import IngredientsInput from "../components/IngredientsInput";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe, updateRecipe } from "../actions/recipes";
import { useNavigate } from "react-router-dom";

function Form({ props }) {
  const [recipeName, setRecipeName] = useState("");
  const [recipeDesciption, setRecipeDesciption] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipe = useSelector((state) =>
    props.currentId
      ? state.recipes.find((r) => r._id === props.currentId)
      : null
  );

  useEffect(() => {
    if (recipe) {
      setRecipeName(recipe.name);
      setRecipeDesciption(recipe.description);
      setRecipeIngredients(recipe.ingredients);
    }
  }, [props, recipe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name: recipeName,
      description: recipeDesciption,
      ingredients: recipeIngredients,
    };

    if (props.currentId) {
      dispatch(updateRecipe(props.currentId, body));
      navigate("/");
      props.setCurrentId(null);
    } else {
      dispatch(addRecipe(body));
      navigate("/");
    }
  };

  return (
    <div className="font-montserrat mt-5">
      <form className="md:space-y-4 md:py-8 md:px-12 py-4 px-6 md:w-4/6 w-11/12 ml-auto mr-auto text-left rounded-3xl bg-gray-400">
        <div className="w-full px-2 py-3 text-lg">
          <label className="block mb-1" htmlFor="formGridCode_name">
            Give your recipe a name *
          </label>
          <input
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            className="w-full h-10 px-3 text-lg border-2 border-gray-400 rounded-lg "
            type="text"
          />
        </div>
        <div className="w-full  px-2 py-2 text-lg">
          <label className="block mb-1" htmlFor="formGridCode_last">
            Describe your recipe *
          </label>
          <textarea
            value={recipeDesciption}
            className="w-full h-10 px-3 text-lg border-2 border-gray-400 rounded-lg "
            onChange={(e) => setRecipeDesciption(e.target.value)}
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
          {props.currentId ? "Edit Recipe" : "Add Recipe"}
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
  );
}

export default Form;