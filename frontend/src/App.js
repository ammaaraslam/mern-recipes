import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React, { useState } from "react";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Recipe from "./pages/Recipe";
function App() {
  const [currentId, setCurrentId] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home currentId={currentId} setCurrentId={setCurrentId} />}
        />
        <Route exact path="/:id" element={<Recipe />} />

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
