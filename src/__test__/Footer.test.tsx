import { render, screen } from '@testing-library/react';
import Footer from '@/component/Footer';

describe('Footer Component - Renders developer name, version, and current year correctly', () => {

  it('renders with default props', () => {
    render(<Footer />);

    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent(/srilatha/i);
    expect(footer).toHaveTextContent(new Date().getFullYear().toString());
  });

  it('renders the footer with custom props', () => {
    render(<Footer developer="Subi" version="2.3.4" />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent(/Subi/i);
    expect(footer).toHaveTextContent(/version 2.3.4/i);
  });

  it('has the correct CSS classes', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('text-center');
  });

});