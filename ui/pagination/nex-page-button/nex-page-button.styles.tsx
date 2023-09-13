'use client';
import styled from 'styled-components';

export const NextPageButtonContainer = styled.button`
  position: relative;
  padding-right: 17px;
  height: 21px;
  line-height: 21px;
`;
export const Icon = styled.span`
  position: absolute;
  width: 11px;
  height: 21px;
  top: 0;
  right: 0;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #333;
    transform-origin: 100% 50%;
  }
  &:before {
    transform: rotate(-40deg);
  }
  &:after {
    transform: rotate(40deg);
  }
`;
