"use client";
import React, { useState, useEffect } from "react";
import GameBoard from "@/component/GameBoard";

export default function Home() {
  const [gameRunning, setGameRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (gameRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    }

    if (timeLeft === 0) {
      setGameRunning(false);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameRunning, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameRunning(true);
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameRunning(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1>Whack-a-Mole</h1>
      <div data-testid="score">Score: {score}</div>
      <div data-testid="timer">Time: {timeLeft}s</div>

      <div data-testid="gameboard">
        <GameBoard
          gameRunning={gameRunning}
          incrementScore={() => setScore((s) => s + 1)}
        />
      </div>

      <div data-testid="controlpanel" className="flex gap-2">
        {!gameRunning && (
          <button data-testid="start-btn" onClick={startGame}>
            Start
          </button>
        )}
        <button data-testid="reset-btn" onClick={resetGame}>
          Reset
        </button>
      </div>
    </div>
  );
}
