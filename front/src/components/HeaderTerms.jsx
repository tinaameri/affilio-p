import { Flex, Title, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

export default function HeaderTerms({ title, downloadLink }) {
  //   const largerScreen = useMediaQuery('(min-width: 56.25em)');
  //   const smallerScreen = useMediaQuery('(max-width: 56.25em)');

  //   const xLargerScreen = useMediaQuery('(min-width: 88em)');
  //   const largerLgScreen = useMediaQuery('(min-width: 90em)');
  //   const largerMidScreen = useMediaQuery('(min-width: 64em)');
  const largerSmallScreen = useMediaQuery('(min-width: 37.5em)');
  //const largerXsScreen = useMediaQuery('(min-width: 22.5625em)');
  const smallerXsScreen = useMediaQuery('(max-width: 22.5em)');
  const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  //const midScreen = useMediaQuery('(max-width: 64em) and (min-width: 37.5em)');
  // function download() {
  //     const URL = {link}
  //     if (typeof window !== "undefined"){
  //       window.location.href = URL
  //     }
  // }
  return (
    <Flex
      mt={smallerXsScreen ? '66px' : smallerLgScreen ? '80px' : '86px'}
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
      h={largerSmallScreen ? '248px' : '187px'}
      bg="primary.7"
      py="xl"
    >
      <Title
        order={largerSmallScreen ? 1 : 2}
        ta="center"
        px="xs"
        color="primary.1"
      >
        {title}
      </Title>

      <Button
        component="a"
        href={downloadLink}
        color="secondary.0"
        mt="xl"
        download
      >
        {/* <a href={link} download> */}
        Download Page
        {/* </a> */}
      </Button>
    </Flex>
  );
}
