// This is a separate component used by the Form component to input ingredients in a user-friendly manner.

import React from "react";
import { IoCloseSharp } from "react-icons/io5";

function IngredientsInput({ ingredients, setIngredients }) {
  // Function that checks if the "Enter" key is pressed to save the input to the list of ingredients.
  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    e.preventDefault();

    setIngredients([...ingredients, value]);
    e.target.value = "";
  }

  // Function that removes an ingredient from the list, based on the index of it in the list.
  function removeIngredient(index) {
    setIngredients(ingredients.filter((el, i) => i !== index));
  }

  console.log(ingredients);

  return (
    <form className="border-2 border-mid p-2 rounded-lg flex items-center flex-wrap gap-2">
      {ingredients.map((tag, index) => (
        <div
          className="bg-mid inline-flex justify-between items-center p-1 rounded-lg text-base"
          key={index}
        >
          <span>{tag}</span>
          {/* Button that removes an ingredient */}
          <button
            className="bg-primary text-mid inline-flex justify-center items-center ml-1 rounded-lg cursor-pointer p-1"
            onClick={() => removeIngredient(index)}
          >
            <IoCloseSharp />
          </button>
        </div>
      ))}
      {/* Input that accepts new ingredients and adds them to the list of the Enter key is pressed, by calling the handleKeyDown function declared above. */}
      <input
        onKeyDown={handleKeyDown}
        type="text"
        className="flex-grow p-1 border-2 border-mid rounded-lg"
        placeholder="Add new ingredient"
      />
    </form>
  );
}

export default IngredientsInput;
