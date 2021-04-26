import React from 'react';
import styled from 'styled-components';
import logo from '../assets/icons/logo.jpg';
import user from '../assets/icons/user.svg';
import cart from '../assets/icons/shopping-bag.svg';
import menu from '../assets/icons/menu.svg';
import dropDownArrow from '../assets/icons/down-arrow.svg';
import SearchBar from '../components/Search';

const Header = () => {
  return (
    <MyHeader>
      <Wrapper>
        <Row>
          <Logo src={logo} alt='logo' />
          <SearchBar />
          <AvaterShoppingBag>
            <img src={user} alt='user' />
            <img src={cart} alt='user' />
          </AvaterShoppingBag>
        </Row>
        <SecondRow>
          <BrowseCategories>
            <img src={menu} alt='hamburger-menu' />
            <p>Browse Categories</p>
            <img src={dropDownArrow} alt='drop-down-arrow' />
          </BrowseCategories>
          <Nav>
            <ul>
              <a href='/'>Home</a>
              <a href='/'>Events</a>
              <a href='/'>Gallery</a>
              <a href='/'>Our Services</a>
              <a href='/'>About Us</a>
            </ul>
          </Nav>
          <Small>
            <a href='/'>Help Center</a>
          </Small>
        </SecondRow>
      </Wrapper>
    </MyHeader>
  );
};
export default Header;

const MyHeader = styled.header`
  width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
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

const AvaterShoppingBag = styled.div`
  display: flex;
  img {
    width: 3rem;
  }
  img:first-of-type {
    margin-right: 20px;
  }
`;

const SecondRow = styled(Row)`
  margin-top: 2.5rem;
`;

const BrowseCategories = styled.div`
  background-color: black;
  display: flex;
  padding: 1.5rem 2rem;
  color: white;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;

  :hover {
    background-color: #6d632d;
  }

  img:first-of-type {
    transform: rotate(180deg);
    width: 2rem;
  }
  img:last-of-type {
    width: 1.5rem;
  }
  p {
    margin: 0 1.5rem;
  }
`;

const Nav = styled.nav`
  width: 50%;
  ul {
    width: 100%;
    margin: 0 auto;
  }

  a {
    margin: 0 18px;
    color: black;
    font-weight: 700;

    :hover {
      color: gray;
      padding-bottom: 1.4rem;
      border-bottom: solid 4px black;
    }
  }
`;
const Small = styled.small`
  a {
    color: gray;
  }
`;
