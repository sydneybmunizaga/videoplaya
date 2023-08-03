import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlaylistForm from './PlaylistForm';

describe('PlaylistForm Component', () => {
  it('renders the "Add New Playlist" button by default', () => {
    const { getByText } = render(<PlaylistForm />);
    expect(getByText('Add New Playlist')).toBeInTheDocument();
  });

  it('renders playlist name input after "Add New Playlist" button click', () => {
    const { getByText, getByLabelText } = render(<PlaylistForm />);

    const addButton = getByText('Add New Playlist');
    fireEvent.click(addButton);

    const input = getByLabelText('Playlist Name');
    expect(input).toBeInTheDocument();
  });

  it('adds a new playlist when the form is submitted', () => {
    const { getByText, getByLabelText, queryByText } = render(<PlaylistForm />);

    const addButton = getByText('Add New Playlist');
    fireEvent.click(addButton);

    const input = getByLabelText('Playlist Name');
    fireEvent.change(input, { target: { value: 'New Playlist' } });

    const submitButton = getByText('Create Playlist');
    fireEvent.click(submitButton);

    const playlistName = getByText('New Playlist');
    expect(playlistName).toBeInTheDocument();

    // Check that the input is no longer present after submission
    expect(queryByText('Playlist Name')).toBeNull();
  });
});
