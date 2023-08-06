import React from 'react'
import VideoThumbnail from './VideoThumbnail'
import { randomNumber } from "../utils";

const VideoStack = ({ videos }) => {

  return (
    <div id="video-stack">
      {videos &&
        videos.map((video) => {
          const randomKey = `${video.name}_${randomNumber}`;
          return (
            <div >
              <VideoThumbnail key={randomKey} src={video.file} type={video.type} />
            </div>
          )
        }
      )}
    </div>
  )
}

export default VideoStack

