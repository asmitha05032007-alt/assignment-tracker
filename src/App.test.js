import { render, screen } from '@testing-library/react';
import App from './App';

test('renders assignment tracker heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/College Assignment Submission Tracker/i);
  expect(headingElement).toBeInTheDocument();
});