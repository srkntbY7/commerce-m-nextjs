'use client';
import styled from 'styled-components';

export const Thumbnail = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: grid;
    padding: 4px;
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    display: none;
  }
  @media (min-width: 1280px) {
    display: grid;
    padding: 4px;
    cursor: pointer;
  }
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
