import { render, screen, fireEvent, act } from "@testing-library/react";
import GameBoard from "@/component/GameBoard";

jest.useFakeTimers();

describe("GameBoard component Unit Tests", () => {
    it("renders 9 holes", () => {
        render(<GameBoard gameRunning={false} incrementScore={jest.fn()} />);
        const holes = screen.getAllByTestId("hole");
        expect(holes.length).toBe(9);
    });

    it("displays up to 3 moles when game is running", () => {
        render(<GameBoard gameRunning={true} incrementScore={jest.fn()} />);

        act(() => {
            jest.advanceTimersByTime(1000);
        });

        const moles = screen.queryAllByTestId("mole");
        expect(moles.length).toBeGreaterThan(0);
        expect(moles.length).toBeLessThanOrEqual(3);
    });

    it("renders mole images with correct attributes", () => {
        render(<GameBoard gameRunning={true} incrementScore={jest.fn()} />);

        act(() => {
            jest.advanceTimersByTime(1000);
        });

        const moles = screen.getAllByTestId("mole") as HTMLImageElement[];

        moles.forEach((mole) => {
            expect(mole.tagName).toBe("IMG");
            expect(mole.alt).toBe("mole");
            expect(mole.src).not.toBe("");
        });
    });
});



describe("GameBoard Integration Tests", () => {
    it("increments score when a mole is clicked", () => {
        const incrementScore = jest.fn();
        render(<GameBoard gameRunning={true} incrementScore={incrementScore} />);

        act(() => {
            jest.advanceTimersByTime(1000);
        });

        const mole = screen.queryAllByTestId("mole")[0];
        fireEvent.click(mole.parentElement!);
        expect(incrementScore).toHaveBeenCalledTimes(1);
    });

    it("does not increment score when clicking an empty hole", () => {
        const incrementScore = jest.fn();
        render(<GameBoard gameRunning={true} incrementScore={incrementScore} />);

        act(() => {
            jest.advanceTimersByTime(1000);
        });

        const holes = screen.getAllByTestId("hole");
        const emptyHole = holes.find((h) => !h.querySelector("[data-testid='mole']"));
        if (emptyHole) {
            fireEvent.click(emptyHole);
            expect(incrementScore).not.toHaveBeenCalled();
        }
    });

    it("resets all moles when the game stops", () => {
        const { rerender } = render(
            <GameBoard gameRunning={true} incrementScore={jest.fn()} />
        );

        act(() => {
            jest.advanceTimersByTime(1000);
        });

        expect(screen.queryAllByTestId("mole").length).toBeGreaterThan(0);

        rerender(<GameBoard gameRunning={false} incrementScore={jest.fn()} />);
        expect(screen.queryAllByTestId("mole").length).toBe(0);
    });
});
