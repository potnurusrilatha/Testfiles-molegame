
export type HoleTypeProps = {
  value: string | null; 
}

export type GameBoardProps = {
  gameRunning: boolean;
  incrementScore: () => void;
}

export type MoleProps = {
    onClick: () => void;
}

export type ScoreBoardProps = {
  score: number;
}
export type FooterProps = {
    developer?: string;
    version?: string;
}