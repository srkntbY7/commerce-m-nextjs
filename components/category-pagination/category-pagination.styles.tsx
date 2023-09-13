'use client';
import styled from 'styled-components';

export const CategoryPaginationContainer = styled.div`
  grid-column: 1 / -1;
  padding: 20px 0;
  margin: 40px 0;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
