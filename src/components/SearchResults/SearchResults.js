import React from "react";

function SearchResults({ arrayProp, searchParam }) {
    
    
    const filteredTrackList = arrayProp.filter(track => track.artist.toLowerCase().includes(searchParam.toLowerCase))

    return (
        <div className="SearchResults">
            <h2>Results</h2>
            {filteredTrackList.map((track) => (
                <ul key={track.id}>
                    <li style={{ fontSize: '1.5rem'}} >Artist: {track.artist}</li>
                    <li>Name: {track.name}</li>                    
                    <li>Album: {track.album}</li>
                </ul>
          ))}
        </div>
      );   
}
export default SearchResults;