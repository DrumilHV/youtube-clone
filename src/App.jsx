import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Feed,
  VideoDetail,
  SearchFeed,
  Navbar,
  ChannelDetails,
  // Login,
  // Register,
} from "./Components/index";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  RedirectToSignIn,
} from "@clerk/clerk-react";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn></SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <BrowserRouter>
        <Box sx={{ background: "#000" }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/additionalUser" exact element={<SignIn />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetails />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
            <Route
              path="/login/*"
              element={<SignIn routing="path" path="/login" />}
            />
            <Route
              path="/sign-up/*"
              element={<SignUp routing="path" path="/sign-up" />}
            />
            {/* <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route> */}
          </Routes>
        </Box>
      </BrowserRouter>
    </ClerkProvider>
  );
};

export default App;
