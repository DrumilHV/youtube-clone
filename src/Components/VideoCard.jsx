import React from "react";
import { Link } from "react-router-dom";
import { Typography, CardContent, Card, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelTitle,
  demoVideoUrl,
  demoChannelUrl,
} from "../utils/constants";
// import { start } from "repl";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(snippet);
  return (
    <Card
      sx={{
        width: {
          xs: "320px",
          sm: "358px",
          md: "320px",
        },
        display: { sx: "flex" },
        // justifyContent: { xs: "center", md: "start" },
        borderRadius: "10px",
        boxShadow: "none",
        // textAlign: "center",
      }}
      //   nowrap={true}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: {
              xs: "320px",
              sm: "358px",
              md: "320px",
            },
            height: 200,
          }}
        />
      </Link>
      <CardContent sx={{ background: "#000", height: "105px" }}>
        <Link
          style={{ textDecoration: "none" }}
          to={videoId ? `/vedio/${videoId}` : demoVideoUrl}
        >
          <Typography
            variant="subtitle1"
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: { md: "358px", sm: "320px" },
              //   padding: "0px",
            }}
            sx={{ padding: { sx: "0px", md: "0px" } }}
            fontWeight="bold"
            color="#fff"
            // align="center"
          >
            {snippet?.title?.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to={
            snippet.chnnelId ? `/channel/${snippet.channelId}` : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="grey"
            sx={{ textDecoration: "none" }}
          >
            {snippet?.channelTitle?.slice(0, 60) || demoChannelTitle}
            <CheckCircle
              sx={{
                fontSize: "12px",
                ml: "5px",
                color: "#FC1503",
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
