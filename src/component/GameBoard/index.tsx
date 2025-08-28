import { useEffect, useState } from 'react';
import { GameBoardProps, HoleTypeProps } from '@/utils/types';
import { GameImages } from '@/data/images';

const GameBoard = ({ gameRunning, incrementScore }: GameBoardProps) => {
  const [holesState, setHolesState] = useState<HoleTypeProps[]>(
    Array(9).fill({ value: null }) 
  );

  useEffect(() => {
    if (!gameRunning) {
      setHolesState(Array(9).fill({ value: null }));
      return;
    }

    const interval = setInterval(() => {
      const indexes = Array.from({ length: 9 }, (_, i) => i);
      const shuffled = indexes.sort(() => 0.5 - Math.random());
      const activeIndexes = shuffled.slice(0, 3); 

      const newHoles: HoleTypeProps[] = holesState.map((_, idx) => {
        if (activeIndexes.includes(idx)) {
          return { value: GameImages[Math.floor(Math.random() * GameImages.length)] };
        }
        return { value: null };
      });

      setHolesState(newHoles);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameRunning]);

  const handleClick = (idx: number) => {
    if (!holesState[idx].value) return; 

    incrementScore();

  
    const newHoles = [...holesState];
    newHoles[idx] = { value: GameImages[Math.floor(Math.random() * GameImages.length)] };
    setHolesState(newHoles);
  };

  return (
    <div data-testid="gameboard" className="max-w-xl grid grid-cols-3 gap-8 my-6 mx-auto">
      {holesState.map((hole, idx) => (
        <div
          key={idx}
          data-testid="hole"
          className={`w-20 h-20 rounded-4xl flex items-center justify-center cursor-pointer bg-gray-300`}
          onClick={() => handleClick(idx)}
        >
          {hole.value && (
            <img
              src={hole.value}
              alt="mole"
              data-testid="mole"
              className="w-full h-full object-cover rounded-4xl"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;