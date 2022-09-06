import React from "react";
import { useState } from "react";
import Form from "../components/Form";

function Add({ currentId, setCurrentId }) {
  const props = {
    currentId,
    setCurrentId,
  };

  return (
    <main className="w-full md:h-screen h-fit bg-mid">
      <div className="pt-32 px-16 pb-8 text-center">
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
