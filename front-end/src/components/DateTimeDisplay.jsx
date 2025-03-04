import React, { useEffect, useState } from "react";

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };
  const formatTime = (time) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return time.toLocaleTimeString(undefined, options);
  };
  return (
    <div className>
      <p className="text-center">{formatDate(currentTime)}</p>
      <p className="text-center">{formatTime(currentTime)}</p>
    </div>
  );
};

export default DateTimeDisplay;
