import React from 'react';
import Layout from '@/components/LayoutComponent';
import { Text, Title, Grid, Flex } from '@mantine/core';
import { Fade } from 'react-reveal';
import { IMAGES_BASE_UR } from '@/api/clinet';
import ButtonComponent from '../Button';
import Heading from '../Heading';

export default function TopImageCard(props) {
  const {
    src,
    title,
    description,
    //imageHeight,
    //imageWidth,
    textAlign,
    button,
    three_column,
  } = props;

  return (
    <>
      <Grid.Col
        xs={12}
        sm={12}
        md={6}
        lg={three_column ? 4 : 6}
        xl={three_column ? 4 : 6}
        mb="xl"
        mx="auto"
      >
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
              <figure>
                <img
                  src={src}
                  loading="lazy"
                  alt={title}
                  height="auto"
                  width="100%"
                />
              </figure>
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
              {button && (
                <Flex mt="40px">
                  {button?.map((button, index) => (
                    <ButtonComponent
                      mr="xs"
                      key={index}
                      type={button?.type}
                      href={button?.link}
                      title={button?.title}
                      targetBlank={button?.newPage}
                    />
                  ))}
                </Flex>
              )}
            </Grid.Col>
          </Grid>
        </Fade>
      </Grid.Col>
    </>
  );
}

export function TopImageCardItems({
  cardContent,
  content,
  imageWidth,
  imageHeight,
  textAlign,
}) {
  return (
    <Layout pb="96px">
      {content?.heading_title && (
        <Heading
          title={content?.heading_title}
          description={content?.heading_description}
        />
      )}

      {Object?.values(cardContent).map((card, index) => (
        <TopImageCard
          key={index}
          header={card?.header}
          title={card?.title}
          description={card?.description}
          src={`${IMAGES_BASE_UR}${card?.image?.data?.attributes?.url}`}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          textAlign={textAlign}
          button={card?.button}
          three_column={content?.three_column}
          // button_1_title={card?.button_1_title}
          // button_1_link={card?.button_1_link}
          // button_1_newPage={card?.button_1_newPage}
          // button_1_type={card?.button_1_type}
          // button_2_title={card?.button_2_title}
          // button_2_link={card?.button_2_link}
          // button_2_newPage={card?.button_2_newPage}
          // button_2_type={card?.button_2_type}
        />
      ))}
    </Layout>
  );
}
