'use client';

import { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-12-25T10:00:00') - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map(interval => {
    if (!timeLeft[interval as keyof typeof timeLeft] && timeLeft[interval as keyof typeof timeLeft] !== 0) {
      return null;
    }

    return (
      <div key={interval} className="flex flex-col items-center">
        <div className="text-4xl md:text-6xl font-bold text-white bg-white/10 p-4 rounded-lg shadow-inner w-24 h-24 flex items-center justify-center">
          {String(timeLeft[interval as keyof typeof timeLeft]).padStart(2, '0')}
        </div>
        <div className="mt-2 text-sm md:text-lg font-medium uppercase tracking-wider text-muted-foreground">{interval}</div>
      </div>
    );
  });

  return (
    <div className="flex justify-center space-x-4 md:space-x-8">
      {timerComponents.length ? timerComponents : <span>Event has started!</span>}
    </div>
  );
};

export default Countdown;
