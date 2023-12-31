'use client';
import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns:
      [pcarousel-start] repeat(6, 1fr)
      [pcarousel-end cspace-1-start] 1fr [cspace-1-end product-info-start] repeat(
        4,
        1fr
      )
      [product-info-end cspace-2-start] 1fr [cspace-2-end];
    grid-column-gap: 12px;
    grid-template-rows: auto 1fr;
    margin: 50px 0;
  }
`;
