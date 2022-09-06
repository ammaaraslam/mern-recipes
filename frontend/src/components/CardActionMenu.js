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

  const handleEdit = async (e) => {
    navigate("/edit");
    setCurrentId(id);
  };

  const handleDelete = async (e) => {
    const userConfirm = window.confirm(
      "Are you sure you want to delete the recipe?"
    );
    if (userConfirm) {
      dispatch(deleteRecipe(id));
      window.location.reload();
    }
  };
  // Detect Outside Click
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
      <button
        onClick={() => setOpenMenu(true)}
        className="rounded-full hover:bg-light hover:text-primary p-1 transition-all duration-150"
      >
        <BsThreeDots size={25} />
      </button>
      {openMenu && (
        <div
          ref={ref}
          className="grid bg-light border-2 rounded-xl font-inter font-semibold absolute right-0 text-sm text-dark"
        >
          <button
            onClick={() => {
              setCurrentId(id);
              navigate("/edit");
            }}
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
