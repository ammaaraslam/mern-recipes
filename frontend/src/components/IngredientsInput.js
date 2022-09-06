import React from "react";
import { IoCloseSharp } from "react-icons/io5";

function IngredientsInput({ ingredients, setIngredients }) {
  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    e.preventDefault();

    setIngredients([...ingredients, value]);
    e.target.value = "";
  }

  function removeTag(index) {
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
          <button
            className="bg-primary text-mid inline-flex justify-center items-center ml-1 rounded-lg cursor-pointer p-1"
            onClick={() => removeTag(index)}
          >
            <IoCloseSharp />
          </button>
        </div>
      ))}
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
