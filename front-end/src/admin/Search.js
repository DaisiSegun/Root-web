import React, { useRef } from 'react';

function Search({ value, onChange, onSearch }) {
  const inputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const handleClick = () => {
    console.log('Search button clicked'); // Debugging log
    onSearch();
  };

  return (
    <div className="search-container2">
      <input
        className="search2"
        ref={inputRef}
        type="text"
        placeholder="Search Root"
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <div className="search_icon_container2">
        <img
          className="search_icon2"
          src="./images/search.svg"
          alt="Search"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Search;
