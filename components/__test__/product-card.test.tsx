import { mockProduct } from '@/components/__test__/__mocks__/product';
import ProductCard from '@/components/product/product-card';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    events: {
      emit: jest.fn(),
      off: jest.fn(),
      on: jest.fn(),
    },
    isFallback: false,
    push: jest.fn(),
  }),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe('Product-card component', () => {
  it('Should render component', async () => {
    expect(() => render(<ProductCard product={mockProduct} />)).not.toThrow();
  });

  it('Should render product name', async () => {
    render(<ProductCard product={mockProduct} />);

    const productName = await screen.findByTestId('product-card-name');
    expect(productName).toBeInTheDocument();
  });

  it('Should render product name with text content', async () => {
    render(<ProductCard product={mockProduct} />);

    const productName = await screen.findByTestId('product-card-name');
    expect(productName).toHaveTextContent(mockProduct.name);
  });

  it('Should render url of image', () => {
    const { getByRole } = render(<ProductCard product={mockProduct} />);

    expect(getByRole('img')).toHaveAttribute('src', mockProduct.images[0].url);
  });


  it('Should called one time',  () => {
    const onClick = jest.fn();

    const { getByTestId } = render(<ProductCard product={mockProduct} />);

    fireEvent.click(getByTestId('product-card-button'));

    expect(onClick).toBeCalledTimes(1);
  });

});
