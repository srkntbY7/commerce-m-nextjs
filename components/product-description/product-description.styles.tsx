'use client';
import styled from 'styled-components';

interface IDesctiption {
  open: boolean;
}

export const ProductDescriptionContainer = styled.div`
  border-bottom: 1px solid #ccc;
  position: relative;
`;

export const ProductDescriptionTitle = styled.h3`
  font-weight: normal;
  font-size: 22px;
  cursor: pointer;
  padding: 24px 0;
`;

export const ProductDescriptionText = styled.div<IDesctiption>`
  max-height: 0;
  transition: all 0.25s ease-out;
  overflow: hidden;
  line-height: 1.6;
  transition: max-height 0.3s ease;
  & > * {
    padding-bottom: 24px;
  }

  ul {
    list-style-type: disc;
    list-style-position: inside;
    padding-left: 10px;
  }

  ${(props) =>
    props.open
      ? 'max-height: 1000px; transition: max-height 0.35s ease-in;'
      : ''};
`;
