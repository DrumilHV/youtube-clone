import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVedios] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVedios(data.items)
    );
  }, [searchTerm]);
  return (
    <>
      <Box p={2} sx={{ flex: 2, overflowY: "auto", height: "90vh" }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#fff" }}>
          {searchTerm} <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </>
  );
};

export default SearchFeed;
