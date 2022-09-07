// This is a separate component used by the Recipe page to display the list of ingredients as a checklist.

import React, { useState } from "react";

function IngredientsList({ ingredientsList }) {
  const [checked, setChecked] = useState([]);

  // Funciton that checks if an item(ingredient) is checked or not.
  const handleCheck = (e) => {
    var updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "ml-2 line-through" : "ml-2";

  return (
    <div className="flex ml-10 items-center font-inter text-lg">
      <div>
        <div className="flex flex-col gap-2">
          {ingredientsList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IngredientsList;
