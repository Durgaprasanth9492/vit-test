import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders welcome message', () => {
    render(<App />);
    expect(
      screen.getByText(/Start prompting \(or editing\) to see magic happen :\)/)
    ).toBeInTheDocument();
  });
});