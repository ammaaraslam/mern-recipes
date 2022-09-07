// This is the Add page that contains the Form component for adding a new recipe. The path of this page is "/add".

import React from "react";
import Form from "../components/Form";

function Add({ currentId, setCurrentId }) {
  const props = {
    currentId,
    setCurrentId,
  };

  return (
    <main className="w-full h-fit bg-mid">
      <div className="pt-28 px-16 pb-8 text-center">
        <h1 className="font-lato text-6xl font-extrabold capitalize ml-auto mr-auto leading-none tracking-wider">
          Add a new recipe
        </h1>
        <p className="mt-3 mx-auto font-inter text-3xl max-w-2xl">
          What are you waiting for? Go ahead and add a new delicous recipe to
          your collection.
        </p>
        <div>
          <Form props={props} />
        </div>
      </div>
    </main>
  );
}

export default Add;
