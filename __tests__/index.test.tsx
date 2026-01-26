/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '@/components/pages/HomePage';

describe('Home', () => {
  it('renders a heading', () => {
    render(<HomePage />);
    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
