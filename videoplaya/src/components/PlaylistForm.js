import React from "react";
import "./PlaylistForm.css";

const PlaylistForm = ({ 
    playlists,
    setPlaylists,
    playlistName,
    setPlaylistName,
    setPlaylist,
    // editingPlaylist,
    // setEditingPlaylist,
    // setEditing
}) => {

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const handlePlaylistSubmit = (event) => {
    event.preventDefault();
    if (playlistName) {
      setPlaylists([...playlists, { name: playlistName, videos: [] }]);
      setPlaylist(false);
      setPlaylistName("");
    }
  };

  return (

        <div>
          <form onSubmit={handlePlaylistSubmit}>
            <label>Playlist Name</label>
            <input
              type="text"
              name="playlist"
              value={playlistName}
              onChange={handlePlaylistNameChange}
            />
            <button type="submit">Create Playlist</button>
          </form>
        </div>
  );
};

export default PlaylistForm;
