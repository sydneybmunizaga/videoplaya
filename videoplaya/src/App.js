import { useState } from "react";
import "./App.css";
import VideoContainer from "./components/VideoContainer";
import VideoForm from "./components/VideoForm";
import PlaylistContainer from "./components/PlaylistContainer";

function App() {
  const [videos, setVideos] = useState([]);

  return (
    <>
      <div className="App">
        <PlaylistContainer />
        <VideoForm videos={videos} setVideos={setVideos} />
        <VideoContainer videos={videos} />
      </div>
    </>
  );
}

export default App;
