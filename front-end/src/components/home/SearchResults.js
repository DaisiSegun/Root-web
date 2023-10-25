import React from 'react';
import SearchResult from './SearchResult';
import { Link } from 'react-router-dom';

function SearchResults({ results }) {
  return (
    <div className='search-results'>
      {results.map((result) => ( // Use the parameter "result"
        <Link className='link' to={`/product/${result._id}`}>
          <SearchResult
            key={result._id} // Use a unique key for each result
            name={result.name}
            avatar={result.avatar}
            price={result.price}
          />
        </Link>
      ))}
    </div>
  );
}

export default SearchResults;
