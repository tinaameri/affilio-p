import React from 'react';
import Layout from '@/components/LayoutComponent';
import Heading from '@/components/Heading';
// import Image from 'next/image'
import { useMediaQuery } from '@mantine/hooks';
import { Grid, Image, Container } from '@mantine/core';

export default function Campaign({
  heading_title,
  image_mobile,
  image_desktop,
}) {
  const smallerSmallScreen = useMediaQuery('(max-width: 37.5em)'); //(max-600)md green

  return (
    <Container bg="#FDFDFD" fluid="fluid" pb="xl">
      <Layout>
        <Heading title={heading_title} />
        <Grid.Col
          sx={12}
          pos="relative"
          mih="300px"
          px={smallerSmallScreen && '100px'}
        >
          <Image
            src={smallerSmallScreen ? image_mobile : image_desktop}
            width="100%"
            alt={heading_title}
          />
          {/* <Image src={smallerSmallScreen ? mobileImg : desktopImg} layout='fill' objectFit='contain' /> */}
        </Grid.Col>
      </Layout>
    </Container>
  );
}
