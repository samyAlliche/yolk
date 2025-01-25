// Timer.tsx
import React from "react";
import CircularCountdown from "./CircularCountdown";

interface TimerProps {
  currentEggTotalSeconds: number;
  fractionElapsed: number;
  elapsed: number;
  timeUp: boolean;
  isRunning: boolean;
  onCircleClick: () => void;
}

const Timer: React.FC<TimerProps> = ({
  currentEggTotalSeconds,
  isRunning,
  elapsed,
  timeUp,
  fractionElapsed,
  onCircleClick,
}) => {
  return (
    <div className="flex items-center justify-center">
      <CircularCountdown
        fractionElapsed={fractionElapsed}
        remaining={currentEggTotalSeconds - elapsed}
        onCircleClick={onCircleClick}
        isRunning={isRunning}
        timeUp={timeUp}
      />
    </div>
  );
};

export default Timer;
