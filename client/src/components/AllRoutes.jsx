import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ExerciseDetail from "../pages/ExerciseDetail";
import NotFound from "../pages/NotFound";
import { Box, skeletonClasses } from "@mui/material";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { useState } from "react";

const AllRoutes = () => {
  const [user, setUserName] = useState({});
  const isLogged = window.localStorage.getItem("isLoggedIn");
  // const [userName, setUserName] = useState ( () => {
  //   const savedItem = localStorage.getItem("userName");
  //  const parsedItem = JSON.parse(savedItem);
  //  return parsedItem || {};
  //  });
  // // const [userLocal, setUserLocal] = useState({});
  // const localUser = localStorage.setItem("loggedInUser", user);
  // setUserLocal(localUser);
  console.log("User-->", user);
  
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar setUserName={setUserName} />
      {/* <h1>Hello World!</h1> */}
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            user && user._id || isLogged ? (
              <Home setUserName={setUserName} />
            ) : (
              <Login setUserName={setUserName} />
            )
          }
        />
        <Route path="/exercises/:_id" element={<ExerciseDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default AllRoutes;
