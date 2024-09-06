import TrendCard from "@/components/landing/trend-card";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import AboutImage from '@/../public/landing-page-about.webp';

const cardData = {
    title: 'Async Programming in Javascript',
    content: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, error velit sequi amet iste nam illo autem nemo commodi aspernatur!",
    image: AboutImage
}

test('Landing Page Trend Card Heading Test', () => {
    const { getByRole } = render(<TrendCard data={cardData} />);

    const heading = getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toMatch('Async Programming in Javascript');
})

test('Landing Page Trend Card Image Test', () => {
    const { getByRole } = render(<TrendCard data={cardData} />);

    const image = getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('alt', 'Blog Image');
})

test('Landing Page Trend Card Link Test', () => {
    const { getByRole } = render(<TrendCard data={cardData} />);

    const link = getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', '/example');
})