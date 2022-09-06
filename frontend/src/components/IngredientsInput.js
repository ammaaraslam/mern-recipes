import React from "react";

function IngredientsInput({ingredients, setIngredients}) {
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
    <form className="border p-1 rounded-lg flex items-center flex-wrap gap-2">
      {ingredients.map((tag, index) => (
        <div className="bg-gray-300 inline-block p-1" key={index}>
          <span className="text">{tag}</span>
          <span
            className="bg-gray-600 inline-flex justify-center items-center ml-2 cursor-pointer"
            onClick={() => removeTag(index)}
          >
            &times;
          </span>
        </div>
      ))}
      <input
        onKeyDown={handleKeyDown}
        type="text"
        className="flex-grow p-1"
        placeholder="Type somthing"
      />
    </form>
  );
}

export default IngredientsInput;
