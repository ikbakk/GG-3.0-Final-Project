import { useEffect, useState } from "react";

const useTimeAgo = (timestamp: string): string => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentTime = new Date();
      const pastTime = new Date(timestamp);
      const elapsedMilliseconds = currentTime.getTime() - pastTime.getTime();

      const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
      const elapsedMinutes = Math.floor(elapsedSeconds / 60);
      const elapsedHours = Math.floor(elapsedMinutes / 60);
      const elapsedDays = Math.floor(elapsedHours / 24);

      if (elapsedDays > 0) {
        setTimeAgo(`${elapsedDays} day${elapsedDays > 1 ? "s" : ""} ago`);
      } else if (elapsedHours > 0) {
        setTimeAgo(`${elapsedHours} hour${elapsedHours > 1 ? "s" : ""} ago`);
      } else if (elapsedMinutes > 0) {
        setTimeAgo(
          `${elapsedMinutes} minute${elapsedMinutes > 1 ? "s" : ""} ago`,
        );
      } else {
        setTimeAgo(
          `${elapsedSeconds} second${elapsedSeconds !== 1 ? "s" : ""} ago`,
        );
      }
    };

    calculateTimeAgo();

    const interval = setInterval(calculateTimeAgo, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [timestamp]);

  return timeAgo;
};

export default useTimeAgo;
