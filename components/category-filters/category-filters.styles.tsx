'use client';
import styled from 'styled-components';

interface IFilterAccordion {
  open: boolean;
}
interface IFilterLink {
  selected?: boolean;
}

export const FiltersContainer = styled.div`
  display: block;
`;

export const FilterContainer = styled.div`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

export const FilterHeading = styled.div`
  padding: 15px 0;
  display: block;
  cursor: pointer;
  position: relative;
`;

export const FilterListAccorionBtn = styled.div<IFilterAccordion>`
  position: absolute;
  top: 30px;
  right: 10px;
  width: 20px;
  height: 12px;
  transition: all 0.2s linear;
  transform-origin: 100% center;

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

  ${(props) => (props.open ? 'transform: rotateX(180deg)' : '')}
`;

export const FilterTitle = styled.span`
  font-size: 17px;
  font-weight: bold;
  display: block;
  text-transform: capitalize;
`;
export const SelectedFilter = styled.span`
  font-size: 16px;
  color: #666;
  display: block;
  margin-top: 6px;
`;

export const FilterList = styled.ul<IFilterAccordion>`
  display: block;
  max-height: 0;
  overflow-y: hidden;
  transition: max-height 0.2s ease;

  ${(props) => (props.open ? 'max-height: 266px; overflow-y: scroll;' : '')};
`;

export const FilterListItem = styled.li<IFilterLink>`
  display: block;
  margin: 18px 0;

  a {
    position: relative;
    display: block;
    padding-left: 30px;
    height: 20px;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      border: 1px solid #999;
      border-radius: 50%;
      ${(props) =>
        props.selected ? 'border: 4px solid #000' : 'border: 1px solid #999'}
    }

    &:hover {
      &:before {
        border-color: #000;
      }
    }
  }
`;
