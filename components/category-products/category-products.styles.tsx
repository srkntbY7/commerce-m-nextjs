'use client';
import styled from 'styled-components';

export const CategoryProductsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1580px) {
    margin: 60px 0 20px;
    display: grid;
    grid-template-columns: minmax(20vw, 300px) 1fr;
    grid-column-gap: 30px;
  }
`;

export const CategoryProductArea = styled.section`
  display: grid;
`;
