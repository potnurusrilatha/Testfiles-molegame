import { render, screen, fireEvent } from "@testing-library/react";
import Mole from "@/component/Mole";

describe("Mole component", () => {
    it("renders a clickable mole button", () => {
        render(<Mole onClick={jest.fn()} />);
        const moleButton = screen.getByTestId("mole");
        expect(moleButton).toBeInTheDocument();
    });

    it("calls the onClick handler when the mole is clicked", () => {
        const handleClick = jest.fn();
        render(<Mole onClick={handleClick} />);

        fireEvent.click(screen.getByTestId("mole"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});