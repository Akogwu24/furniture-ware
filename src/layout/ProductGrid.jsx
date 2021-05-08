import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import RecentProductGridHeader from '../components/GridHeader';
import Product from '../components/Product';
import { Wrapper } from './Header';

const ProductGrid = () => {
  const [productItems, setProductItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPhotos = () => {
    setIsLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        const productData = data.slice(0, 12);
        setProductItems(productData);

        setIsLoading(false);
      });
  };
  useEffect(() => {
    getPhotos();
  }, []);

  // console.log('this is the productItems', productItems);
  return (
    <RecentProductSection>
      <Wrapper>
        <RecentProductGridHeader
          header='Recent Products'
          subHeader='Add our new arrivals to your weekly lineup'
        />
        <ProductGridContainer>
          {isLoading && <p>Loading Data........</p>}
          {productItems.map((productItem) => (
            <Product
              key={productItem.id}
              productImg={productItem.image}
              productName={`${productItem.title.split(' ')[0]} ${
                productItem.title.split(' ')[1]
              }`}
              productPrice={productItem.price}
            />
          ))}
        </ProductGridContainer>
      </Wrapper>
    </RecentProductSection>
  );
};

export default ProductGrid;

const RecentProductSection = styled.section`
  width: 100%;
  border-bottom: solid 2px rgba(108, 151, 136, 0.226);
`;

const ProductGridContainer = styled.div`
  margin: 10rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 9rem 4rem;
  img:hover {
    animation: shakeX;
    animation-duration: 1.5s;
  }
`;
