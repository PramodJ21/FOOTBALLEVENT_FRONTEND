import React, { useEffect, useState } from "react";
import "./Countdown.css";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const target = new Date("2025-05-07T00:00:00+05:30"); // 12:00 AM IST
    const now = new Date();
    const difference = target - now;

    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <span>{timeLeft.days} : </span>
      <span>{timeLeft.hours} : </span>
      <span>{timeLeft.minutes} : </span>
      <span>{timeLeft.seconds}</span>
    </div>
  );
};

export default CountdownTimer;
