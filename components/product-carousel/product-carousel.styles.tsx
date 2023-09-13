'use client';
import styled from 'styled-components';

export const ProductCarouselContainer = styled.div`
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
`;

export const ProductCarouselThumbnailContainer = styled.div`
  grid-column: pcarousel-thumbnails-start / pcarousel-thumbnails-end;
  align-self: center;
  display: block;
`;

export const ProductCarouselImagesContainer = styled.section`
  grid-column: pcarousel-start / pcarousel-end;
  display: grid;
  grid-template-columns: repeat(auto-fill, 100%);
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow-x: hidden;
  grid-gap: 20px;
  position: relative;
`;
