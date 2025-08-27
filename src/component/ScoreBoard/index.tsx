import { ScoreBoardProps } from "@/utils/types"

const ScoreBoard = ({ score }:ScoreBoardProps) => {
    return (
        <div data-testid="score" className="text-center font-semibold text-lg mt-4">
            <p>Score: {score}</p>
        </div>

    )
}
export default ScoreBoard;