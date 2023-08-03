import React from "react";

const VideoItem = ({ file, type }) => {

  return (
      <video controls>
        <source src={file} type={type} />
      </video>
  );
};

export default VideoItem;
