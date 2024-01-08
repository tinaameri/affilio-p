import { Text } from '@mantine/core';
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

export default function WordAnimation({ content }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    if (content?.length) {
      const interval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % content?.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [content?.length, currentWordIndex]);

  return (
    <Text component="strong" fw="500" fz="28px">
      <Fade top key={currentWordIndex}>
        {content[currentWordIndex]?.title}
      </Fade>
    </Text>
  );
}
