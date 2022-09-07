// This is a separate component used by the RecipeCard component that contains buttons for editing and deleting a post.

import React, { useState, useEffect, useRef } from "react";
import { BsTrashFill, BsPencilSquare, BsThreeDots } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteRecipe } from "../actions/recipes";

function CardActionMenu({ id, setCurrentId }) {
  const [openMenu, setOpenMenu] = useState(false);

  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to perform if user clicks on the edit button.
  const handleEdit = async (e) => {
    setCurrentId(id);
    navigate("/edit");
  };

  // Function to perform if user clicks on the delete button.
  const handleDelete = async (e) => {
    // Getting confirmation from user through an alert.
    const userConfirm = window.confirm(
      "Are you sure you want to delete the recipe?"
    );
    // Perform the deletion if user confirms.
    if (userConfirm) {
      dispatch(deleteRecipe(id));
      window.location.reload();
    }
  };

  // Detect Outside Click. This checks for any outside click from the CardActionMenu component and closes it if it is.
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if ([openMenu] && ref.current && !ref.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [openMenu]);

  return (
    <div className="relative">
      {/* This is the button that controlls the toggling of the menu. This button is rendered irregardless of the state varibale or useEffect hook. */}
      <button
        onClick={() => setOpenMenu(true)}
        className="rounded-full hover:bg-light hover:text-primary p-1 transition-all duration-150"
      >
        <BsThreeDots size={25} />
      </button>

      {/* Open the menu only if the "openMenu" state variable is set to true. */}
      {openMenu && (
        <div
          ref={ref}
          className="grid bg-light border-2 rounded-xl font-inter font-semibold absolute right-0 text-sm text-dark"
        >
          <button
            onClick={handleEdit}
            className="pr-[4.4rem] pl-2 py-2 text-left rounded-t-lg hover:bg-mid border-b-2 transition-all duration-200 inline-flex justify-center items-center"
          >
            <BsPencilSquare className="mr-2" />
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="pr-14 pl-2 py-2 text-left rounded-b-lg hover:bg-red transition-all duration-200 inline-flex justify-center items-center"
          >
            <BsTrashFill className="mr-2" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default CardActionMenu;
