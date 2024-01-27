//import { useContext, useState, useEffect } from 'react';
import { Text, Grid, Box, Flex, Image } from '@mantine/core';
import Layout from '@/components/LayoutComponent';
//import { ModalWithReducer } from '@/context/ModalProvider';
// import { IconArrowLeft } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
// import Image from 'next/image';
// import LoaderHeroSection from './LoaderHeroSection';
import { DotLottiePlayer } from '@dotlottie/react-player';
// import { ColoredText, textColorSplitter, textSplitter } from '@/utils/helpers';
// import ReactMarkdown from 'react-markdown'
import Markdown from '@/components/Markdown';
// import Link from 'next/link';
import ButtonComponent from './Button';
import WordAnimation from './WordAnimation';

// const DotLottiePlayer = dynamic(() => import('@dotlottie/react-player').then((module) => module.DotLottiePlayer));
// const useStyles = createStyles((theme) => ({
//     wrapper: {
//         background: 'url(/assets/images/smartech/bg-blue-hero-section.png) center/cover no-repeat, linear-gradient(90deg, #112751 44.8%, #193871 99.74%)!important',
//     }
// }));

export default function HeroSection(props) {
  //const { classes } = useStyles();

  const {
    topTitle,
    title,
    top_subtitle,
    subtitle,
    button,
    src,
    bg,

    lottie,
    contentOrder,
    wordsAnimation,
  } = props;

  const xLargerScreen = useMediaQuery('(min-width: 90.1em)');
  const largerLgScreen = useMediaQuery('(min-width: 75.1em)');
  const largerMidScreen = useMediaQuery('(min-width: 64em)');
  const largerSmallScreen = useMediaQuery('(min-width: 37.5em)');
  const smallerXsScreen = useMediaQuery('(max-width: 22.5em)');
  //const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  const midScreen = useMediaQuery('(max-width: 64em) and (min-width: 37.5em)');

  //   const [showComponent, setShowComponent] = useState(true);
  //   useEffect(() => {
  //     const handleResize = () => {
  //       //setShowComponent(true);

  //       if (window.innerHeight < 500) {
  //         setShowComponent(false);
  //       } else {
  //         setShowComponent(true);
  //       }
  //     };

  //     window.addEventListener('resize', handleResize);

  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }, []);

  return (
    <Box
      mt={smallerXsScreen ? '78px' : '85px'}
      // mt={smallerXsScreen ? '78px' : smallerLgScreen ? '90px' : '98px'}
      mb="11px"
      h="100%"
      pos="relative"
      bg={bg}
      //className={classes.wrapper}
    >
      <Layout
        className="flex-align-end"
        mih={
          xLargerScreen ? '850px' : '620px'
          //'850px'
        }
        // mt={smallerXsScreen ? '78px' : smallerLgScreen ? '90px' : '98px'}
      >
        <Grid.Col
          my="auto"
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          h="100%"
          pt="xl"
          mx="0"
          px="0"
          orderLg={contentOrder}
        >
          <Flex
            justify="center"
            align={largerMidScreen ? 'flex-start' : 'center'}
            direction="column"
            wrap="wrap"
            mih={largerMidScreen ? '400px' : '300px'}
            h="auto"
            // w='80%'
          >
            {topTitle && (
              <Text fz={smallerXsScreen ? '14px' : '18px'} color="primary.4">
                <Markdown text={topTitle} />
              </Text>
            )}
            <Text
              color="primary.4"
              mx="auto"
              w="100%"
              ta={largerMidScreen ? 'left' : 'center'}
            >
              <Markdown text={title} />
            </Text>

            <WordAnimation content={wordsAnimation} />

            {top_subtitle && (
              <Text
                component="p"
                mt="xl"
                fw="700"
                fz={largerSmallScreen ? 'lg' : 'sm'}
              >
                {top_subtitle}
              </Text>
            )}
            {subtitle && (
              <Text
                mx={{ base: 'auto', lg: 'unset', xl: 'unset' }}
                w={{ lg: '90%', md: '90%', sm: '78%', xs: '98%' }}
                my={smallerXsScreen ? 'xs' : 'xl'}
                fz={largerSmallScreen ? 'lg' : 'sm'}
                color="primary.4"
              >
                <Markdown text={subtitle} />
              </Text>
            )}
            {/* {button && !link &&
                            <Button className='text-medium' mt={smallerXsScreen ? 'xs' : 'xl'} width='178px'
                                onClick={onClick}
                                bg={bgBtn} color={bgHover}

                            >
                                <Text component='span' fw='700' c={btnColor}>  {button}</Text>
                            </Button>} */}
            {/* {(button && link) && */}
            {}
            {button && (
              <Flex>
                {button?.map((button, index) => (
                  <Box key={index} m={'xs'}>
                    <ButtonComponent
                      type={button?.type}
                      href={button?.link}
                      title={button?.title}
                      targetBlank={button?.newPage}
                    />
                  </Box>
                ))}
              </Flex>
            )}
            {/* } */}
          </Flex>
        </Grid.Col>
        <Grid.Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          mih={400}
          h="auto"
          //mx='auto'
          pb="0"
        >
          <Box
            //pos={{ lg: 'absolute' }}
            //style={{zIndex:10}}
            pos="relative"
            bottom={{ lg: '1' }}
            right={{ lg: '0' }}
            //sx={{ zIndex: -1 }}
            mx={midScreen ? 'auto' : '0'}
            mih={largerMidScreen ? '100%' : smallerXsScreen ? '400px' : '443px'}
            w={midScreen ? '440px' : 'unset'}
            className="flex-align-center"
          >
            {lottie === true ? (
              <DotLottiePlayer
                autoplay
                loop
                mode="normal"
                src={src}
                style={{ height: '100%', width: '100%', zIndex: '999' }}
              />
            ) : (
              <Image
                width="100%"
                height={largerLgScreen ? '500px' : '350px'}
                fit="contain"
                src={src}
                alt={title}
                className="flex-align-selft-center-img"
              />
              //   <Image
              //     layout='fill'
              //     objectFit='contain'
              //     src={src}
              //     alt={title}
              // />
            )}
          </Box>
        </Grid.Col>
      </Layout>
    </Box>
  );
}

// export function HeroSectionItem(props) {
//     const content =props.content
//     return (
//         <HeroSection subtitle={content} button={} />
//     )
// }
