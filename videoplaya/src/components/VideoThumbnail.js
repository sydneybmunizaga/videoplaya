import React from 'react'

const VideoThumbnail = ({ file, type }) => {

  return (
    <div id="video-thumbnail">
      <h4>Thumbnail</h4>
      <video controls>
          <source src={file} type={type} />
      </video>
    </div>
  )
}

export default VideoThumbnail