'use client';
import styled from 'styled-components';

export const ArrowContainerLeft = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 31px;
  height: 31px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  left: 10px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 15px;
    left: 30%;
    height: 1px;
    width: 40%;
    background-color: #111;
    transform-origin: 0% 50%;
  }
  &:before {
    transform: rotate(-45deg);
  }
  &:after {
    transform: rotate(45deg);
  }
`;
