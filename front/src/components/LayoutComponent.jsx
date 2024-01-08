import React from 'react';
import { Container, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function Layout({
  children,
  bgLayout,
  fluid,
  align,
  className,
  py,
  my,
  pt,
  pb,
  mt,
  mih,
  display,
  bgColor,
  sx,
}) {
  const midScreen = useMediaQuery('(max-width: 64em) and (min-width: 37.5em)');

  return (
    <Container
      display={display}
      bg={bgLayout}
      fluid={fluid}
      size={midScreen ? 'md' : 'xl'}
      h="100%"
      pos="relative"
      mt={mt}
      my={my}
      sx={{ zIndex: '3' }}
    >
      <Grid
        gutter="xl"
        align={align}
        className={className}
        bg={bgColor}
        h="100%"
        pos="relative"
        sx={sx}
        mih={mih}
        px={{ md: 'sm', sm: '0' }}
        py={py}
        pt={pt}
        pb={pb}
      >
        {children}
      </Grid>
    </Container>
  );
}
