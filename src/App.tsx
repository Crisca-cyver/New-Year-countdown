import React, { useState, useEffect } from 'react';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import { Calendar } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilNewYear());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilNewYear());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeUntilNewYear() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const difference = newYear.getTime() - now.getTime();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
        New Year Countdown
      </h1>
      <Calendar className="w-16 h-16 mb-8 text-blue-400" />
      <Countdown timeLeft={timeLeft} />
      <Footer />
    </div>
  );
}

export default App;