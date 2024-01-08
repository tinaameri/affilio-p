import React from 'react';
import Layout from '@/components/LayoutComponent';
import { Text, Title, Grid } from '@mantine/core';
import Image from 'next/image';
import { Fade } from 'react-reveal';

export default function TopImageCard(props) {
  const { img, title, description, imageHeight, imageWidth, textAlign } = props;

  return (
    <>
      <Grid.Col xs={12} sm={12} md={6} lg={4} xl={4} mb="xl" mx="auto">
        <Fade top distance="10%" duration={1000}>
          <Grid>
            <Grid.Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              m="auto"
              align="center"
            >
              <Image
                src={img}
                height={imageHeight}
                width={imageWidth}
                alt={title}
              />
            </Grid.Col>

            <Grid.Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              align={textAlign}
              mt="lg"
            >
              {/* <Title order={4} color='primary.1' mb='sm'>
                                {header}

                            </Title>     */}
              <Title order={5} color="primary.1" mb="lg">
                {title}
              </Title>
              <Text component="p" color="primary.1">
                {/* {textSplitter({ text: description, style: { pt: "xl" } })} */}
                {description}
              </Text>
            </Grid.Col>
          </Grid>
        </Fade>
      </Grid.Col>
    </>
  );
}

export function TopImageCardItems({
  content,
  imageWidth,
  imageHeight,
  textAlign,
}) {
  return (
    <Layout pb="96px">
      {Object.values(content).map((card, index) => (
        <TopImageCard
          key={index}
          header={card?.header}
          title={card?.title}
          description={card?.desc}
          img={card.img}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          textAlign={textAlign}
        />
      ))}
    </Layout>
  );
}
