'use client';
import { ReactNode, useState } from 'react';

import { IProductDescription } from './IProductDescription';

import {
  ProductDescriptionContainer,
  ProductDescriptionTitle,
  ProductDescriptionText,
} from './product-description.styles';
import ArrowVertical from '@/ui/arrow-vertical/arrow-vertical';

const ProductDescription = (props: IProductDescription) => {
  const { id, title, open, textcontent } = props;

  const [descriptionIsopen, setDescriptionIsopen] = useState<boolean>(open);

  const toggleDescriptionOpen = () => {
    setDescriptionIsopen(!descriptionIsopen);
  };

  return (
    <ProductDescriptionContainer>
      <ProductDescriptionTitle onClick={toggleDescriptionOpen}>
        {title}
        <ArrowVertical type='right' open={descriptionIsopen} />
      </ProductDescriptionTitle>
      <ProductDescriptionText open={descriptionIsopen}>
        {textcontent.map((cntnt) => {
          if (Array.isArray(cntnt.content) && cntnt.content.length > 0) {
            if (cntnt.contenttype === 'paragraph') {
              return cntnt.content.map((item, ind) => (
                <p key={item + ind}>{item}</p>
              ));
            }
            if (cntnt.contenttype === 'list') {
              return (
                <ul key={cntnt._id}>
                  {cntnt.content.map((item, ind) => (
                    <li key={item + ind}>{item}</li>
                  ))}
                </ul>
              );
            }
            return null;
          }
        })}
      </ProductDescriptionText>
    </ProductDescriptionContainer>
  );
};

export default ProductDescription;
