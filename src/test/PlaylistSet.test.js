import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PlaylistSet from '../component/Container/SideController/PlaylistSet';

// props Mock
const mockProps = {
    isPlMenuClick: false,
    onPlMenuClick: jest.fn(),
    listOfPlaylist: [
        { name: 'Playlist 1', list: [] },
        { name: 'Playlist 2', list: [] },
    ],
    onLoadAllPlaylists: jest.fn(),
    onSelectedPlaylist: jest.fn(),
    onAddPlaylist: jest.fn(),
    onDeletePlaylist: jest.fn(),
    onIsCurrentPlaylistViewed: jest.fn(),
};

describe('PlaylistSet', () => {
    it('renders PlaylistSet component', () => {
        render(<PlaylistSet {...mockProps} />);
        expect(screen).toMatchSnapshot();

        // New Playlist
        const newPlaylistBtn = screen.getByText('New Playlist');
        expect(newPlaylistBtn).toBeInTheDocument();
        expect(newPlaylistBtn).toMatchSnapshot();
        
        // Delete Playlist
        const deletePlaylistBtn = screen.getByText('Delete Playlist');
        expect(deletePlaylistBtn).toBeInTheDocument();
        expect(deletePlaylistBtn).toMatchSnapshot();
    });

    
});

