import { useEffect, useRef, useState } from "react";

export const useMotion = (time = 500, styles = {}) => {
  const [style, setStyle] = useState({
    opacity: 0,
    transtion: "all .2s",
    ...styles,
  });

  const intervalStyle = useRef();

  useEffect(() => {
    clearTimeout(intervalStyle.current);
    intervalStyle.current = setTimeout(() => {
      setStyle({ opacity: 1 });
    }, time);

    return () => {
      clearTimeout(intervalStyle.current);
    };
  }, []);

  return { style };
};
