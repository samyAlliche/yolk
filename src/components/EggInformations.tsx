import React from "react";

interface EggInformationsProps {
  goodWith: string;
}

const EggInformations: React.FC<EggInformationsProps> = ({ goodWith }) => {
  return (
    <div className="flex justify-start w-full">
      <p>good with: {goodWith}</p>
    </div>
  );
};

export default EggInformations;
