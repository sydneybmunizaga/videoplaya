import React, {useState} from "react";
// import VideoPreview from "./VideoPreview";
// import { randomNumber } from "../utils";
import VideoSelectionGrid from "./VideoSelectionGrid";

const VideoManager = ({ videos }) => {
  const [selectedVideos, setSelectedVideos] = useState([])
  
  return (
    <div id="video-manager">
      <VideoSelectionGrid videos={videos} setSelectedVideos={setSelectedVideos} />
    </div>
  );
};

export default VideoManager;

// {videos &&
//   videos.map((video) => {
//     const randomKey = `${video.name}_${randomNumber}`;
//     return (
//       <div>
//         <VideoPreview key={randomKey} file={video.name[0]} type={video.type[0]} />
//       </div>
//     );
//   })}