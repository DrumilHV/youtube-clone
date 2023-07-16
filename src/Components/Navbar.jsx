import React, { useState } from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { Avatar } from "@mui/material";
import SearchBar from "./SearchBar";
const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const checkAndSend = () => {
    if (isLogin) {
      setIsLogin(isLogin);
      return <Avatar>D</Avatar>;
    } else {
      return (
        <Link to="/login">
          <Avatar style={{ fontSize: "10px" }}>Login</Avatar>
        </Link>
      );
    }
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        justifyContent: "space-between",
        background: "#000",
        top: "0px",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
      {checkAndSend()}
    </Stack>
  );
};

export default Navbar;
