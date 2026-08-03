export const formatTime = (totalSec) => {
  if (!totalSec || totalSec <= 0) return "00:00";

  const hour = Math.floor(totalSec / 3600);
  const minute = Math.floor((totalSec % 3600) / 60);
  const second = totalSec % 60;

  const pad = (n) => String(n).padStart(2, '0');

  if (hour > 0) return `${pad(hour)}:${pad(minute)}:${pad(second)}`; 
  if (minute > 0) return `${pad(minute)}:${pad(second)}`;          
  return `${pad(second)}s`;                              
};
