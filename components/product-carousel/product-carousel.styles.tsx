'use client';
import styled from 'styled-components';

export const ProductCarouselContainer = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns:
      [pcarousel-thumbnails-start] 1fr [pcarousel-thumbnails-end pcarousel-start] repeat(
        5,
        1fr
      )
      [pcarousel-end];
    grid-row: 1 / -1;
  }
  @media (min-width: 1024px) {
    grid-column: pcarousel-start / pcarousel-end;
    display: grid;
    grid-template-columns:
      [pcarousel-thumbnails-start] 1fr [pcarousel-thumbnails-end pcarousel-start] repeat(
        5,
        1fr
      )
      [pcarousel-end];
    grid-column-gap: 24px;
    grid-row: 1 / -1;
    grid-auto-rows: min-content;
  }
`;

export const ProductCarouselThumbnailContainer = styled.div`
  grid-column: pcarousel-thumbnails-start / pcarousel-thumbnails-end;
  align-self: center;
  display: block;
  display: grid;
  @media (min-width: 768px) {
    justify-items: flex-start;
  }
  @media (min-width: 1580px) {
    justify-items: flex-end;
  }
`;

export const ProductCarouselImagesContainer = styled.section`
  display: grid;
  grid-column: pcarousel-start / pcarousel-end;
  grid-template-columns: repeat(auto-fill, 100%);
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow-x: hidden;
  grid-gap: 20px;
  position: relative;

  @media (min-width: 1024px) {
    grid-column: pcarousel-thumbnails-start / pcarousel-end;
  }

  @media (min-width: 1280px) {
    grid-column: pcarousel-start / pcarousel-end;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
