import { useEffect, useRef, useState } from "react";
import "./App.css";
import EggSelector from "./components/EggSelector";
import Timer from "./components/Timer";
import { eggTypes } from "./types/eggTypes";
import EggInformations from "./components/EggInformations";
import { playBeep } from "./utils/audio";
import Footer from "./components/Footer";

const TOTAL_SECONDS = 9 * 60; // 540 seconds

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [timeUp, setTimeUp] = useState(false);

  const [currentEggIndex, setCurrentEggIndex] = useState(0);
  const currentEgg = eggTypes[currentEggIndex];
  const currentEggTotalSeconds = currentEgg.time * 60;

  const offsetSeconds = Math.max(0, TOTAL_SECONDS - currentEggTotalSeconds);
  const fractionElapsed = (offsetSeconds + elapsed) / TOTAL_SECONDS;

  // Handle click on the circle: start or reset the timer
  const handleCircleClick = () => {
    if (isRunning) {
      // Reset timer
      setElapsed(0);
      setIsRunning(false);
    } else if (timeUp) {
      // Start timer when time is up
      setElapsed(0);
      setTimeUp(false);
    } else {
      // Start timer
      setElapsed(0);
      setIsRunning(true);
    }
  };

  // Increment time while running
  useEffect(() => {
    if (!isRunning) return;
    if (elapsed >= currentEggTotalSeconds) {
      setIsRunning(false);
      setTimeUp(true);
      return;
    }

    const interval = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + 1;
        if (next >= currentEggTotalSeconds) {
          setIsRunning(false);
          setTimeUp(true);
          return currentEggTotalSeconds;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [elapsed, currentEggTotalSeconds, isRunning, setIsRunning]);

  // Play the alarm sound when time is up
  const alarmIntervalRef = useRef<number | null>(null);
  useEffect(() => {
    if (timeUp) {
      playBeep();
      alarmIntervalRef.current = window.setInterval(() => {
        playBeep();
      }, 3000);
    } else {
      // timeUp false => stop the alarm
      if (alarmIntervalRef.current) {
        clearInterval(alarmIntervalRef.current);
        alarmIntervalRef.current = null;
      }
    }
    return () => {
      if (alarmIntervalRef.current) {
        clearInterval(alarmIntervalRef.current);
        alarmIntervalRef.current = null;
      }
    };
  }, [timeUp]);

  const handleEggTypeUp = () => {
    if (isRunning) return;
    setCurrentEggIndex((prev) => (prev + 1) % eggTypes.length);
  };

  const handleEggTypeDown = () => {
    if (isRunning) return;
    setCurrentEggIndex(
      (prev) => (prev - 1 + eggTypes.length) % eggTypes.length
    );
  };
  return (
    <div className="flex items-center justify-between flex-col h-full gap-10">
      <div className="flex items-center justify-center">
        <div className="relative inline-block">
          <h1
            className="font-title text-8xl font-normal absolute top-1 left-1 text-hay-500 pointer-events-none select-none z-0"
            aria-hidden="true"
          >
            Yolk
          </h1>
          <h1 className="font-title text-8xl font-normal text-yolk-500 relative z-10 pointer-events-none select-none">
            Yolk
          </h1>
        </div>
      </div>
      <Timer
        currentEggTotalSeconds={currentEggTotalSeconds}
        isRunning={isRunning}
        elapsed={elapsed}
        timeUp={timeUp}
        fractionElapsed={fractionElapsed}
        onCircleClick={handleCircleClick}
      />
      <div className="w-full lg:w-3/4">
        <hr
          className="
            w-full
            my-4
            border-1
            bg-dark-500)]
          "
        />
        <EggSelector
          currentEgg={currentEgg}
          handleEggTypeUp={handleEggTypeUp}
          handleEggTypeDown={handleEggTypeDown}
          isRunning={isRunning}
        />
        <hr
          className="
            w-full
            my-4
            border-1
            bg-dark-500)]
          "
        />
        <EggInformations goodWith={currentEgg.goodWith} />
        <hr
          className="
            w-full
            my-4
            border-8
            bg-dark-500)]
          "
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
