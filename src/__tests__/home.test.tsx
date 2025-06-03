import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';
import { describe, it, expect } from 'vitest';

describe('HomePage', () => {
  it('renders headline', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Willkommen bei VIBES',
    );
  });
});
