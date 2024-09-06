import About from "@/components/landing/about";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";


test('Landing Page About Component Image Test', () => {
    const { getByRole } = render(<About />);

    const image = getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'About Image');
    expect(image).toBeVisible();
});

test('Landing Page About Component Heading Test', () => {
    const { getByRole } = render(<About />);

    const heading = getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toMatch("Stay ahead of the curve with our IT insights. Dive into the latest trends, tutorials, and expert opinions on everything from coding to cybersecurity. Whether you're a seasoned professional or a tech enthusiast, our content is designed to keep you informed and inspired.")
})