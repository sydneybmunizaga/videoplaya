import React, { useState } from 'react';
import './PlaylistCard.css';
import VideoContainer from './VideoContainer';

const PlaylistCard = ({
    playlistName,
    playlists,
    setPlaylists,
    editingPlaylist,
    setEditingPlaylist
}) => {
    const [editing, setEditing] = useState(false);
    const [editedName, setEditedName] = useState(playlistName);
    const [showProfile, setShowProfile] = useState(false)

    const handleEditPlaylist = (playlistName) => {
        if (!editingPlaylist) {
            setEditing(true);
            setEditingPlaylist(playlistName);
        }
    };

    const handleSave = () => {
        const updatedPlaylists = playlists.map(playlist => {
            if (playlist.name === playlistName) {
                return { ...playlist, name: editedName };
            }
            return playlist;
        });

        setPlaylists(updatedPlaylists);
        setEditingPlaylist(null)
        setEditing(false);
    };

    const handleCancel = () => {
        setEditingPlaylist(null);
        setEditing(false);
    };

    const handleDelete = () => {
        const updatedPlaylists = playlists.filter(playlist => playlist.name !== playlistName);
        setPlaylists(updatedPlaylists);
        setEditing(false)
    };

    const handleSelect = () => {
        setShowProfile(true)
    }

    console.log('editing: ', editing)
    console.log('editingPlaylist: ', editingPlaylist)

    return (
        <div className="playlist-card" id={ playlistName }>
            {editing ? (
                <div className="edit-form">
                    <input
                        type='text'
                        value={editedName}
                        onChange={(event) => setEditedName(event.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            ) : (
                    <div onClick={handleSelect}>
                        <h2>{playlistName}</h2>
                        {showProfile ? (
                            <VideoContainer />
                        ) : (
                            <>
                                <div className="button-group">
                                    <button className="edit-button" onClick={() => handleEditPlaylist(playlistName)}>
                                        Edit Playlist
                                    </button>
                                    <button className="delete-button" onClick={handleDelete} disabled={editingPlaylist}>
                                        Delete Playlist
                                    </button>
                                </div>
                            </>
                        )}
                </div>
            )}
        </div>
    );
};

export default PlaylistCard;
