import { Skeleton } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function LoaderHeroSection() {
  const largerMidScreen = useMediaQuery('(min-width: 64em)');

  return (
    <>
      <Skeleton
        bg="blue"
        color="green"
        height={8}
        mt="50px"
        width={largerMidScreen ? '70%' : '100%'}
        radius="xl"
      />
      <Skeleton
        height={8}
        mt="50px"
        width={largerMidScreen ? '30%' : '90%'}
        mx={!largerMidScreen && 'auto'}
        radius="xl"
      />
      <Skeleton
        height={40}
        mt="50px"
        mx={!largerMidScreen && 'auto'}
        width={120}
        radius="50px"
      />
    </>
  );
}
