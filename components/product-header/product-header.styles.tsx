'use client';
import styled from 'styled-components';

export const ProductHeaderContainer = styled.section`
  grid-column: product-info-start / product-info-end;
  //grid-column: 2 / -1;
  //grid-row-start: 1;
  display: flex;
  flex-direction: column;
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
