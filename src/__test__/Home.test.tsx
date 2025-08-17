import { render, screen, fireEvent, act } from "@testing-library/react";
import Home from "@/app/page";

jest.useFakeTimers();

describe("Home Page - Whack-a-Mole", () => {
    describe("Unit Tests", () => {
        it("renders the main components: heading, score, timer, gameboard, and control panel", () => {
            render(<Home />);
            expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
            expect(screen.getByTestId("score")).toBeInTheDocument();
            expect(screen.getByTestId("timer")).toBeInTheDocument();
            expect(screen.getByTestId("gameboard")).toBeInTheDocument();
            expect(screen.getByTestId("controlpanel")).toBeInTheDocument();
        });

        it("displays initial score as 0 and timer as 30s", () => {
            render(<Home />);
            expect(screen.getByTestId("score")).toHaveTextContent("Score: 0");
            expect(screen.getByTestId("timer")).toHaveTextContent("Time: 30s");
        });

        it("renders ScoreBoard, Timer, GameBoard, and ControlPanel with correct defaults", () => {
            render(<Home />);
            expect(screen.getByTestId("score")).toHaveTextContent("Score: 0");
            expect(screen.getByTestId("timer")).toHaveTextContent("Time: 30s");
            expect(screen.getAllByTestId("hole").length).toBe(9);
            expect(screen.getByTestId("start-btn")).toBeInTheDocument();
            expect(screen.getByTestId("reset-btn")).toBeInTheDocument();
        });
    });

    //Integration Tests
    describe("Integration Tests", () => {
        it("starts game and shows moles after clicking Start", () => {
            render(<Home />);
            expect(screen.queryAllByTestId("mole").length).toBe(0);

            fireEvent.click(screen.getByTestId("start-btn"));

            act(() => {
                jest.advanceTimersByTime(1000);
            });

            expect(screen.queryAllByTestId("mole").length).toBeGreaterThan(0);
        });

        it("increments score when a mole(image) is clicked", () => {
            render(<Home />);
            fireEvent.click(screen.getByTestId("start-btn"));

            act(() => {
                jest.advanceTimersByTime(1000);
            });

            const mole = screen.queryAllByTestId("mole")[0];
            expect(mole).toBeInTheDocument();

            fireEvent.click(mole.parentElement!);
            expect(screen.getByTestId("score")).toHaveTextContent("Score: 1");
        });

        it("resets score, timer, and stops game when Reset is clicked", () => {
            render(<Home />);
            fireEvent.click(screen.getByTestId("start-btn"));

            act(() => {
                jest.advanceTimersByTime(1000);
            });

            fireEvent.click(screen.getByTestId("reset-btn"));

            expect(screen.getByTestId("score")).toHaveTextContent("Score: 0");
            expect(screen.getByTestId("timer")).toHaveTextContent("Time: 30s");
            expect(screen.queryAllByTestId("mole").length).toBe(0);
        });

        it("decreases the timer every second while the game is running", () => {
            render(<Home />);
            fireEvent.click(screen.getByTestId("start-btn"));

            act(() => {
                jest.advanceTimersByTime(2000);
            });

            expect(screen.getByTestId("timer")).toHaveTextContent("Time: 28s");
        });

        it("stops the game and remove all moles(images) when the timer reaches 0", () => {
            render(<Home />);
            fireEvent.click(screen.getByTestId("start-btn"));

            act(() => {
                jest.advanceTimersByTime(30000);
            });

            expect(screen.getByTestId("timer")).toHaveTextContent("Time: 0s");

            act(() => {
                jest.advanceTimersByTime(1000);
            });

            expect(screen.queryAllByTestId("mole").length).toBe(0);
        });
    });
});
