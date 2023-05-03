import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = ({ setUserName }) => {
  const signOut = () => {
    window.localStorage.removeItem("isLoggedIn");
    setUserName({});
  };

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          gap: { sm: "123px", xs: "40px" },
          mt: { sm: "32", xs: "20px" },
          justifyContent: "none",
        }}
        px="20px"
      >
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "48px", height: "48px", margin: "0px 20px" }}
          />
        </Link>
        <Stack
          direction="row"
          gap="40px"
          fontFamily="Alegreya"
          fontSize="24px"
          alignItems="flex-end"
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Exercises
          </a>
        </Stack>
      </Stack>
      <Stack
        direction="column"
        gap="200px"
        fontFamily="Alegreya"
        fontSize="24px"
        marginLeft="33px"
        marginTop="10px"
        alignItems="flex-start"
      >
        {window.localStorage.getItem("isLoggedIn") === null ? (
          <h4
            style={{
              textDecoration: "none",
              color: "#FF2625",
              borderBottom: "3px solid #3A1212",
              cursor: "pointer",
              display: "none",
            }}
          >
            Logout
          </h4>
        ) : (
          <h4
            style={{
              textDecoration: "none",
              color: "#FF2625",
              cursor: "pointer",
            }}
            onClick={() => signOut()}
          >
            Logout
          </h4>
        )}
      </Stack>
    </div>
  );
};

export default Navbar;
