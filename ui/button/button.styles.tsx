'use client';
import { styled } from 'styled-components';

interface IBtn {
  type?: string;
}

export const ButtonContainer = styled.button<IBtn>`
  width: 100%;
  padding: 16px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  margin: 30px 0;
  color: ${(props) => (props.type === 'addtobag' ? '#fff' : '#000')};
  background-color: ${(props) => (props.type === 'addtobag' ? '#000' : '#fff')};

  &:hover {
    background-color: #333;
  }
`;
