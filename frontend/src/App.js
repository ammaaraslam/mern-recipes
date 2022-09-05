import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { getRecipes } from "./actions/recipes";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route exact path=":id" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
