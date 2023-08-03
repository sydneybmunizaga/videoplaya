import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {

  return (
    <div id="video-container">
      {videos &&
        videos.map((video) => (
          <VideoItem key={video.name} file={video.name} type={video.type} />
        ))}
    </div>
  );
};

export default VideoList;
