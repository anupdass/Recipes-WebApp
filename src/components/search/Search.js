import React from 'react'
import './search.css'


function Search({ handleInput }) {
    return (
        <input
            onChange={text => handleInput(text)}
            placeholder='search anything....' />
    )
}

export default Search