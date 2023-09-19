'use client';
import styled from 'styled-components';

export const LinkContainer = styled.div`
  flex: 48%;
  margin-bottom: 40px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const ProductTitle = styled.span`
  text-transform: uppercase;
  color: #000;
  margin-top: 10px;
  display: block;
`;

export const ProductName = styled.span`
  color: #666;
  font-size: 14px;
`;

export const ProductPrice = styled.span`
  margin-top: 12px;
  display: block;
`;
