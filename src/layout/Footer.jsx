import React, { useState, useEffect } from 'react';
import { Wrapper } from './Header';
import styled from 'styled-components';
import SearchBar from '../components/Search';

const Footer = () => {
  const [searbarWidth, setSearchbarWidth] = useState('150%');
  useEffect(() => {
    if (window.innerWidth < 500) {
      setSearchbarWidth('80%');
    }
  }, []);
  return (
    <FooterSection>
      <Wrapper>
        <FooterContainer>
          <SearchBar width={searbarWidth} />
          <FooterNav>
            <ul>
              <li>
                <a href='/'>Men</a>
              </li>
              <li>
                <a href='/'>Women</a>
              </li>
              <li>
                <a href='/'>Accessories</a>
              </li>
              <li>
                <a href='/'>Junior</a>
              </li>
              <li>
                <a href='/'>Gifts</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='/'>Track Item</a>
              </li>
              <li>
                <a href='/'>Our Branches</a>
              </li>
              <li>
                <a href='/'>Careers</a>
              </li>
              <li>
                <a href='/'>Contact Us</a>
              </li>
              <li>
                <a href='/'>FAQ</a>
              </li>
            </ul>
          </FooterNav>
        </FooterContainer>
      </Wrapper>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  margin-bottom: 5rem;
  /* background-color: rgba(55, 55, 55, 1); */
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin: 0 auto;

  li {
    margin-bottom: 1rem;
    font-weight: bold;
  }
  a:hover {
    color: gray;
  }
  @media (max-width: 400px) {
    margin-top: 3rem;
  }
`;
