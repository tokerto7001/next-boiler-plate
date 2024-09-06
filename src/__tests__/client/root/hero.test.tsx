import Hero from '@/components/landing/hero';
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Landing Page Hero Heading Test', () => {
    const { getByRole } = render(<Hero />);

    const heading1 = getByRole('heading', { level: 1 })
    expect(heading1).toBeInTheDocument();
    expect(heading1.textContent).toMatch('Discover Insights That Inspire');

    const heading2 = getByRole('heading', {level: 3});
    expect(heading2).toBeInTheDocument();
    expect(heading2.textContent).toMatch('Join our community of thinkers, creators, and dreamers. Explore curated content across a wide range of topics, crafted to spark your curiosity and fuel your passions...');

})

test('Landing Page Hero Button Test', () => {
    const { getByText } = render(<Hero />);
    const callToActionButton = getByText('Discover');
    expect(callToActionButton).toBeInTheDocument();

    const secondaryButton = getByText('Blogs');
    expect(secondaryButton).toBeInTheDocument();

})

test('Landing Page Hero Image Test', () => {
    const { getByRole } = render(<Hero />);

    const image = getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toBeVisible()
    expect(image).toHaveAttribute('alt', 'Hero Image')
    
})

test('Landing Page Hero Link Test', () => {
    const { getByRole } = render(<Hero />);

    const link = getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/example')

})