'use client';

import React, { useState, useEffect } from "react";
import ScoreBoard from "@/component/ScoreBoard";
import Timer from "@/component/Timer";
import GameBoard from "@/component/GameBoard";
import ControlPanel from "@/component/ControlPanel";

export default function Home() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameRunning, setGameRunning] = useState(false);

 
  useEffect(() => {
    if (!gameRunning) return;

    if (timeLeft <= 0) {
      setGameRunning(false);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
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

  const incrementScore = () => {
    setScore((prev) => prev + 1);
  };

  return (
    <main className="p-4 text-center">
      <h1 className="text-center font-bold text-3xl mb-4">Whack a Mole</h1>

      <ScoreBoard score={score} />
      <Timer timeLeft={timeLeft} />

      <div data-testid="gameboard">
        <GameBoard gameRunning={gameRunning} incrementScore={incrementScore} />
      </div>

      <div data-testid="controlpanel" className="mt-4">
        <ControlPanel start={startGame} reset={resetGame} />
      </div>
    </main>
  );
}
