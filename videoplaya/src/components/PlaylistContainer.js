import React, { useState } from 'react'
import PlaylistForm from './PlaylistForm'
import PlaylistCard from "./PlaylistCard";

const PlaylistContainer = () => {

  const [playlist, setPlaylist] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [editingPlaylist, setEditingPlaylist] = useState(null);

  const handlePlaylistButton = () => {
    setPlaylist(true);
    setEditingPlaylist(null);
  };

  return (
    <div>
      {playlist ? (
        <PlaylistForm
          playlists={playlists}
          setPlaylists={setPlaylists}
          playlistName={playlistName}
          setPlaylistName={setPlaylistName}
          setPlaylist={setPlaylist}
        />
      ) : (
        <div id="add-playlist-button">
          <button onClick={handlePlaylistButton} disabled={editingPlaylist}>
            Add New Playlist
          </button>
        </div>
      )}

      {playlists.slice().reverse().map((pl) => (
        <div key={pl.name}>
          <PlaylistCard
            playlistName={pl.name}
            playlists={playlists}
            setPlaylists={setPlaylists}
            editingPlaylist={editingPlaylist}
            setEditingPlaylist={setEditingPlaylist}
          />
        </div>
      ))}
    </div>
  )
}

export default PlaylistContainer
