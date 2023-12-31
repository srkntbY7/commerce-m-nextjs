'use client';
import styled, { css } from 'styled-components';

interface ISelection {
  $active: boolean;
  $outofstock: boolean;
}

export const SelectionContainer = styled.span<ISelection>`
  flex: 24%;
  padding: 13px 10px;
  border: 1px solid #ccc;
  flex-grow: initial;
  text-align: center;
  color: #444;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
  font-size: 16px;

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ${(props) =>
    props.$active ? 'border-color: #000;' : 'border: 1px solid #ccc;'};
  ${(props) =>
    props.$outofstock
      ? css`
          position: relative;
          background-color: #f5f5f5;
          color: #999;
          cursor: default;

          &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              to top left,
              rgba(204, 204, 204, 0) 0%,
              rgba(204, 204, 204, 0) calc(50% - 0.8px),
              rgba(204, 204, 204, 1) 50%,
              rgba(204, 204, 204, 0) calc(50% + 0.8px),
              rgba(204, 204, 204, 0) 100%
            );
          }
        `
      : ``}
`;

export const SelectionButton = styled.button`
  background: transparent;
  border: none;
  text-transform: uppercase;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
