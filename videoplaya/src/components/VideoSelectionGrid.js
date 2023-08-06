import React from 'react'

import { randomNumber } from '../utils';

const VideoSelectionGrid = ({ videos, setSelectedVideos }) => {
  console.log("VSG:", videos)

  const handleSelection = () => {
    console.log("drag n drop")
    // setSelectedVideos([])
  }

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '2em',
  };

  const videoItemStyle = {
    backgroundColor: 'red',
    padding: '1em',
    textAlign: 'center',
    color: 'white',
  };

  return (
    <div id='video-selection-grid' style={gridContainerStyle}>
      {videos && videos.map((video) => {
        return (
          <div key={randomNumber} style={videoItemStyle} onClick={() => handleSelection()}></div>
        )
      })}
    </div>
  )
}

export default VideoSelectionGrid