import React, { useState } from 'react'

import VideoUploader from './VideoUploader'
import VideoManager from './VideoManager'
import VideoStack from './VideoStack';

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

  return (
      <div>
          <VideoUploader videos={videos} setVideos={setVideos} />
          <VideoManager videos={videos} />
          <VideoStack videos={videos} />
      </div>
  )
}

export default VideoContainer