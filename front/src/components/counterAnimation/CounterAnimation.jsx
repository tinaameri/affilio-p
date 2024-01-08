import React, { useState, useEffect } from 'react';
import classes from '@/components/counterAnimation/CounterAnimation.module.scss'; // Import your CSS file for styling

const CounterAnimation = () => {
  const [counter, setCounter] = useState(0);
  const targetValue = 100; // Set your target value here
  const duration = 3000; // Set the duration of the animation in milliseconds
  const interval = 10; // Set the update interval in milliseconds

  useEffect(() => {
    const steps = Math.ceil(duration / interval);
    const stepValue = (targetValue - counter) / steps;

    const intervalId = setInterval(() => {
      setCounter((prevCounter) => {
        const newCounter = prevCounter + stepValue;
        return newCounter >= targetValue ? targetValue : newCounter;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [targetValue, duration, interval]);

  return (
    <div className={classes.counterAnimation}>
      <div className={classes.counterValue}>{Math.round(counter)}</div>
    </div>
  );
};

export default CounterAnimation;
