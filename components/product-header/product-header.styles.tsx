'use client';
import styled from 'styled-components';

export const ProductHeaderContainer = styled.section`
  margin-bottom: 30px;
  order: -1;
  @media (min-width: 1024px) {
    order: 1;
  }
  @media (min-width: 1024px) {
    grid-column: product-info-start / product-info-end;
    display: flex;
    flex-direction: column;
  }
`;
export const ProductHeadingDesigner = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;
export const ProductHeadingName = styled.h2`
  font-size: 18px;
  text-transform: capitalize;
  margin-bottom: 12px;
  font-weight: normal;
`;
export const ProductHeadingPrice = styled.span`
  font-size: 22px;
`;
