import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import TrackList from './components/TrackList/TrackList';

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="AppTitle">Ja<span style={{ color: 'chartreuse' }}>mmm</span>ing</h1>
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <TrackList />
      </div>
    </div>
  );
}

export default App;
