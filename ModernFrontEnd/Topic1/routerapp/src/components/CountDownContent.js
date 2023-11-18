import React from "react";
import { useCountdown } from "../hooks/useCountdown";

const CountDownContent = () => {
  const { count } = useCountdown(20);

  return <div>CountDownContent :{count}</div>;
};

export default CountDownContent;
