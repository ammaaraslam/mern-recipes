// This is the Edit page that contains the Form component for editing an existing recipe. The path of this Page is "/edit".

import React from "react";
import Form from "../components/Form";

function Edit({ currentId, setCurrentId }) {
  const props = {
    currentId,
    setCurrentId,
  };
  return (
    <main className="w-full h-fit bg-mid">
      <div className="pt-32 px-16 pb-8 text-center">
        <h1 className="font-lato text-6xl font-extrabold capitalize ml-auto mr-auto leading-none tracking-wider">
          Edit Recipe
        </h1>
        <p className="mt-3 mx-auto font-inter text-2xl max-w-2xl">
          Changed your mind? Edit your recipe details.
        </p>
        <div>
          <Form props={props} />
        </div>
      </div>
    </main>
  );
}

export default Edit;
