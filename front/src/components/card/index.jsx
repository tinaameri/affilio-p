import {
  Text,
  Title,
  Box,
  Grid,
  Flex,
  createStyles,
  Image,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import Layout from '@/components/LayoutComponent';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
// import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Markdown from '@/components/Markdown';
//import { useThemeContext } from '@/context/theme';
import Heading from '@/components/Heading';
import ButtonComponent from '@/components/Button';
import { IMAGES_BASE_UR } from '@/api/clinet';
const useStyles = createStyles((theme) => ({
  box: {
    height: 50,
    width: 50,
    border: `1px solid ${theme.colors.gray[3]}`,
    borderRadius: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 32,
    fontWeight: 400,
  },
}));
export function CardItem(props) {
  const { classes } = useStyles();
  const {
    src,
    order,

    title,
    description,

    btns,

    sx,
    lottie,

    topTitle,

    height,
    pt,
    pb,
    mt,
    contentAlign,
    plContent,
    prContent,

    imgHeight,
    //onClick,

    number,

    heading_title,
    heading_description,
    imageAlt,
    multiText,
    bgSection,
  } = props;

  const smallerScreen = useMediaQuery('(max-width: 64em)');
  //   const largerScreen = useMediaQuery('(min-width: 768px)');
  //   const largerLgScreen = useMediaQuery('(min-width: 90em)'); //(min-1440)
  const largerMidScreen = useMediaQuery('(min-width: 64em)'); //(min-1024)lg
  const largerSmallScreen = useMediaQuery('(min-width: 37.51em)'); //(min-600)md green
  //   const smallerSmallScreen = useMediaQuery('(max-width: 37.5em)'); //(max-600)md green
  //   const largerXsScreen = useMediaQuery('(min-width: 22.5625em)'); //(min-361px)sm
  //   const smallerXsScreen = useMediaQuery('(max-width: 22.5em)'); //(max-360px)xs
  //   const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  //   const midScreen = useMediaQuery('(max-width: 64em) and (min-width: 37.5em)');

  //   const { setActiveTab } = useThemeContext();
  //   const handleRouteClick = async (value) => {
  //     await setActiveTab(value);
  //     window.scrollTo({ top: 600, behavior: 'smooth' });
  //   };
  //   const handleClick = async (value) => {
  //     if (value) {
  //       await setActiveTab(value);
  //       window.scrollTo({ top: 600, behavior: 'smooth' });
  //     } else {
  //       onClick;
  //     }
  //   };
  return (
    <Box
      bg={bgSection}
      sx={sx}
      h={height}
      mt={mt}
      pt={pt}
      pb={pb}
      className="cover-bottom"
    >
      <Fade top distance="10%" duration={1000}>
        <Layout pt="45px" pb="70px" className="flex-align-center">
          {heading_title && (
            <Heading title={heading_title} description={heading_description} />
          )}

          <Grid.Col
            //order={mobileOrder ?? (largerMidScreen ? order : 0)}
            orderXs={0}
            orderLg={order}
            xs={12}
            md={8}
            lg={6}
            mx="auto"
            //    offsetSm={btns?.length < 2 ? 0 : 2}
            //     sm={btns?.length < 2 ? 12 : 8}
            //      offsetMd={btns?.length < 2 && 2}
            //       md={btns?.length < 2 && 8}
            //        offsetLg={0}
            //         lg={btns?.length < 2 ? 6 : 5}
            //          xl={btns?.length < 2 ? 6 : 5}
          >
            {lottie === true ? (
              <Box pos="relative" h="460px" w="100%">
                <DotLottiePlayer
                  autoplay
                  loop
                  mode="normal"
                  src={src}
                  style={{ height: '100%', width: '100%', zIndex: '999' }}
                />
              </Box>
            ) : (
              <Box
                pos="relative"
                //h={imgHeight ?? '538px'}
                mih={largerMidScreen ? `${imgHeight}px` : '300px'}
                w="100%"
              >
                <Image
                  width="100%"
                  height={largerMidScreen ? `auto` : '300px'}
                  //objectFit='contain'
                  fit="contain"
                  src={src}
                  alt={imageAlt}
                />
                {/* <Image
                                layout='fill'
                                objectFit='contain'
                                src={src}
                                alt={title}
                                /> */}
              </Box>
            )}
          </Grid.Col>

          <Grid.Col
            xs={12}
            sm={12}
            md={12}
            lg={btns?.length < 2 ? 6 : 7}
            pt="xl"
            sx={{ alignSelf: 'center' }}
          >
            <Box
              pl={plContent}
              pr={prContent}
              ta={smallerScreen && contentAlign}
            >
              {topTitle && (
                <Text mb="lg" component="span" fw="400">
                  {topTitle}
                </Text>
              )}
              {number && (
                <Text component="span" className={classes.box} mb="xl">
                  {number}
                </Text>
              )}

              {/* {type === 'multi-title' ?     title.map((item,index)=>(
                        item.map((i)=>(          <>
                            {title && <Text> 
                          <Markdown text={item?.title} />
                      </Text>}

                      <Text py="16px" fz={largerSmallScreen ? '18px' : '16px'} >
                          <Markdown text={item?.description} />
                      </Text>
                      </>))
                      
                            )):  
                            <>    
                                {title && <Text> 
                                <Markdown text={title} />
                            </Text>}

                            <Text py="16px" fz={largerSmallScreen ? '18px' : '16px'} >
                                <Markdown text={description} />
                            </Text></>} */}

              {multiText?.map((item, index) => (
                <>
                  <Box key={index}>
                    <Title
                    className='heading-icon'
                      order={
                        3 > multiText?.length > 1
                          ? 4
                          : multiText?.length > 2
                            ? 5
                            : 3
                      }
                      mt="md"
                      fw="400"
                    >
                      {item?.title}
                    </Title>

                    <Text
                      py="10px"
                      mt="40px"
                      fz={largerSmallScreen ? '18px' : '16px'}
                    >
                      <Markdown text={item?.description} />
                    </Text>
                  </Box>
                </>
              ))}

              <>
                {title && (
                  <Text>
                    <Markdown text={title} />
                  </Text>
                )}

                <Text py="16px" fz={largerSmallScreen ? '18px' : '16px'}>
                  <Markdown text={description} />
                </Text>
              </>

              {btns && (
                <Flex
                  h={
                    btns?.length === 0
                      ? '0'
                      : btns?.length < 2
                        ? 60
                        : smallerScreen
                          ? 140
                          : 132
                  }
                  w="100%"
                  gap="sm"
                  justify={(smallerScreen && contentAlign) ?? 'flex-start'}
                  //align="center"
                  //direction="column"
                  wrap="wrap"
                  mt="md"
                >
                  {
                    //     btns?.map((button, index) => (
                    //         <>
                    //             {/* <Button  component='a' display={btns?.array < 1  && 'none'} sx={{ width: `${btns?.length < 2 ? '187px' : '245px'}` }} p="11px 26px" size={btns?.length < 2 ? '187px' : '240px'}  color={btnColor} href={button?.href} variant='outline' className={classes.button} rightIcon={btns?.length < 2 && <IconArrowRight size="23px" />}>
                    //    {button?.title}
                    //  </Button>  */}
                    //             <Button
                    //                 onClick={() => handleClick(button?.value)}
                    //                 h={btns?.length > 2 ? '39px' : '50px'}
                    //                 key={index}
                    //                 px={btns?.length > 2 && '0!important'}
                    //                 //component={Link}
                    //                 // component={btns?.length > 2 ? 'span' : 'a'}
                    //                 display={btns?.array < 1 && 'none'}
                    //                 sx={{
                    //                     // hover:{backgroundColor: hoverBackgroundColor,borderColor:btnColor},
                    //                     cursor: 'pointer',
                    //                     // cursor: btns?.length > 2 ? 'default' : 'pointer',
                    //                     width: largerMidScreen ? `${btns?.length < 2 ? '187px' : '240px'}` : largerSmallScreen ? `${btns?.length < 2 ? '160px' : '180px'}` : `${btns?.length < 2 ? '144px' : '180px'}`
                    //                 }}
                    //                 size={btns?.length < 2 ? '187px' : '240px'}
                    //                 color={btnColor}
                    //                 bg={btnBg}
                    //                 variant={variant}
                    //                 className={className}
                    //                 //  variant={btns?.length > 2 ? 'subtle' : 'outline'}
                    //                 rightIcon={btnIcon ?? (btns?.length < 2 && <IconArrowLeft size="23px" />)}>
                    //                 {/* rightIcon={btns?.length < 2 && <IconArrowRight size="23px" />}> */}
                    //                 {/* {btns?.length > 2 && (<Text component='span' pr='sm'>&#8226;</Text>)} */}
                    //                 <Link href={button?.href}>
                    //                     <a target={button?.targetBlank === true ? '_blank' : '_self'} aria-label={button?.title}>
                    //                         {button?.title}
                    //                     </a>
                    //                 </Link>
                    //             </Button>
                    //         </>
                    //     ))
                  }

                  {btns?.map((button, index) => (
                    <ButtonComponent
                      type={button?.type}
                      title={button?.title}
                      targetBlank={button?.newPage}
                      href={button?.link}
                      key={index}
                    />
                  ))}
                </Flex>
              )}
            </Box>
          </Grid.Col>
        </Layout>
      </Fade>
    </Box>
  );
}

export function CardList(props) {
  //const smallerScreen = useMediaQuery('(max-width: 64em)');
  //const largerScreen = useMediaQuery('(min-width: 768px)');
  //const largerLgScreen = useMediaQuery('(min-width: 90em)'); //(min-1440)
  const largerMidScreen = useMediaQuery('(min-width: 64em)'); //(min-1024)lg
  const largerSmallScreen = useMediaQuery('(min-width: 37.5em)'); //(min-600)md green
  //const largerXsScreen = useMediaQuery('(min-width: 22.5625em)'); //(min-360px)sm
  const smallerXsScreen = useMediaQuery('(max-width: 22.5em)'); //(max-360px)xs
  //const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  const content = props.content;
  const cardItems = Object.values(content)?.map((card, index) => (
    <CardItem
      key={index}
      className={props.className}
      onClick={props.onClick}
      top_header={card?.top_header}
      top_description={card?.top_description}
      btnBg={props.btnBg}
      variant={props.variant}
      btnIcon={props.btnIcon}
      headline={props.headline}
      sx={props.sx}
      // bg={(index >= 0 && index <= 1) ? props.bgEven : props.bgOdd}
      bg={card?.bg}
      color={
        index >= 0 && index <= 1 ? props.colorEven : props.colorOdd ?? 'white'
      }
      btnColor={props.btnColor}
      number={card?.number}
      topTitle={card?.topTitle}
      title={card?.title}
      description={card?.desc}
      multiText={card?.multi_text}
      btns={card.buttons}
      src={card?.img}
      lottie={card?.lottie}
      value={card?.value}
      contentAlign={props.contentAlign}
      imgHeight={card?.imgHeight}
      order={index % 2 == 0 ? props.evenOrder ?? 1 : props.oddOrder ?? 0}
      plContent={largerMidScreen && index % 2 == 0 ? '16px' : '0'}
      prContent={largerMidScreen && index % 2 !== 0 ? '16px' : '0'}
      pt={
        index % 2 == 0
          ? largerMidScreen
            ? '16px'
            : largerSmallScreen
              ? '54px'
              : smallerXsScreen
                ? '32px'
                : undefined
          : '0'
      }
      pb={
        index % 2 !== 0
          ? largerMidScreen
            ? '16px'
            : largerSmallScreen
              ? '54px'
              : smallerXsScreen
                ? '32px'
                : undefined
          : '10px'
      }
      mobileOrder={props.mobileOrder}
      height={props.height}
      mt={props.mt}
    />
  ));
  return <>{cardItems}</>;
}

//TODO: refactor (it is just for cms)
export const Card = (props) => {
  //   const smallerScreen = useMediaQuery('(max-width: 64em)');
  //   const largerScreen = useMediaQuery('(min-width: 768px)');
  //   const largerLgScreen = useMediaQuery('(min-width: 90em)'); //(min-1440)
  const largerMidScreen = useMediaQuery('(min-width: 64em)'); //(min-1024)lg
  //   const largerSmallScreen = useMediaQuery('(min-width: 37.5em)'); //(min-600)md green
  //   const largerXsScreen = useMediaQuery('(min-width: 22.5625em)'); //(min-360px)sm
  //   const smallerXsScreen = useMediaQuery('(max-width: 22.5em)'); //(max-360px)xs
  //   const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  // const content = props.content;
  return (
    <CardItem
      onClick={props.onClick}
      variant={props.variant}
      headline={props.headline}
      sx={props.sx}
      bgColor={props.bg}
      bgSection={props?.bgSection}
      //color={props.color}
      // btnColor={props.btnColor}
      // btnBg={props.btnBg}
      // btnIcon={props.btnIcon}
      btnType={props?.btnType}
      header={props?.content?.header}
      number={props?.content?.number}
      topTitle={props?.content?.caption}
      heading_title={props?.content?.heading_title}
      heading_description={props?.content?.heading_description}
      multiText={props?.content?.content}
      // title={props?.content?.title}
      // description={props?.content?.description}
      btns={props?.content.buttons}
      src={`${IMAGES_BASE_UR}${props?.content?.image?.data?.attributes?.url}`}
      remoteImage={true}
      imageAlt={props?.content?.content[0]?.title}
      // lottie={props?.content?.lottie}
      // value={props?.content?.value}
      // contentAlign={props.contentAlign}
      // imgHeight={props?.content?.imgHeight}

      order={props?.content?.reverse ? 1 : 0}
      //order={index % 2 == 0 ? (props.evenOrder ?? 1) : (props.oddOrder ?? 0) }
      plContent={largerMidScreen ? '16px' : '0'}
      prContent={largerMidScreen ? '16px' : '0'}
      pt={'0'}
      pb={'10px'}
      // pb={(index % 2 !== 0) ? (largerMidScreen ? '16px'
      //         : largerSmallScreen ? '54px'
      //             : smallerXsScreen ? '32px'
      //                 : undefined): '10px'}
      // pb={(index % 2 !== 0) ? (largerMidScreen ? '16px'
      //         : largerSmallScreen ? '54px'
      //             : smallerXsScreen ? '32px'
      //                 : undefined): '10px'}
      mobileOrder={props.mobileOrder}
      height={props.height}
      mt={props.mt}
    />
  );
};
// export function CardList(props) {
//     const content = props.content;
//     const cardItems = Object.values(content).reduce((acc, card, index) => {
//       const groupIndex = Math.floor(index / 2) % 3;
//       const bgColor =
//         groupIndex === 0 ? '' : groupIndex === 1 ? 'primary.1' : 'yellow';
//       const color = index >= 0 && index <= 1 ? '' : 'white';
//       const btnColor = index >= 0 && index <= 1 ? '' : 'green';

//       const cardItem = (
//         <CardItem
//           bgColor={bgColor}
//           color={color}
//           btnColor={btnColor}
//           key={index}
//           header={card.header}
//           title={card.title}
//           description={card.desc}
//           btns={card.buttons}
//           src={card.img}
//           order={index % 2 !== 0 && 1}
//           id={id}
//         />
//       );

//       acc.push(cardItem);
//       return acc;
//     }, []);

//     return <>{cardItems}</>;
//   }
