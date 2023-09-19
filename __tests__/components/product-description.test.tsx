import { render, screen, within } from '@testing-library/react';
import ProductDescription from '@/components/product-description/product-description';

interface IDescription {
  id: string;
  title: string;
  open: boolean;
  textContent: {
    _id: string;
    contenttype: 'paragraph' | 'list';
    content: string[];
  }[];
}

test('should list product descriptions for paragraph and list type content', () => {
  const description: IDescription = {
    id: 'abc123',
    title: 'Details & Care',
    open: true,
    textContent: [
      {
        _id: 'text123',
        contenttype: 'paragraph',
        content: [
          'This product unlocks access to tailor-made digital content.',
        ],
      },
      {
        _id: 'text456',
        contenttype: 'list',
        content: ['Black cotton-jersey', 'Hand wash'],
      },
    ],
  };
  render(
    <ProductDescription
      id={description.id}
      title={description.title}
      open={description.open}
      textcontent={description.textContent}
    />
  );

  // find and expect product description title
  const productDescriptionTitle = screen.getByRole('heading', {
    name: /details & care/i,
  });
  expect(productDescriptionTitle).toBeInTheDocument();

  // find and expect paragraph content
  const productDescriptionAsParagraph = screen.getByText(
    'This product unlocks access to tailor-made digital content.'
  );
  expect(productDescriptionAsParagraph).toBeInTheDocument();

  // find and expect list content with all items
  const productDescriptionAsListItem = within(
    screen.getAllByRole('listitem')[0]
  ).getByText('Black cotton-jersey');
  expect(productDescriptionAsListItem).toBeInTheDocument();

  // total length of the content should match the length of the content
  const totalListItems = within(screen.getAllByRole('list')[0]).getAllByRole(
    'listitem'
  );
  expect(totalListItems).toHaveLength(2);
});
