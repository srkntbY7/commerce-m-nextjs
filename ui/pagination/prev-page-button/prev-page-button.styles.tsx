'use client';
import styled from 'styled-components';

export const PrevPageButtonContainer = styled.button`
  margin-right: auto;
  position: relative;
  padding-left: 17px;
  height: 21px;
  line-height: 21px;
`;
export const Icon = styled.span`
  position: absolute;
  width: 11px;
  height: 21px;
  top: 0;
  left: 0;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #333;
    transform-origin: 0% 50%;
  }
  &:before {
    transform: rotate(-40deg);
  }
  &:after {
    transform: rotate(40deg);
  }
`;
