import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const response = await fetchData(
        // `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,
        `/exercises`
        // exerciseOptions
      );
      // const response = await bodyPartsData.json();
      
      // const res = await bodyPartsData.json();
      console.log(response[0].bodyPart);
      // const res = bodyPartsData.map((e) => e.bodyPart);
      const res = response.map((e) => e.bodyPart);
      // console.log(res);
      const unique = res.filter((item, i, ar) => ar.indexOf(item) === i);
      console.log(unique);
      setBodyParts(["all", ...unique]);
      // setBodyParts(["all", ...bodyPartsData[0].bodyPart]);
    };
    fetchExercisesData();
    // console.log(fetchExercisesData());
  }, []);

  const handleSearch = async () => {
    if (search) {
      const response = await fetchData(
        // `https://exercisedb.p.rapidapi.com/exercises`,
        `/exercises`,
        exerciseOptions
      );
      // const response = await exercisesData.json();
      // console.log(response);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      const searchedExercises = response.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76x"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0px",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
