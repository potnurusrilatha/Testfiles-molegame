// File: src/component/GameBoard.tsx
import React, { useEffect, useState } from "react";
import Mole from "@/component/Mole";

interface GameBoardProps {
  gameRunning: boolean;
  incrementScore: () => void;
}

export default function GameBoard({ gameRunning, incrementScore }: GameBoardProps) {
  const [holes, setHoles] = useState<(boolean | null)[]>(Array(9).fill(null));

  useEffect(() => {
    if (!gameRunning) {
      setHoles(Array(9).fill(null));
      return;
    }

    const interval = setInterval(() => {
      const newHoles = Array(9).fill(null);
      const moleCount = Math.floor(Math.random() * 3) + 1; // 1-3 moles
      const molePositions = new Set<number>();
      while (molePositions.size < moleCount) {
        molePositions.add(Math.floor(Math.random() * 9));
      }
      molePositions.forEach((pos) => {
        newHoles[pos] = true;
      });
      setHoles(newHoles);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameRunning]);

  return (
    <div className="grid grid-cols-3 gap-4 w-64 mx-auto mt-4">
      {holes.map((hasMole, index) => (
        <div
          key={index}
          data-testid="hole"
          className="w-16 h-16 border border-gray-400 flex items-center justify-center"
          onClick={() => {
            if (hasMole) incrementScore();
          }}
        >
          {hasMole && (
            <Mole onClick={() => incrementScore()} />
          )}
        </div>
      ))}
    </div>
  );
}
