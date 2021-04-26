import React from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/icons/search.svg';

const SearchBar = () => {
  return (
    <div>
      <Search>
        <input placeholder='search product here' />
        <img className='searchIcon' src={searchIcon} alt='search-icon' />
      </Search>
    </div>
  );
};
export default SearchBar;

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  input {
    outline: none;
    border: none;
    background-color: rgba(216, 228, 226, 0.274);
    width: 100%;
    text-align: center;
  }

  img {
    width: 2rem;
  }
`;
