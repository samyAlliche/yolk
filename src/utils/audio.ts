export const playBeep = () => {
  const audio = new Audio("/alarm.mp3");
  audio.play().catch((err) => {
    console.error("Failed to play alarm sound:", err);
  });
};
