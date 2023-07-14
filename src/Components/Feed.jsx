import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SideBar, Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVedios] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVedios(data.items)
    );
  }, [selectedCategory]);
  const date = new Date();
  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: "2px" },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          CopyRight @ {date.getFullYear()} YouTube Clone
        </Typography>
      </Box>
      <Box p={2} sx={{ flex: 2, overflowY: "auto", height: "90vh" }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#fff" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
