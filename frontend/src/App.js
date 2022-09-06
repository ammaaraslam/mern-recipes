import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { getRecipes } from "./actions/recipes";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home currentId={currentId} setCurrentId={setCurrentId} />}
        >
          <Route exact path=":id" element={<Home />} />
        </Route>
        <Route path="/add" element={<Add />} />
        <Route
          path="/edit"
          element={<Edit currentId={currentId} setCurrentId={setCurrentId} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
