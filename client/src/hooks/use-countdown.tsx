import { useState, useEffect } from "react";

interface CountdownTime {
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(initialHours: number = 23, initialMinutes: number = 45, initialSeconds: number = 30) {
  const [time, setTime] = useState<CountdownTime>({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset to initial values when countdown reaches zero
          hours = initialHours;
          minutes = initialMinutes;
          seconds = initialSeconds;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialHours, initialMinutes, initialSeconds]);

  return time;
}
