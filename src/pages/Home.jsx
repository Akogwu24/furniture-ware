import React from 'react';
import Banner from '../components/Banner';
import FashionGrid from '../layout/FashionGrid';
import ProductGrid from '../layout/ProductGrid';
import Header from '../layout/Header';
import NewArrival from '../layout/WeeklyArrivals';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductGrid />
      <FashionGrid />
      <NewArrival />
    </>
  );
};

export default Home;
