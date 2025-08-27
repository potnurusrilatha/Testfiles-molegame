export type HoleTypeProps = {
  value: string | null; 
};
export type GameBoardProps = {
  gameRunning: boolean;
  incrementScore: () => void;
}

export interface MoleProps  {
    onClick: () => void;
};