import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate("");
  const handelSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <Paper
      onSubmit={handelSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solod #e3e3e3",
        pl: 2,
        boxShadow: "none",
        marginRight: { sm: 5 },
      }}
      component="form"
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ border: "0px", outline: "none" }}
      />
      <IconButton type="submit" sx={{ color: "red", p: "10px" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
