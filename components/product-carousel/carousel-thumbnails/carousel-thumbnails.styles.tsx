'use client';
import styled from 'styled-components';

interface IThumbnail {
  selected: boolean;
}

export const Thumbnail = styled.div<IThumbnail>`
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

  ${(props) =>
    props.selected ? 'border: 1px solid #ccc' : 'border: 1px solid transparent'}
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
