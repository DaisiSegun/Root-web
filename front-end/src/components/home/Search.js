import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import axios from 'axios';
import Header from '../header/Header';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  useEffect(() => {
    // Make an API call to fetch search results based on the 'query' parameter
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`/api2/search-products?query=${query}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (query) {
      fetchSearchResults();
    } else {
      // Clear the search results when the 'query' parameter is empty
      setSearchResults([]);
    }
  }, [query]);

  return (
    <div className='main'>
      <Header />
      <hr className='line'></hr>
      <h5 className='search-header'>Result</h5>
      <div className='search-col'>
        {searchResults.length === 0 ? (
          <>
            <p className='no-products-message'>No repair found.</p>
            <div className='sign_up'>
            <div className='sign_up_container'>
              <div className='space3'></div>
              <h5 className='describe-h-text'>Can't find your iPhone repair?</h5>
              <div className='space3'></div>
              <Link className='link5' to='whatsapp://send?phone=+2349019971557'>
                <button className='nav-button2'>
                  <div className='split-customer1'>
                    <span>Reach us on WhatsApp</span>
                    <img src='/images/chat-us.svg' alt='WhatsApp Icon' />
                    <span className='nav-reach'>+2349019971557</span>
                  </div>
                </button>
               
             
              </Link>
              
            </div>
            <label className='not-cus'>Please reach out to us. We will find your repair and give you a quotation</label>
            </div>
          </>
        ) : (
          <SearchResults results={searchResults} />
        )}
      </div>
    </div>
  );
}

export default Search;
