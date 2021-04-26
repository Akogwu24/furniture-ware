import React from 'react';
import Banner from '../components/Banner';
import FashionGrid from '../layout/FashionGrid';
import ProductGrid from '../layout/ProductGrid';
import Header from '../layout/Header';
import NewArrival from '../layout/WeeklyArrivals';
import OfferSection from '../layout/OfferSection';
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductGrid />
      <FashionGrid />
      <NewArrival />
      <OfferSection />
    </>
  );
};

export default Home;
