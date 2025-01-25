// Timer.tsx
import React, { useEffect } from "react";
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
  // Listen for space key press to start/stop timer
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault();
        onCircleClick();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onCircleClick]);
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
