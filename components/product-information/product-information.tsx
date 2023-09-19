import SelectionGroup from '@/ui/selection-group/selection-group';
import Button from '@/ui/button/button';
import {
  ProductInformationContainer,
  ProductDescriptionsContainer,
} from './product-information.styles';
import ProductDescription from '../product-description/product-description';

const colorOptions = [
  {
    name: 'black',
    current: true,
  },
  {
    name: 'yellow',
  },
];
const sizeOptions = [
  {
    name: 'xs',
    stock: 9,
  },
  {
    name: 's',
    stock: 12,
  },
  {
    name: 'md',
    stock: 0,
  },
  {
    name: 'l',
    stock: 2,
  },
  {
    name: 'xl',
    stock: 30,
  },
];

interface IDescription {
  desc_title: string;
  desc_open: boolean;
  _id: string;
  desc_text: {
    contenttype: 'paragraph' | 'list';
    content: string[];
    _id: string;
  }[];
}

interface IStock {
  _id: string;
  name: string;
  stock: number;
}

const ProductInformation = (props: {
  stock: IStock[];
  descriptions: IDescription[];
  color: string;
  moreColors: { productId: string; name: string; current: boolean }[];
  urlSlug?: string;
}) => {
  const { stock, descriptions, color, moreColors, urlSlug } = props;
  console.log('moreColors', moreColors);

  return (
    <ProductInformationContainer>
      <SelectionGroup name='colour' options={moreColors} urlSlug={urlSlug} />
      <SelectionGroup name='size' options={stock} />
      <Button type='addtobag' buttonLabel='Add to Bag' />
      <ProductDescriptionsContainer>
        {descriptions.map((description) => (
          <ProductDescription
            key={description._id}
            id={description._id}
            title={description.desc_title}
            textcontent={description.desc_text}
            open={description.desc_open}
          />
        ))}
        {/*<ProductDescription
          id='1'
          title='Details & Care'
          open={true}
          textcontent={[
            {
              _id: '1-1',
              contenttype: 'paragraph',
              content: [
                'Fear of God Essentials collection of understated pieces in versatile colours offers a massive upgrade on your everyday wardrobe. This T-shirt is cut from cotton-jersey and has a high ribbed mock neck and a tonal moniker at the front.',
              ],
            },
          ]}
        />
        <ProductDescription
          id='2'
          title='Size & Fit'
          open={false}
          textcontent={[
            {
              _id: '1-2',
              contenttype: 'list',
              content: [
                'Model wears a size larger to achieve a looser fit',
                'Mid-weight, slightly stretchy fabric',
              ],
            },
          ]}
        />
        */}
      </ProductDescriptionsContainer>
    </ProductInformationContainer>
  );
};

export default ProductInformation;
