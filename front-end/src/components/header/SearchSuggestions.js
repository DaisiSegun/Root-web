import React from 'react';

function SearchSuggestions({ suggestions, handleSuggestionClick }) {
  return (
    <ul className="suggestions">
      {suggestions.map((suggestion, index) => (
        <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
          {suggestion}
        </li>
      ))}
    </ul>
  );
}

export default SearchSuggestions;
