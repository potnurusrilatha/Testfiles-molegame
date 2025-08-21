const Timer = ({timeLeft=0}) => {
    return (
        <div 
            data-testid="timer"
            className="text-center font-semibold text-lg mt-4">
                Time: {timeLeft}s
            </div>
    )
}

export default Timer;