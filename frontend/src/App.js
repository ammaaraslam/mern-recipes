import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
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
