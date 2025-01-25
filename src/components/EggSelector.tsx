import React from "react";
import { EggType } from "../types/eggTypes";

interface EggSelectorProps {
  currentEgg: EggType; // the egg type currently selected
  handleEggTypeUp: () => void; // callback to switch to the next egg type
  handleEggTypeDown: () => void; // callback to switch to the previous egg type
  isRunning: boolean; // whether the timer is currently running
}

const EggSelector: React.FC<EggSelectorProps> = ({
  currentEgg,
  handleEggTypeUp,
  handleEggTypeDown,
  isRunning,
}) => {
  return (
    <div className="flex items-center space-x-2 justify-between w-full">
      <div className="flex flex-col items-start">
        <span className="text-5xl font-bold">{currentEgg.nameFr}</span>
        <span className="text-md">{currentEgg.nameEn}</span>
      </div>

      {/* Up/Down arrow buttons */}
      <div className="flex flex-col text-3xl gap-2">
        <button
          onClick={handleEggTypeUp}
          disabled={isRunning}
          className="hover:text-yolk-500 transition"
        >
          ⬆
        </button>
        <button
          disabled={isRunning}
          onClick={handleEggTypeDown}
          className="hover:text-yolk-500 transition"
        >
          ⬇
        </button>
      </div>
    </div>
  );
};

export default EggSelector;
