import React from 'react'

const VideoUploader = ({ videos, setVideos }) => {

    const handleChange = (event) => {
      event.preventDefault();
      const selectedFiles = Array.from(event.target.files);
      setVideos([
        ...videos,
        ...selectedFiles.map((file) => ({
          name: file.name,
          type: file.type,
        })),
      ]);
      };

  return (
      <div id="video-uploader">
        <input id="file-input" type="file" onChange={handleChange} multiple/>
      </div>
  )
}

export default VideoUploader