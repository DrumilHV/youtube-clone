import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
const FormLS = ({ heading, link, message }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f2eeee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: { xs: "100vh" },
      }}
    >
      <Box
        component="span"
        sx={{
          p: 2,
          border: "2px solid #FE0000",
          height: { xs: "400px", sm: "600px" },
          width: { xs: "300px", sm: "500px" },
          backgroundColor: "#fff",
          borderRadius: { xs: "20px", sm: "40px" },
        }}
      >
        <Stack direction="column" sx={{ width: "100%", height: "100%" }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="grey"
            align="center"
            sx={{
              textDecoration: "none",
              mt: { xs: 1, sm: 2 },
              mb: { sx: 1, sm: 2 },
            }}
          >
            {heading}
          </Typography>
          <input
            type="text"
            style={{
              width: "60%",
              height: "10%",
              marginLeft: "20%",
              borderRadius: "10px",
              marginTop: "20px",
              marginBottom: "20px",
              borderColor: "#0079FF",
              padding: "2%",
            }}
            placeholder="user name"
          />
          <input
            type="text"
            style={{
              width: "60%",
              height: "10%",
              marginLeft: "20%",
              borderRadius: "10px",
              marginTop: "5%",
              marginBottom: "5%",
              borderColor: "#0079FF",
              padding: "2%",
            }}
            placeholder="password"
          />
          <button
            style={{
              width: "40%",
              height: "10%",
              marginLeft: "30%",
              borderRadius: "10px",
              marginTop: "3%",
              marginBottom: "5%",
              borderColor: "#0079FF",
              padding: "2%",
              backgroundColor: "#0079FF",
            }}
          >
            <Typography variant={{ sx: "h5", sm: "h5" }}>Login</Typography>
          </button>
          <Typography align="center" variant="h6">
            {message} <Link to={`/${link}`}>{link}</Link>
            {console.log(link)}
          </Typography>
          <button
            style={{
              width: "60%",
              height: "10%",
              marginLeft: "20%",
              borderRadius: "10px",
              marginTop: "3%",
              marginBottom: "5%",
              borderColor: "#0079FF",
              padding: "2%",
              backgroundColor: "#0079FF",
            }}
          >
            <Stack direction="row">
              <GoogleIcon sx={{ color: "#FE0000" }} />
              <Typography
                variant={{ xs: "subtitle2", sm: "h6" }}
                sx={{ ml: { xs: 1, sm: 2 }, color: "#fff" }}
              >
                Login With Google
              </Typography>
            </Stack>
          </button>
        </Stack>
      </Box>
    </Box>
  );
};

export default FormLS;
