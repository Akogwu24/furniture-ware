import React from 'react';
import styled from 'styled-components';

const Product = ({ productImg, productName, productPrice }) => {
  return (
    <ProductContainer>
      <img src={productImg} alt='Lamp' />
      <p>{productName}</p>
      <p>NGN {productPrice}</p>
    </ProductContainer>
  );
};

export default Product;

const ProductContainer = styled.div`
  /* width: 200px; */
  height: 250px;
  background-color: white;
  padding: 10px;
  /* border-radius: 5px; */
  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    padding: 30px;
    object-fit: contain;
    border-radius: 5px;
    box-shadow: 2px 2px 10px #758b86;
  }
  p {
    font-size: 2rem;
    margin-top: 1rem;
    font-weight: 700;
  }
`;
