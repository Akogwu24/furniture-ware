import React from 'react';
import styled from 'styled-components';

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
  height: 250px;
  padding: 10px;
  border-radius: 3px;
  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    padding: 30px;
    background-color: white;
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
