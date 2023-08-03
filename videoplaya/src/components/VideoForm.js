import React from 'react'

const VideoForm = ({ videos, setVideos }) => {

    // const handleChange = (event) => {
    //     event.preventDefault();
    //     setVideos([
    //       ...videos,
    //       { name: event.target.files[0].name, type: event.target.files[0].type },
    //     ]);
    //   };

  return (
      <div id="file-upload">
          <h4>VideoForm goes here</h4>
        {/* <input type="file" onChange={handleChange} /> */}
    </div >
  )
}

export default VideoForm