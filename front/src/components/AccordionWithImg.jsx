import Accordion from '@/components/Accordion';
import Heading from '@/components/Heading';
import Layout from '@/components/LayoutComponent';
import { Grid, Box } from '@mantine/core';
import Image from 'next/image';
import { Fade } from 'react-reveal';
export default function AccordionWithImg({
  img,
  titleColor,
  descColor,
  bgColor,
  alt,
  content,
  title,
  description,
}) {
  return (
    <Box bg={bgColor} pb="130px">
      <Heading color="primary.1" title={title} description={description} />
      <Fade top distance="10%" duration={1000}>
        <Layout>
          <Grid.Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            orderXs={1}
            orderSm={1}
            orderMd={1}
            orderLg={0}
            orderXl={0}
          >
            <Accordion
              content={content}
              descColor={descColor}
              titleColor={titleColor}
            />
          </Grid.Col>
          <Grid.Col xs={12} sm={12} md={12} lg={6} ta="center">
            <Image width={480} height={319} src={img} alt={alt} />
          </Grid.Col>
        </Layout>
      </Fade>
    </Box>
  );
}
