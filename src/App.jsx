import { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Events from "./Events";
import Blogs from "./Blogs";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <Navbar />
        <div>
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="events" element={<Events />}></Route>
            <Route path="blogs" element={<Blogs />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
