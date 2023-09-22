import React from 'react'
import './searchresult.css'
import './main.css'
import Header2 from '../header/Header2'
import SearchResult from './SearchResult'

function Search() {
  return (
    <div className='main'>
      <Header2/>
      <hr className='line'></hr>
      <h5 className='search-header'>Result</h5>
      <div className='search-col'>
        <SearchResult
         title={'Iphone 11 Rear Glass'}
         price={`30,0000`}
         image={'images/rearglass.png'}
        />
         <SearchResult
         title={'Iphone 11 Rear Glass'}
         price={`30,0000`}
         image={'images/rearglass.png'}
        />
         <SearchResult
         title={'Iphone 11 Rear Glass'}
         price={`30,0000`}
         image={'images/rearglass.png'}
        />
      </div>
      
    </div>
  )
}

export default Search