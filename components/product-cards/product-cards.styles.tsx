'use client';
import styled from 'styled-components';

export const ProductCardsContainer = styled.section`
  //display: grid;
  //grid-template-columns: repeat(3, 1fr);
  //grid-column-gap: 30px;
  //grid-row-gap: 30px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (min-width: 780px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 30px;
  }
  @media (min-width: 1580px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
  }
`;
