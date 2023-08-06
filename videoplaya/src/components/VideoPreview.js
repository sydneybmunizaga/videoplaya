import React from "react";

const VideoPreview = ({ file, type }) => {

  return (
    <div id="video-preview">
      <video controls playsline="true">
        <source src={file} type={type} />
      </video>
    </div>
  );
};

export default VideoPreview;
