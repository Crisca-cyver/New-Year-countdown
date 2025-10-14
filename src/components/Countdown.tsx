import React, { memo } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  timeLeft: TimeLeft;
}

const Countdown: React.FC<CountdownProps> = memo(({ timeLeft }) => {
  const weeksRemaining = Math.floor(timeLeft.days / 7);

  return (
    <div className="flex flex-col items-center" role="timer" aria-live="polite" aria-atomic="true">
      <div className="flex space-x-4 md:space-x-8 mb-8">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div
              className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 mb-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
              aria-label={`${value} ${unit}`}
            >
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base uppercase text-gray-300 font-medium" aria-hidden="true">{unit}</div>
          </div>
        ))}
      </div>
      <div className="text-xl md:text-2xl font-semibold text-yellow-400" aria-label={`Approximately ${weeksRemaining} weeks until New Year's Eve`}>
        {weeksRemaining} {weeksRemaining === 1 ? 'week' : 'weeks'} until New Year's Eve
      </div>
    </div>
  );
});

export default Countdown;