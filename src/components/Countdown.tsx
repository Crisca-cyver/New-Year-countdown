import React from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  timeLeft: TimeLeft;
}

const Countdown: React.FC<CountdownProps> = ({ timeLeft }) => {
  const weeksRemaining = Math.floor(timeLeft.days / 7);

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4 md:space-x-8 mb-8">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="text-4xl md:text-6xl font-bold bg-white bg-opacity-20 rounded-lg p-4 mb-2">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base uppercase">{unit}</div>
          </div>
        ))}
      </div>
      <div className="text-xl md:text-2xl font-semibold">
        {weeksRemaining} {weeksRemaining === 1 ? 'week' : 'weeks'} until New Year's Eve
      </div>
    </div>
  );
};

export default Countdown;