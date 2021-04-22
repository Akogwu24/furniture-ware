import React from 'react';
import styled from 'styled-components';
// import product1 from '../assets/images/pr1.jpg';

const Product = ({ productImg, productName, productPrice }) => {
  return (
    <ProductContainer>
      <img src={productImg} alt='Lamp' />
      <p>{productName}</p>
      <p>{productPrice}</p>
    </ProductContainer>
  );
};

export default Product;

const ProductContainer = styled.div`
  img {
    max-width: 100%;
    box-shadow: 2px 2px 10px #758b86;
  }
  p {
    font-size: 2rem;
    margin-top: 1rem;
    font-weight: 700;
  }
`;
