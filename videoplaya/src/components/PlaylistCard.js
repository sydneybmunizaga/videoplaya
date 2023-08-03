import React, { useState } from 'react';
import './PlaylistCard.css';
import VideoForm from './VideoForm';

const PlaylistCard = ({
    playlistName,
    playlists,
    setPlaylists,
    editingPlaylist,
    setEditingPlaylist
}) => {
    const [editing, setEditing] = useState(false);
    const [editedName, setEditedName] = useState(playlistName);

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
                <>
                    <h2>{playlistName}</h2>
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

            <VideoForm />
        </div>
    );
};

export default PlaylistCard;
