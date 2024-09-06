import DarkModeSwitch from "@/components/shared/dark-mode-switch";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";


test('Shared Dark Mode Switch Svg Test', () => {
    const { getAllByRole} = render(<DarkModeSwitch />);

    const icons = getAllByRole('img');
    expect(icons).toHaveLength(2);
})