import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ExerciseDetail from "../pages/ExerciseDetail";
import NotFound from "../pages/NotFound";
import { Box } from "@mui/material";

const AllRoutes = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      {/* <h1>Hello World!</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises/:id" element={<ExerciseDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default AllRoutes;
