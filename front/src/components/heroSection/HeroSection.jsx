import { useState, useEffect } from 'react';
import { Text, Box, Col, Flex } from '@mantine/core';
import Layout from '@/components/LayoutComponent';
import { useMediaQuery } from '@mantine/hooks';
//import Image from 'next/image';
import { DotLottiePlayer } from '@dotlottie/react-player';
import Markdown from '@/components/Markdown';
import ButtonComponent from '@/components/Button';
//import { ModalWithReducer } from '@/context/ModalProvider';
import classes from '@/components/heroSection/HeroSection.module.scss';
import Bubble from '@/components/heroSection/Bubble';
// const DotLottiePlayer = dynamic(() => import('@dotlottie/react-player').then((module) => module.DotLottiePlayer));

export default function HeroSection(props) {
  const {
    topTitle,
    title,
    top_subtitle,
    subtitle,
    button,
    src,
    // href,
    topTitleColor,
    bg,
    // pyContent,
    titleColor,
    topSubtitleColor,
    subtitleColor,
    lottie,
    // beforeSymbol,
    // afterSymbol,
  } = props;
  //   const xLargerScreen = useMediaQuery('(min-width: 88em)');
  // const largerLgScreen = useMediaQuery('(min-width: 90.1em)');
  //const largerMidScreen = useMediaQuery('(min-width: 64em)');
  const largerSmallScreen = useMediaQuery('(min-width: 37.5em)');
  const smallerXsScreen = useMediaQuery('(max-width: 22.5em)');
  const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  //const midScreen = useMediaQuery('(max-width: 64em) and (min-width: 37.5em)');

  // eslint-disable-next-line no-unused-vars
  const [showComponent, setShowComponent] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      //setShowComponent(true);

      if (window.innerHeight < 500) {
        setShowComponent(false);
      } else {
        setShowComponent(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  //const { dispatch } = useContext(ModalWithReducer);

  // const openDemoRequest = () => {
  //   dispatch({ type: 'DEMO' });
  // };
  return (
    <>
      <Box
        bg={bg}
        mt={smallerXsScreen ? '78px' : smallerLgScreen ? '80px' : '85px'}
        pt="xl"
        pb='300px'
      >
        <Layout
          containerClassName={classes.wrapper}
          className={classes.innerWrapper}
        >
          <Col span={12} lg={6}>
            <Box className={classes.content}>
              {topTitle && (
                <Text
                  fz={smallerXsScreen ? '14px' : '16px'}
                  color={topTitleColor}
                >
                  <Markdown text={topTitle} />
                </Text>
              )}
              <Text mx="auto" w="100%" color={titleColor ?? 'primary.4'}>
                <Markdown text={title} />
              </Text>
              {top_subtitle && (
                <Text
                  component="p"
                  mt="xl"
                  fw="700"
                  fz={largerSmallScreen ? 'lg' : 'sm'}
                  color={topSubtitleColor}
                >
                  {top_subtitle}
                </Text>
              )}
              {subtitle && (
                <Text
                  w={{ lg: '90%', md: '90%', sm: '78%', xs: '98%' }}
                  my={smallerXsScreen ? 'xs' : 'xl'}
                  color={subtitleColor}
                  fz={largerSmallScreen ? 'lg' : 'md'}
                  fw="400"
                >
                  <Markdown text={subtitle} />
                </Text>
              )}
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
            </Box>
          </Col>
          <Col span={12} lg={6} sx={{ alignSelf: 'center' }}>
            {lottie === true ? (
              <DotLottiePlayer
                autoplay
                loop
                mode="normal"
                src={src}
                style={{ height: '100%', width: '100%', zIndex: '999' }}
              />
            ) : (
              <figure className={classes.image}>
                <img
                  src={src}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt={title}
                />
              </figure>
              // <Box className={classes.wrapperImage}>
              //   <BackgroundImage
              //     className={classes.image}
              //     src={src}
              //   ></BackgroundImage>
              // </Box>
            )}
          </Col>
        </Layout>
        <Bubble/>
      </Box>
    </>
  );
}
