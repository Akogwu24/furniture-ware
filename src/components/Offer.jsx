import React from 'react';
import styled from 'styled-components';

const Offer = ({ img, attr, offer, paragraph }) => {
  return (
    <OfferContainer>
      <div>
        <img src={img} alt={attr} />
      </div>
      <div className='text-container'>
        <h4>{offer}</h4>
        <p>{paragraph}</p>
      </div>
    </OfferContainer>
  );
};

export default Offer;

const OfferContainer = styled.div`
  display: flex;
  align-items: center;
  .text-container {
    width: 170px;
  }
  img {
    width: 40px;
    margin: 0 5px 10px 0;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    :hover {
      width: 41px;
      opacity: 0.8;
    }
  }
  h4 {
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;
