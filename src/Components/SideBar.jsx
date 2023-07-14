import React from "react";
import { categories } from "../utils/constants";
import { Stack } from "@mui/material";
import "./SideBar.css";
// const selectedCategory = "New";
const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        // overflowX: "auto",
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#FC1530",
            display: "flex",
            justifyContent: "flex-start",
          }}
          key={category.name}
          onClick={() => {
            setSelectedCategory(category.name);
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "10px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: selectedCategory === category.name ? "1" : ".8",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
