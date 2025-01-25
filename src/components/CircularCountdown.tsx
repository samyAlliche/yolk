import { formatTime } from "../utils/format";

interface CircularCountdownProps {
  fractionElapsed: number;
  remaining: number;
  onCircleClick: () => void;
  isRunning: boolean;
  timeUp: boolean;
}

const CircularCountdown: React.FC<CircularCountdownProps> = ({
  fractionElapsed,
  remaining,
  onCircleClick,
  isRunning,
  timeUp,
}) => {
  const size = 320;
  const radius = 150;
  const center = size / 2;
  const angle = 360 * fractionElapsed;

  return (
    <svg width={size} height={size} className="block">
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="var(--color-eggwhite-500)"
        strokeWidth="5"
        //stroke="var(--color-eggshell-500)"
      />

      <line
        x1={center}
        y1={center}
        x2={center}
        y2={center - radius}
        stroke={isRunning ? "var(--color-yolk-500)" : "var(--color-dark-500)"}
        strokeWidth="1"
        transform={`rotate(${-angle} ${center} ${center})`}
        strokeLinecap="round"
      />
      <circle
        cx={center}
        cy={center}
        r={radius / 2}
        fill="var(--color-yolk-500)"
        strokeWidth="2"
        onClick={onCircleClick}
        style={{ cursor: "pointer", transformBox: "fill-box" }}
        className={`
        hover:fill-orange-300 
        active:fill-orange-300
        transition-all 
        duration-300 
        ease-in-out
        transform 
        origin-center
        hover:scale-105
        active:scale-105
        ${timeUp ? "animate-yolkPulse" : ""}
        `}
      />
      <text
        x={center + 40}
        y={center - radius + 45}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Helvetica, sans-serif"
        className="text-3xl font-extrabold"
        fill={isRunning ? "var(--color-yolk-500)" : "var(--color-dark-500)"}
        transform={`
            rotate(${-angle} ${center} ${center}) 
            `}
      >
        {formatTime(remaining)}
      </text>
    </svg>
  );
};

export default CircularCountdown;
