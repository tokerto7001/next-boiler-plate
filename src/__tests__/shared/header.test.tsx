import Header from "@/components/shared/header";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";


test('Shared Header Switch Container Test', () => {
    const { getByTestId } = render(<Header />);

    const switchContainer = getByTestId('switchContainer');
    expect(switchContainer).toBeInTheDocument();
})