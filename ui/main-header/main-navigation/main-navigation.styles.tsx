'use client';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
  max-width: var(--site-width);
  padding: var(--site-padding);
  margin: 0 auto;
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavigationItem = styled.li`
  margin: 0 10px;

  a {
    display: block;
    padding: 16px 0;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid #000;
    }
  }
`;
