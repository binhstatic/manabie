import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('sign up for happy path', () => {
  render(<App />);
});
