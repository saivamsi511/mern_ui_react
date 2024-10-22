import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { head2, image, audioc, svgIcon } from "./const";
import { Navigation } from "./Navigation";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Posts from "./posts";
import { NotFound } from "./NotFound";
import { Home } from "./Home";
// import { Proctected } from "./Proctedted";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
      <Route path ='/home' element={<Home/>}></Route>
      <Route path ='/posts' element={<Posts/>}></Route>
      <Route path ='*' element={<NotFound />}></Route>
      </Routes>

    </Router>
  );
}

export default App;
