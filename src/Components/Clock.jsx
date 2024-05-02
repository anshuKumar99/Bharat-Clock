import { useEffect } from "react";
import { useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="fs-2 text-success">
      Current Time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
  );
}

export default Clock;
