'use client';
import styled from 'styled-components';

export const LastPageButtonContainer = styled.button`
  position: relative;
  width: 30px;
  padding-right: 17px;
  height: 21px;
  line-height: 21px;

  &:after {
    content: '';
    position: absolute;
    top: 3px;
    right: 0;
    width: 1px;
    height: 15px;
    background-color: #333;
  }
`;
export const Icon = styled.span`
  position: absolute;
  width: 11px;
  height: 21px;
  top: 0;
  right: 4px;

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
