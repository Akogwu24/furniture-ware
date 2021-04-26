import React from 'react';
import styled from 'styled-components';
import Offer from '../components/Offer';
import { Wrapper } from '../layout/Header';
import delivery from '../assets/icons/free-delivery.svg';
import card from '../assets/icons/credit-card-secure.svg';
import warantee from '../assets/icons/guarantee.svg';
import moneyBack from '../assets/icons/money-back.svg';

const OfferSection = () => {
  return (
    <Div>
      <Wrapper>
        <OfferSectionContainer>
          <Offer
            img={delivery}
            attr='free-delivery'
            offer='free World wide Shipping'
            paragraph='on all orders over $75'
          />
          <Offer
            img={card}
            attr='secure-credit-card'
            offer='100% Security'
            paragraph='Master card/payPal/Visa'
          />
          <Offer
            img={warantee}
            attr='International Waranty'
            offer='International Waranty'
            paragraph='Insured By Axa mansard Insurance Nig '
          />
          <Offer
            img={moneyBack}
            attr='refund'
            offer='100% Refund within 7days'
            paragraph='30days Money back guarantee'
          />
        </OfferSectionContainer>
      </Wrapper>
    </Div>
  );
};

export default OfferSection;

const OfferSectionContainer = styled.div`
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;
`;

const Div = styled.section`
  border-bottom: solid 2px rgba(108, 151, 136, 0.226);
  margin-bottom: 10rem;
`;
