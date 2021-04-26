import React from 'react';
import styled from 'styled-components';

const Offer = ({ img, attr, offer, paragraph }) => {
  return (
    <OfferContainer>
      <div>
        <img src={img} alt={attr} />
      </div>
      <textContainer>
        <h4>{offer}</h4>
        <p>{paragraph}</p>
      </textContainer>
    </OfferContainer>
  );
};

export default Offer;

const OfferContainer = styled.div`
  display: flex;
  align-items: center;
  textContainer {
    width: 170px;
  }
  img {
    width: 40px;
    margin: 0 5px 10px 0;
  }
  h4 {
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;
