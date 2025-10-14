import React, { useState, useEffect, useCallback } from 'react';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import { Calendar } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilNewYear());

  const updateTimeLeft = useCallback(() => {
    setTimeLeft(getTimeUntilNewYear());
  }, []);

  useEffect(() => {
    const timer = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [updateTimeLeft]);

  function getTimeUntilNewYear() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const difference = newYear.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white flex flex-col items-center justify-center p-4" role="main">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent" id="main-heading">
        New Year Countdown
      </h1>
      <Calendar className="w-16 h-16 mb-8 text-yellow-400" aria-hidden="true" />
      <Countdown timeLeft={timeLeft} />
      <Footer />
    </div>
  );
}

export default App;