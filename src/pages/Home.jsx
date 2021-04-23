import React from 'react';
// import styled from 'styled-components';
import Banner from '../components/Banner';
import FashionGrid from '../layout/FashionGrid';
import ProductGrid from '../layout/ProductGrid';
import Header from '../layout/Header';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductGrid />
      <FashionGrid />
    </>
  );
};

export default Home;
