import React from 'react';
import styled from 'styled-components';
import logo from '../assets/icons/logo.jpg';
import searchIcon from '../assets/icons/search.svg';
import user from '../assets/icons/user.svg';
import cart from '../assets/icons/shopping-bag.svg';
import menu from '../assets/icons/menu.svg';
import dropDownArrow from '../assets/icons/down-arrow.svg';

const Header = () => {
  return (
    <MyHeader>
      <Wrapper>
        <Row>
          <Logo src={logo} alt='logo' />
          <SearchBar>
            <input placeholder='search product here' />
            <img className='searchIcon' src={searchIcon} alt='search-icon' />
          </SearchBar>
          <AvaterShoppingBag>
            <img src={user} alt='user' />
            <img src={cart} alt='user' />
          </AvaterShoppingBag>
        </Row>
        <Row>
          <BrowseCategories>
            <img src={menu} alt='hamburger-menu' />
            <p>Browse Categories</p>
            <img src={dropDownArrow} alt='drop-down-arrow' />
          </BrowseCategories>
        </Row>
      </Wrapper>
    </MyHeader>
  );
};
export default Header;

const MyHeader = styled.header`
  width: 100%;
  height: 100px;
`;

const Wrapper = styled.div`
  height: 20px;
  width: 75%;
  margin: 0 auto;
  padding-top: 2rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 5rem;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  input {
    outline: none;
    border: none;
  }
  img {
    width: 3rem;
  }
`;

const AvaterShoppingBag = styled.div`
  display flex;
  img{
    margin-right: 20px;
    width: 3.5rem;
  }
`;

const BrowseCategories = styled.div`
  width: 100px;
  height: 10px;
  background-color: red;
`;
