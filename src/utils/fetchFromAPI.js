const axios = require("axios");
// require("dotenv").config();

// const BASE_URL = "https://youtube-v31.p.rapidapi.com/";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: 50,
  },
  headers: {
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Key": "e6db60f357mshb99a6e95cabd4b8p18cf30jsn047fc4fad40a",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
