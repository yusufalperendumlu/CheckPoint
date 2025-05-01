import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  duration?: number; // optional duration in ms
}

const AnimatedCounter = ({ target, duration = 1000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 10); // approx 60fps

    const step = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{count}</span>;
};

export default AnimatedCounter;
