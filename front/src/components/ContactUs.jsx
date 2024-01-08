import { Container, Box, Grid, Text, Image } from '@mantine/core';
// import Image from 'next/image'
//import { content } from 'public/assets/contentJson';
import React from 'react';
import ButtonComponent from './Button';
import Layout from '@/components/LayoutComponent';
import { useMediaQuery } from '@mantine/hooks';

export default function ContactUs({
  bg,
  img,
  description,
  buttonType,
  buttonTitle,
  buttonLink,
  targetBlank,
}) {
  // const contact = content?.contact_us_component
  // const button = content?.contact_us_component?.button[0]
  const largerScreen = useMediaQuery('(min-width:64em)');
  //const smallerXsScreen = useMediaQuery('(max-width: 22.5em)');
  //const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  return (
    <Container fluid bg={bg}>
      <Layout align="flex-end" pt={largerScreen ? '100px' : '50px'}>
        <Grid.Col xs={12} md={12} lg={5} py="0" orderXs={1} orderLg={0}>
          <Box pos="relative" h={largerScreen ? '250px' : '150px'}>
            <Image
              src={img}
              width="100%"
              height={largerScreen ? '250px' : '140px'}
              alt="contact-us"
              fit="contain"
            />
            {/* <Image src={contact?.img} objectFit='contain' layout='fill' /> */}
          </Box>
        </Grid.Col>
        <Grid.Col xs={12} md={12} lg={7} pb={largerScreen ? '110px' : '20px'}>
          <Text component="p" mb="50px">
            {description}
          </Text>
          <ButtonComponent
            type={buttonType}
            href={buttonLink}
            title={buttonTitle}
            targetBlank={targetBlank}
          />
        </Grid.Col>
      </Layout>
    </Container>
  );
}
