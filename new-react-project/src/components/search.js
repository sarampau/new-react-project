import React from 'react';

const Search = (props) => {
    return (
        <div>
            <input
                onChange={e => props.handleInput(e)}
                placeholder='Search city here..'
            />
            <button>Search</button>
        </div>
    )
}

export default Search;