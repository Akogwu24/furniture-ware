import React from 'react';
import { Wrapper } from './Header';
import styled from 'styled-components';
import SearchBar from '../components/Search';

const Footer = () => {
  return (
    <FooterSection>
      <Wrapper>
        <SearchBar />
        <FooterLinks>
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
              {' '}
              <a href='/'>Our Branches</a>
            </li>
            <li>
              {' '}
              <a href='/'>Careers</a>
            </li>
            <li>
              <a href='/'>Contact Us</a>
            </li>
            <li>
              <a href='/'>FAQ</a>
            </li>
          </ul>
        </FooterLinks>
      </Wrapper>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  /* background-color: rgba(55, 55, 55, 1); */
`;

const FooterLinks = styled.div``;
