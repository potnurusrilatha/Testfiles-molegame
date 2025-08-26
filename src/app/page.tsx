'use client'
import Header from "@/component/Header";
import GameBoard from "@/component/GameBoard";
import ScoreBoard from "@/component/ScoreBoard";
import Timer from "@/component/Timer";
import ControlPanel from "@/component/ControlPanel";
import { useEffect, useState } from "react";
import Footer from "@/component/Footer";

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

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameRunning, timeLeft]);

  return (
    <div className=" min-h-screen flex flex-col  text-center ">
      <Header />
      <ScoreBoard score={score} />
      <Timer timeLeft={timeLeft} />
      <main className="flex-grow p-4">
        <GameBoard
          gameRunning={gameRunning}
          incrementScore={() => setScore(score + 1)}
        />

        <ControlPanel
          start={() => {
            setScore(0);
            setTimeLeft(30);
            setGameRunning(true);
          }}
          reset={() => {
            setScore(0);
            setTimeLeft(30);
            setGameRunning(false);
          }}
        />
      </main>
      <Footer />
    </div>
  );
}