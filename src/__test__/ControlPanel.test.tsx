import { render, screen, fireEvent } from "@testing-library/react";
import ControlPanel from "@/component/ControlPanel";

describe("ControlPanel component", () => {
    it("renders Start and Reset buttons with correct labels", () => {
        render(<ControlPanel start={jest.fn()} reset={jest.fn()} />);
        expect(screen.getByTestId("start-btn")).toBeInTheDocument();
        expect(screen.getByTestId("reset-btn")).toBeInTheDocument();

        expect(screen.getByTestId("start-btn")).toHaveTextContent(/start/i);
        expect(screen.getByTestId("reset-btn")).toHaveTextContent(/reset/i);
    });

    it("calls the start callback when Start button is clicked", () => {
        const startMock = jest.fn();
        render(<ControlPanel start={startMock} reset={jest.fn()} />);

        fireEvent.click(screen.getByTestId("start-btn"));
        expect(startMock).toHaveBeenCalledTimes(1);
    });

    it("calls the reset callback when Reset button is clicked", () => {
        const resetMock = jest.fn();
        render(<ControlPanel start={jest.fn()} reset={resetMock} />);

        fireEvent.click(screen.getByTestId("reset-btn"));
        expect(resetMock).toHaveBeenCalledTimes(1);
    });
});