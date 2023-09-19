'use client';
import styled from 'styled-components';

export const ProductInformationContainer = styled.div`
  order: 2;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    order: 1;
  }
  @media (min-width: 1024px) {
    grid-column: product-info-start / cspace-2-end;
    display: grid;
    grid-auto-rows: min-content;
    margin-top: 50px;
    max-width: auto;
  }
  @media (min-width: 1280px) {
    grid-column: product-info-start / product-info-end;
  }
`;
export const ProductDescriptionsContainer = styled.div`
  border-top: 1px solid #ccc;
`;
