import React from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/icons/search.svg';

const SearchBar = ({ width, display }) => {
  return (
    <div>
      <Search width={width} style={{ display: `${display}` }}>
        <input placeholder='search product here' />
        <img className='searchIcon' src={searchIcon} alt='search-icon' />
      </Search>
    </div>
  );
};
export default SearchBar;

const Search = styled.div`
  display: flex;
  display: ${(props) => props.display};
  justify-content: space-between;
  width: ${(props) => props.width};
  margin: 0 auto;
  flex-grow: 1;
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
