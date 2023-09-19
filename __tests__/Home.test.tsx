import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/app/page';

test('should have home text', () => {
  render(<Home />);
  const homeText = screen.getByText(/home/i);

  expect(homeText).toBeInTheDocument();
});
