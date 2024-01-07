;
import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
//import Image from 'next/image';
// import { ModalWithReducer } from "@/context/ModalProvider";
// import { LinksRightMenu } from '@/components/NavbarItem'
import {
  Container,
  createStyles,
  Header,
  Group,
  //Button,
  Text,
  Box,
  Burger,
  Drawer,
  // Collapse,
  ScrollArea,
  rem,
  // BackgroundImage,
  Accordion,
  Image,
  Flex,

} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

//import NavbarItem from '@/components/NavbarItem';
import NavItem from './NavItem';
import { mockdata } from '@/lib/page-directory/navJson';
import Logo from '@/components/Logo';
//import { content } from 'public/assets/contentJson';
import ButtonComponent from '@/components/Button';
import { IMAGES_BASE_UR } from '@/api/clinet';
import TopBanner from './TopBanner';

const useStyles = createStyles((theme) => ({

  //  wrapperHeader : {

  //   background: 'url(/assets/images/smartech/bg-blue-menu.png),linear-gradient(90deg, #112751 44.8%, #193871 99.74%)!important',

  // },
  // headerBlur: {
  //   position: 'relative',
  //   width: '100%',
  //   height: '100%',
  //   '&::before': {
  //     content: '""',
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     bottom: 0,
  //     // filter: 'blur(12px)',
  //     zIndex: -1,
  //     background: 'rgba(255, 255, 255, 0.80)',
  //     boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.08)',
  //     backdropFilter: 'blur(12px)'

  //   }
  // },
  item: {

    fontWeight: 700,
    fontSize: theme.fontSizes.sm,
    borderTop: `1px solid ${theme.colors.gray[3]}`,
    borderBottom: 'unset',

  }, label: {

    fontWeight: 700,
    fontSize: theme.fontSizes.sm,

  },
  content: {
    cursor: 'pointer'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',

    fontWeight: 700,
    cursor: 'pointer',
    paddingLeft: theme.spacing.lg,

    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    height: '50px',
    borderTop: `1px solid ${theme.colors.gray[3]}`,
    '&:hover': {
      background: '#F6FFF2',

    },
    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
  },

  subLink: {
    width: '100%',
    fontWeight: 700,

    padding: `${theme.spacing.xs} ${theme.spacing.xs}`,
    borderRadius: theme.radius.lg,
    border: '1px solid rgba(188, 201, 226, 0.60)',
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#F6FFF2',
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('lg')]: {
      display: 'none!important',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('lg')]: {
      display: 'none!important',
    },
  },
  image: {
    objectFit: 'cover',
    borderRadius: '8px',
  },
  mobileCard: {
    '&:hover': {
      background: '#F6FFF2',

    },
  }
}));



export default function GeneralHeader({ links, logo, slug, button, top_banner,topBannerHeight }) {
  //?change style menu after scroll */
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //const button = content.header?.button[0]
  // const { modalOpenState, dispatch } = useContext(ModalWithReducer);
  // const [collapseStates,setCollapseStates]=useState('false')
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  // const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const { classes, theme } = useStyles();
  const largerScreen = useMediaQuery('(min-width:75em)');
  const smallerXsScreen = useMediaQuery('(max-width: 22.5em)');
  const smallerLgScreen = useMediaQuery('(max-width: 75em)');

  // const openDemoRequest = () => {
  //   closeDrawer();
  //   dispatch({ type: "DEMO" });

  // }
  const handleClose = () => {
    closeDrawer();

  }


  const home = mockdata?.Home
  const services = Object.keys(mockdata).slice(1, 2).map((key) => mockdata[key]);
  const company = Object.keys(mockdata).slice(3, 4).map((key) => mockdata[key]);

  const menuMapper = (menu) => {
    return menu?.map((items, index) => (
      items?.map((item, idx) => (
        <Accordion.Item key={idx} value={item?.menu}>
          <Accordion.Control className={classes.mobileCard}>
            {item?.menu}
          </Accordion.Control>
          {item?.subMenu?.map((subItem, idx) => (


            <Accordion.Panel key={idx} px='md' className={classes.mobileCard}>
              <Link prefetch={false} href={subItem?.link} passHref>
                <Group noWrap align="flex-start" onClick={handleClose} className='cursor-pointer'>
                  <Image layout='fixed' src={subItem?.icon} alt={item?.title} width={40} height={40} className={classes.image} />
                  <Box w='100%'>
                    <Text component='strong' className='text-body3b'>
                      {subItem?.title}
                    </Text>
                    <Text component='p' color={theme.colors.dark[5]} lineClamp={2} className='text-body3r'>
                      {subItem?.description}
                    </Text>
                  </Box>
                </Group>

              </Link>
            </Accordion.Panel>
          ))}
          {/* {key === "Platform" && <Accordion.Panel px='xl' bg='primary.7'>
        <LinksRightMenu />

      </Accordion.Panel>} */}

        </Accordion.Item>
      ))
    ))
  }
  return (


    <>
      {/* <Header sx={{ border: '0', zIndex: '100' }} bg='transparent' height={smallerXsScreen ? '66px' : smallerLgScreen ? '80px' : '86px'} pos="fixed" > */}
      <Header sx={{
        border: '0', zIndex: '1000'
      }}

        bg='transparent'
        height={(!top_banner && smallerXsScreen) ? '66px' : '85px'}
        pos="fixed" >
        {top_banner && <TopBanner content={top_banner} header={topBannerHeight} />}

        <Box px="md"
          className={isScrolled ? 'headerBlur' : 'wrapperHeader'}
          h='100%'

        >
          <Container size='1344px' h='100%' p='0'>
            <Group position="apart" sx={{ height: '100%' }}>

              <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
              <Logo logo={logo} />
              <Group sx={{ height: '100%', flex: '1', marginLeft: '50px' }} spacing={10} className={classes.hiddenMobile}>
                {/* <NavbarItem services={services} home={home} company={company} /> */}
                {links?.length ? <NavItem links={links} slug={slug} /> : null}
              </Group>
              <Group className={classes.hiddenMobile}>
                <ButtonComponent type={button?.type} href={button?.link} title={button?.title} targetBlank={button?.newPage} />

              </Group>
            </Group>
          </Container>
        </Box>
      </Header>
      {links?.length ? (
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          className={classes.hiddenDesktop}
          zIndex={1000000}
        >
          <ScrollArea dir="rtl" h={`calc(100vh - ${rem(60)})`} mx="-md">
            {/* <Link prefetch={false} href="/">
              <a className={classes.link} onClick={handleClose}>
                صفحه اصلی
              </a>
            </Link> */}

            {links?.map((menuItem, idx) => (
              <>
                {menuItem?.sub_links?.length ? (
                  <Accordion
                    classNames={{
                      item: classes.item,
                      content: classes.content,
                      panel: classes.panel,
                      chevron: classes.chevron,
                      label: classes.label,
                    }}
                  >
                    <Accordion.Item key={idx} value={menuItem.title}>
                      <Accordion.Control>{menuItem.title}</Accordion.Control>
                      {menuItem?.sub_links?.map((subItem, idx) => (
                        <Accordion.Panel key={idx} px="md">
                          <Link prefetch={false} href={subItem.link} passHref>
                            <Group
                              noWrap
                              align="flex-start"
                              onClick={handleClose}
                              className="cursor-pointer"
                            >
                              <Image
                                src={`${IMAGES_BASE_UR}${subItem?.image?.data?.attributes?.url}`}
                                alt={subItem?.image?.data?.attributes?.caption}
                                width={40}
                                height={40}
                                className={classes.image}
                              />
                              <Box w="70%">
                                <Text
                                  component="strong"
                                  className="text-body3b"
                                >
                                  {subItem?.title}
                                </Text>
                                <Text
                                  component="p"
                                  color={theme.colors.dark[5]}
                                  lineClamp={2}
                                  className="text-body3r"
                                >
                                  {subItem?.description}
                                </Text>
                              </Box>
                            </Group>
                          </Link>
                        </Accordion.Panel>
                      ))}
                    </Accordion.Item>
                  </Accordion>
                ) : (
                  <Box className={classes.link} onClick={handleClose} key={idx}>
                    <Link
                      prefetch={false}
                      href={menuItem?.link || '#'}
                      passHref
                    >
                      <a
                        aria-label={menuItem?.title}
                        className="link-section"
                        style={{ justifyContent: 'flex-start' }}
                      >

                        {menuItem.title}
                      </a>
                    </Link>
                  </Box>
                )}
              </>
            ))}

            <Flex
              direction="column"
              justify="center"
              align="center"
              pt="xl"
              px="md"
            >
                        <ButtonComponent type={button?.type} href={button?.link} title={button?.title} targetBlank={button?.newPage} />
            </Flex>
          </ScrollArea>
        </Drawer>
      ) : null}
    </>
  );
}