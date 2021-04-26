import React from 'react';
import styled from 'styled-components';
import Offer from '../components/Offer';
import { Wrapper } from '../layout/Header';
import delivery from '../assets/icons/free-delivery.svg';

const OfferSection = () => {
  return (
    <Wrapper>
      <OfferSectionContainer>
        <Offer
          img={delivery}
          attr='free-delivery'
          offer='free World wide Shipping'
          paragraph='on all orders over $75'
        />
        <Offer
          img={delivery}
          attr='free-delivery'
          offer='free World wide Shipping'
          paragraph='on all orders over $75'
        />
        <Offer
          img={delivery}
          attr='free-delivery'
          offer='free World wide Shipping'
          paragraph='on all orders over $75'
        />
        <Offer
          img={delivery}
          attr='free-delivery'
          offer='free World wide Shipping'
          paragraph='on all orders over $75'
        />
      </OfferSectionContainer>
    </Wrapper>
  );
};

export default OfferSection;

const OfferSectionContainer = styled.div`
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;
`;
