import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { Flex } from '@mantine/core';

const LoadingScreen = () => {
  return (
    <Flex bg="white" h="100vh" justify="center" align="center">
      <DotLottiePlayer
        autoplay
        loop
        mode="normal"
        src="/assets/animations/Logo animation.lottie"
        style={{ height: '300px', width: '300px' }}
      ></DotLottiePlayer>
    </Flex>
  );
};
export default LoadingScreen;
