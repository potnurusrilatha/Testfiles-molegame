import React from 'react';

const ScoreBoard = ({ score=0 }) => {
    return (
        <div data-testid="score" className="text-center font-semibold text-lg mt-4">
            <p>score: {score}</p>
        </div>

    )
}
export default ScoreBoard;