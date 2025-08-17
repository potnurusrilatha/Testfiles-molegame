import { render, screen } from "@testing-library/react";
import Timer from "@/component/Timer";

describe("Timer component", () => {
    it("renders the correct time left", () => {
        render(<Timer timeLeft={15} />);
        const timerEl = screen.getByTestId("timer");
        expect(timerEl).toHaveTextContent("Time: 15s");
    });

    it("updates when props change", () => {
        const { rerender } = render(<Timer timeLeft={10} />);
        expect(screen.getByTestId("timer")).toHaveTextContent("Time: 10s");
        rerender(<Timer timeLeft={5} />);
        expect(screen.getByTestId("timer")).toHaveTextContent("Time: 5s");
    });
});