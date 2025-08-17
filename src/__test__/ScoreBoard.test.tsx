import { render, screen } from "@testing-library/react";
import ScoreBoard from "@/component/ScoreBoard";

describe("ScoreBoard component", () => {
    it("renders the correct score", () => {
        render(<ScoreBoard score={0} />);
        const scoreEl = screen.getByTestId("score");
        expect(scoreEl).toHaveTextContent("Score: 0");
    });

    it("updates score when props change", () => {
        const { rerender } = render(<ScoreBoard score={5} />);
        expect(screen.getByTestId("score")).toHaveTextContent("Score: 5");
        rerender(<ScoreBoard score={10} />);
        expect(screen.getByTestId("score")).toHaveTextContent("Score: 10");
    });
});