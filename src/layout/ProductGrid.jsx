import React from 'react';
import styled from 'styled-components';
import RecentProductGridHeader from '../components/RecentProductGridHeader';
import Product from '../components/Product';
import product1 from '../assets/images/pr1.jpg';
import product2 from '../assets/images/pr2.jpg';
import product3 from '../assets/images/pr3.jpg';
import product4 from '../assets/images/pr4.jpg';

const ProductGrid = () => {
  return (
    <RecentProductSection>
      <RecentProductGridHeader />
      <ProductGridContainer>
        <Product
          productImg={product1}
          productName='Lamp'
          productPrice='NGN 2,000'
        />
        <Product
          productImg={product2}
          productName='Flexible-table'
          productPrice='NGN 3,400'
        />
        <Product
          productImg={product3}
          productName='Tray-Wood'
          productPrice='NGN 1,500'
        />
        <Product
          productImg={product4}
          productName='Throw-pillow'
          productPrice='NGN 900'
        />
        <Product
          productImg={product3}
          productName='Tray-Wood'
          productPrice='NGN 3,400'
        />
        <Product
          productImg={product4}
          productName='Thro-Pillow'
          productPrice='NGN 3,400'
        />
        <Product
          productImg={product1}
          productName='Lamp'
          productPrice='NGN 3,400'
        />
        <Product
          productImg={product2}
          productName='Flexible-Table'
          productPrice='NGN 3,400'
        />
      </ProductGridContainer>
    </RecentProductSection>
  );
};

export default ProductGrid;

const RecentProductSection = styled.section`
  width: 100%;
`;

const ProductGridContainer = styled.div`
  width: 85%;
  margin: 5rem auto 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 9rem 4rem;
`;
