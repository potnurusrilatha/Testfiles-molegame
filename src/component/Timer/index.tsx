import { TimerProps } from "@/utils/types"

const Timer = ({timeLeft }: TimerProps) => {
    return (
        <div 
            data-testid="timer"
            className="text-center font-semibold text-xl mt-4">
                Time: {timeLeft}s
            </div>
    )
}

export default Timer;