'use client';
import styled, { css } from 'styled-components';

interface IArrow {
  type?: string;
  open: boolean;
}

export const ArrowContainer = styled.div<IArrow>`
  position: absolute;
  top: 30px;
  width: 20px;
  height: 12px;
  transition: all 0.2s linear;
  transform-origin: 100% center;

  ${(props) =>
    props.type === 'right' &&
    css`
      right: 10px;
    `}

  ${(props) =>
    props.type === 'left' &&
    css`
      left: 10px;
    `}

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 9px;
    width: 1px;
    height: 100%;
    background-color: #111;
    transform-origin: 50% 100%;
  }
  &:before {
    transform: rotate(-45deg);
  }
  &:after {
    transform: rotate(45deg);
  }

  ${(props) =>
    props.open &&
    css`
      transform: rotateX(180deg);
    `}
`;
