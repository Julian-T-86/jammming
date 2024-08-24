import React, { useState } from 'react';
import './TrackList.css';
import SearchResults from '../SearchResults/SearchResults'

function TrackList() {
    const trackListArr = [
        {
          id: 1,
          name: 'Song 1',
          artist: 'Artist A',
          album: 'Album X',
        },
        {
          id: 2,
          name: 'Song 2',
          artist: 'Artist B',
          album: 'Album Y',
        },
        // ... (repeat for other tracks)
        {
          id: 10,
          name: 'Song 10',
          artist: 'Artist C',
          album: 'Album Z',
        },
      ];
    
      return (
        <div className="TrackList">
            <h2>Results</h2>
            {trackListArr.map((track) => (
                <ul key={track.id}>
                    <li style={{ fontSize: '1.5rem'}} >Artist: {track.artist}</li>
                    <li>Name: {track.name}</li>                    
                    <li>Album: {track.album}</li>
                </ul>
          ))}
        </div>
      );
}

export default TrackList;