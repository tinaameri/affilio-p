import { Container, Grid, Box, Flex, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
// import { IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import Layout from '@/components/LayoutComponent';
import Heading from '@/components/Heading';
import { Fade } from 'react-reveal';
// import { content } from 'public/assets/contentJson';
// import RequestDemo from '@/components/RequestDemo';
import Social from '@/components/Social';
import { IMAGES_BASE_UR } from '@/api/clinet';
import { DotLottiePlayer } from '@dotlottie/react-player';

export default function ContactInfo({ content }) {
  //const smallerXsScreen = useMediaQuery('(max-width: 22.5em)');
  const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  // const contactInfo = content?.contact_us?.contact_info
  //const banner = content?.contact_us?.contact_us_banner;

  // const instagram = content?.contact_us?.social?.instagram
  // const linkedin = content?.contact_us?.social?.linkedin
  return (
    <Container fluid size="xl" p="0">
      <Layout pt="100px" pb="xl">
        <Heading
          py="70px"
          color="white"
          bg="primary.1"
          title={content?.title}
          description={content?.description}
        />
        <Grid.Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          mx="auto"
          pt={smallerLgScreen ? '0' : '90px'}
          //mt={smallerLgScreen && '-38%'}
        >
          <Fade right>
            <>
              <Text component="p" fw="900" fz="lg" mt="xl">
                {content?.info_description}
              </Text>
              <Box my="40px">
                {content?.info?.map((item, index) => (
                  <>
                    {/* {item?.map((info, index) => (
                      console.log(info, 'info')
                    ))} */}
                    <Box key={index}>
                      {/* <Title order={4} color="primary.0">
                      {item?.title}
                    </Title> */}

                      <Box>
                        <Flex align="start" key={index} mt="xs">
                          <Text mr="8px" fw="700" fz="md">
                            {item?.title} :
                          </Text>
                          {/* <Link passHref prefetch={false} > */}
                          <Text
                            component="a"
                            fw="400"
                            fz="md"
                            target="_blank"
                            title={item?.info}
                            href={item?.link}
                          >
                            {item?.info}
                          </Text>
                          {/* </Link> */}
                        </Flex>
                      </Box>
                    </Box>
                  </>
                ))}
              </Box>
              <Text component="strong" fz="lg" fw="900">
                {content?.social_title}
              </Text>
              <Text component="p" fw="400" mt="xs">
                {content?.social_description}
              </Text>
              <Social social={content?.social_media} position="page" />
            </>
          </Fade>
        </Grid.Col>
        <Grid.Col
          xs={12}
          sm={12}
          md={10}
          lg={6}
          xl={6}
          mx="auto"
          ta="center"
          order={smallerLgScreen && 1}
        >
          <Fade left>
            {content?.lottie_image_animation === true ? (
              <DotLottiePlayer
                autoplay
                loop
                mode="normal"
                src={`${IMAGES_BASE_UR}${content?.image?.data?.attributes?.url}`}
                style={{ height: '100%', width: '100%', zIndex: '999' }}
              />
            ) : (
              <figure
              //className={classes.image}
              >
                <img
                  src={`${IMAGES_BASE_UR}${content?.image?.data?.attributes?.url}`}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt="contact-us"
                />
              </figure>
            )}
          </Fade>
        </Grid.Col>
      </Layout>
      {/* <RequestDemo source='contact-us' py='40px' /> */}
    </Container>
  );
}
