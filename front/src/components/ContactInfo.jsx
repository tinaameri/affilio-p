import { Container, Grid, Box, Flex, Text, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
// import { IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import Layout from '@/components/LayoutComponent';
import Heading from '@/components/Heading';
import { Fade } from 'react-reveal';
// import { content } from 'public/assets/contentJson';
// import RequestDemo from '@/components/RequestDemo';
import Social from '@/components/Social';
import { IMAGES_BASE_UR } from '@/api/clinet';

export default function ContactInfo({ content }) {
  //const smallerXsScreen = useMediaQuery('(max-width: 22.5em)');
  const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  // const contactInfo = content?.contact_us?.contact_info
  //const banner = content?.contact_us?.contact_us_banner;

  // const instagram = content?.contact_us?.social?.instagram
  // const linkedin = content?.contact_us?.social?.linkedin
  return (
    <Container fluid size="xl" p="0">
      <Layout pt="100px" pb='xl'>
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
              <Text component="p" fw="400" mt="xl">
                {content?.info_description}
              </Text>
              <Box>
                {content?.info?.map((item, index) => (
                  <>
                    {/* {item?.map((info, index) => (
                      console.log(info, 'info')
                    ))} */}
                    <Box key={index} mb="xl">
                      {/* <Title order={4} color="primary.0">
                      {item?.title}
                    </Title> */}

                      <Box mt="40px">
                        <Flex align="start" key={index} mt="xl">
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
              <Text
                component="strong"
                ff="Yekan Bakh Bold"
                fz="xl"
                fw="900"
                mb="xl"
              >
                {content?.social_title}
              </Text>
              <Text component="p" fw="400" mt="xl">
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
            <Image
              src={`${IMAGES_BASE_UR}${content?.image?.data?.attributes?.url}`}
              height={content?.image?.data?.attributes?.height}
              width="100%"
              withPlaceholder
              fit="contain"
              alt="contact-us"
            />
          </Fade>
        </Grid.Col>
      </Layout>
      {/* <RequestDemo source='contact-us' py='40px' /> */}
    </Container>
  );
}
