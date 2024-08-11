import { useState } from "react";
import { useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date().toDateString());
  function formatTime() {
    const date = new Date();
    let hours = date.getHours();
    let AM_PM;
    AM_PM = hours > 12 ? "PM" : "AM";
    hours = hours > 12 ? hours % 12 : hours;

    return { hours, AM_PM };
  }
  const [time, setTime] = useState({
    seconds: new Date().getSeconds(),
    hours: formatTime().hours,
    minutes: new Date().getMinutes(),
  });
  useEffect(() => {
    const intervel = setInterval(() => {
      setDate(() => new Date().toDateString());
      setTime(() => ({
        seconds: new Date().getSeconds(),
        hours: formatTime().hours,
        minutes: new Date().getMinutes(),
      }));
    }, 1000);
    return () => {
      clearInterval(intervel);
    };
  }, []);

  return (
    <div>
      <p className="text-xl">
        time:{time.hours < 10 ? `0${time.hours}` : time.hours}:
        {time.minutes < 10 ? `0${time.minutes}` : time.minutes}:
        {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
        {formatTime().AM_PM}
      </p>
      <p>date:{date} </p>
    </div>
  );
};

export default Clock;
