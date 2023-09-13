'use client';
import { useState } from 'react';

import {
  ProductDescriptionContainer,
  ProductDescriptionTitle,
  ProductDescriptionText,
} from './product-description.styles';
import ArrowVertical from '@/ui/arrow-vertical/arrow-vertical';

const ProductDescription = ({
  id,
  title,
  open = false,
  textcontent: [{ _id, contenttype, content }],
}: {
  id: string;
  title: string;
  open: boolean;
  textcontent: {
    _id: string;
    contenttype: string;
    content: string[];
  }[];
}) => {
  const [descriptionIsopen, setDescriptionIsopen] = useState(open);

  const toggleDescriptionOpen = () => {
    setDescriptionIsopen(!descriptionIsopen);
  };

  const createdescriptionContent = () => {
    if (Array.isArray(content) && content.length > 0) {
      if (contenttype === 'paragraph') {
        return content.map((item, ind) => <p key={ind}>{item}</p>);
      }
      if (contenttype === 'list') {
        return (
          <ul>
            {content.map((item, ind) => (
              <li key={ind}>{item}</li>
            ))}
          </ul>
        );
      }
      return null;
    }
  };

  return (
    <ProductDescriptionContainer>
      <ProductDescriptionTitle onClick={toggleDescriptionOpen}>
        {title}
        <ArrowVertical type='right' open={descriptionIsopen} />
      </ProductDescriptionTitle>
      <ProductDescriptionText open={descriptionIsopen}>
        {createdescriptionContent()}
      </ProductDescriptionText>
    </ProductDescriptionContainer>
  );
};

export default ProductDescription;
