import { useState, useEffect } from "react";
import "./EventCountdown.css";

const EventCountdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const eventDate = new Date(targetDate);
    const now = new Date();
    const distance = eventDate - now;

    if (!targetDate || isNaN(eventDate) || distance <= 0) {
      return null;
    }

    return {
      days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((distance / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="event-countdown">
      <h3>Next School Event</h3>

      {timeLeft ? (
        <div className="timer">
          <span>{timeLeft.days}d</span>
          <span>{timeLeft.hours}h</span>
          <span>{timeLeft.minutes}m</span>
          <span>{timeLeft.seconds}s</span>
        </div>
      ) : (
        <div className="event-started">🎉 Event Started!</div>
      )}
    </div>
  );
};

export default EventCountdown;
