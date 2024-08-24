import React, { useState } from 'react'
import SearchButton from '../SearchButton/SearchButton'
import './SearchBar.css';

function SearchBar() {
    const [searchParam, setSearchParam] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <label for="songSearch">Find your artist:</label>
            <input 
                name="songSearch"
                id="songSearch"
                type="text"
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)}
                />
            <SearchButton />
        </form>
    )
}

export default SearchBar;