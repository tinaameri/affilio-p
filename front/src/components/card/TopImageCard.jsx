import React from 'react';
import Layout from '@/components/LayoutComponent';
import { Text, Title, Grid, Flex, Container } from '@mantine/core';
import { Fade } from 'react-reveal';
import { IMAGES_BASE_UR } from '@/api/clinet';
import ButtonComponent from '../Button';
import Heading from '../Heading';
import Bubble from './Bubble';

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
    text_color
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
              <figure className={three_column && 'back-mini-img flex-center'}>
                <img
                  src={src}
                  loading="lazy"
                  alt={title}
                  height={three_column ? '32px' :'auto'}
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
              {/* <Title order={4} color='primary.4' mb='sm'>
                                {header}

                            </Title>     */}
              <Title order={5} color={text_color} mb="lg">
                {title}
              </Title>
              <Text component="p" color={text_color} h='120px' >
                {/* {textSplitter({ text: description, style: { pt: "xl" } })} */}
                {description}
              </Text>
              {Object.keys(button).length !==0 && (
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
  bgSection
}) {
  return (
    <Container fluid bg={bgSection}>
   <Layout pb="40px"  >
      {content?.heading_title && (
        <Heading
          title={content?.heading_title}
          description={content?.heading_description}
          text_light={content?.text_light && 'text-white'}
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
          textAlign={content?.three_column ? 'center' : 'right'}
          button={card?.button}
          three_column={content?.three_column}
          text_color={content?.text_light ? 'primary.6' :'primary.4'}
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
      <Bubble/>
    </Layout>
    </Container>
 
  );
}
