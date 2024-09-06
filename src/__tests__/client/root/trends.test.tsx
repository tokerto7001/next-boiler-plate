import Trends from '@/components/landing/trends';
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Landing Page Trends Heading Test', () => {
    const { getByText } = render(<Trends />);

    const heading = getByText('Top Rated Contents');
    expect(heading).toBeInTheDocument();
});

test('Landing Page Trends Container Test', () => {
    const { getByTestId } = render(<Trends />);

    const cardContainer = getByTestId('cardContainer');
    expect(cardContainer.children.length).toBe(3);
});

test('Landing Page Trends Trend Card Test', () => {
    const { getAllByTestId } = render(<Trends />);

    const cards = getAllByTestId('trendCard')
    expect(cards).toHaveLength(3);
});