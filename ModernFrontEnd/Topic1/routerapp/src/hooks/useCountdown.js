import { useEffect, useRef, useState } from "react";

export const useCountdown = (startTime = 10, options) => {
  const [count, setCount] = useState(startTime);
  const intervalIndex = useRef();

  // const { time } = options ?? {};

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalIndex.current);
    };
  }, []);

  const startInterval = () => {
    clearInterval(intervalIndex.current);
    intervalIndex.current = setInterval(() => {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }, options?.time ?? 1000);
  };

  return { count };
};
