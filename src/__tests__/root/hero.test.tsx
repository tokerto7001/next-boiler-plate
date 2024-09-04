import Hero from '../../components/landing/hero';
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Landing Page Hero Test', async() => {
    const { getByRole, getByText } = render(<Hero />);

    const heading1 = getByRole('heading', { level: 1 })
    expect(heading1).toBeInTheDocument();
    expect(heading1.textContent).toMatch('Discover Insights That Inspire');

    const heading2 = getByRole('heading', {level: 3});
    expect(heading2).toBeInTheDocument();
    expect(heading2.textContent).toMatch('Join our community of thinkers, creators, and dreamers. Explore curated content across a wide range of topics, crafted to spark your curiosity and fuel your passions...')

    const callToActionButton = getByText('Discover');
    expect(callToActionButton).toBeInTheDocument();

    const secondaryButton = getByText('Blogs');
    expect(secondaryButton).toBeInTheDocument();

    const image = getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toBeVisible()
    expect(image).toHaveAttribute('alt', 'Hero Image')
    
    const link = getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/example')
})