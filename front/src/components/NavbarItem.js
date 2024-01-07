import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useThemeContext } from '@/context/theme';

import {
    Container,
    createStyles,

    HoverCard,


    UnstyledButton,
    Text,
    SimpleGrid,
    Grid,
    Card,
    Center,
    Box,
    rem,
    BackgroundImage,

    Image,


} from '@mantine/core';
// import { IconArrowLeft } from '@tabler/icons-react';

import {

    IconChevronDown,
} from '@tabler/icons-react';
// import { mockdataRightMenu } from '@/lib/page-directory/navJson'
import { useMediaQuery } from '@mantine/hooks';
const useStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 700,
        fontSize: theme.fontSizes.md,
        cursor: 'pointer',
        [theme.fn.smallerThan('sm')]: {
            height: rem(42),
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#F6FFF2',
            height: '85px'
        }),
    },

    subLink: {
        //width: '100%',
        padding: `${theme.spacing.xs} ${theme.spacing.xs}`,
        borderRadius: theme.radius.lg,
        //marginBottom: '24px',
        border: '1px solid rgba(188, 201, 226, 0.60)',
        ...theme.fn.hover({
            backgroundColor: '#F6FFF2',

        }),

        '&:active': theme.activeStyles,
    },
    subLinkTitle: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
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
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
    nav: {
        [`&:hover .dropDown`]: {
            background: 'red',
            display: 'block',
        },
    },
    dropdown: {
        zIndex: 300,
        top: '103px',
        left: '0px',
        width: '100%',
        // display: 'block',
        position: 'absolute',

        backgroundColor: 'white',

    }, rightList: {
        listStyleType: 'none;'
    },
    cardItem: {
        '&:hover': {
            background: '#F6FFF2',

        },
    }
}));

export function SubMenu({ item, onClick }) {
    const { classes, theme } = useStyles();

    return (
        <>

            {item?.subMenu?.map((subItem, idx) => (
                <UnstyledButton className={classes.subLink} key={idx} onClick={onClick}>
                    <Link prefetch={false} href={subItem?.link} >
                        <a className={classes.subLinkTitle} aria-label={item?.title}>
                            <Image src={subItem?.icon} alt={subItem?.title} width={80} height={80} />

                            <Text component='span' fz='sm' fw='600' ml='sm' color='primary.1'>
                                {subItem?.title}
                            </Text>

                            {/* <Text component='p' color={theme.colors.dark[5]} lineClamp={2} className='text-body3r'>
                                        {subItem.description}
                                    </Text> */}

                        </a>
                    </Link>

                </UnstyledButton>

            ))}


        </>
    );
};
export function CardSubMenu({ item, onTabActivate, onClick }) {
    const { classes, theme } = useStyles();
    const { setActiveTab } = useThemeContext();
    const smallerLgScreen = useMediaQuery('(max-width: 75em)');

    const handleTabClick = async (tabValue) => {
        await setActiveTab(tabValue);
        window.scrollTo({ top: 600, behavior: 'smooth' });

    };
    return (
        <>

            {item?.subMenu?.map((subItem, idx) => (

                <Card dir='rtl'
                    bg='transparent'
                    radius='lg'
                    key={idx}
                    // onClick={() => handleTabClick(subItem?.value)}
                    onClick={onClick}
                    className={classes.cardItem}
                >
                    <Link href={subItem?.link} >
                        <a className='card-link-section' aria-label={subItem?.title}></a>
                    </Link>
                    <Box mb='md'>
                        <Image
                            src={subItem?.icon}
                            height={135}
                            alt={subItem?.title}
                            radius='lg'
                        />
                    </Box>
                    <Box px='xs'>
                        <Text component='strong' fz={smallerLgScreen ? 'md' : 'lg'} fw='600' color='primary.6'>
                            {subItem?.title}
                        </Text>
                        <Text component="p" mt='xs' lineClamp={2} fz='sm' fw='400' color='primary.6'>
                            {subItem?.description}
                        </Text>
                    </Box>

                    {/* <Button px='sm' mt='xs' component={Link} color='secondary.0' href={subItem?.link} variant='subtle' rightIcon={<IconArrowLeft size="23px" />}
                        onClick={() => handleButtonClick(subItem?.value)}
                    >
                        <a className='card-link-section'>
                            <Text component='span' fw='700' fz='md'>{subItem?.btn}</Text>
                        </a>
                    </Button> */}
                    {/* <Link href={subItem?.link}>
                        <a className='flex-align-center'
                            onClick={() => handleButtonClick(subItem?.value)}
                        //onClick={() => scrollIntoView(subItem?.value)}

                        >

                            <Text px='sm' mt='xs' color='secondary.0' className='icon-secondary-color' component='span' fw='700' fz='md'>  {subItem?.btn}</Text>
                            <Text mt='md' color='secondary.0' className='icon-secondary-color' component='span'>  <IconArrowLeft size="23px" /></Text>

                        </a>
                    </Link> */}

                </Card>

            ))}


        </>
    );
};
// export function LinksRightMenu() {
//     const { classes, theme } = useStyles();

//     return (
//         <>
//             {mockdataRightMenu.map((item, index) => (

//                 <UnstyledButton className={classes.subLink} key={index} >
//                     <Group noWrap align="flex-start">

//                         <div>
//                             <Text size="xs" fw={700} ff='Poppins'>
//                                 {item.title}
//                             </Text>


//                             <ul className={classes.rightList}>

//                                 {item.description.map((item, i) => (
//                                     <li key={i}>
//                                         <Text className='text-body3r' mt="xs" color={theme.colors.dark[5]} >
//                                             <Link prefetch={false} href={item.link} > {item.title}</Link>

//                                         </Text>
//                                     </li>
//                                 ))}

//                             </ul>


//                         </div>
//                     </Group>
//                 </UnstyledButton >
//             ))
//             }
//         </>)

// }

export default function NavbarItem({ key, platform, channels, services, company, home, companyFooter }) {
    const { classes, theme } = useStyles();
    const [active, setActive] = useState(0)
    const [activeHome, setActiveHome] = useState(0)
    const smallerLgScreen = useMediaQuery('(max-width: 75em)');

    const [isParentVisible, setParentVisible] = useState(false);
    const handleClose = (index) => {
        setActive(index)
        setActiveHome(false)

    };
    const handleCloseCard = () => {
        setParentVisible(!isParentVisible);


    };
    const handleCloseHome = (index) => {
        setParentVisible(false);
        setActiveHome(index)
        setActive(null)

    };
    useEffect(() => {
        setActive(null)

    }, [])

    const handleHoverVisible = () => {
        setParentVisible(true);
    };
    const handleHoverHidden = () => {
        setParentVisible(false);
    };
    const menuMapper = (menu, key) => {
        return menu?.map((items, index) => (
            <Box key={index}>
                {items.map((item, idx) => (
                    <HoverCard width="100%" position="bottom" shadow="md" withinPortal key={idx}>
                        <HoverCard.Target>
                            <Box className={`${classes.link} menu-link`} onMouseEnter={handleHoverVisible} >
                                <Center inline>
                                    <Text component="span" mr={5} color='primary.1'>
                                        {item.menu}
                                    </Text>
                                    <IconChevronDown size={20} />
                                </Center>
                            </Box>
                        </HoverCard.Target>
                        {isParentVisible && (<HoverCard.Dropdown onMouseLeave={handleHoverHidden} sx={{ overflow: 'hidden', transform: 'translateY(-8px)!important' }} p="0">
                            <BackgroundImage
                                src="/assets/images/smartech/menu/bg-left-menu.svg"
                                bgr="no-repeat"
                                bgp="top right"
                                bgsz="143px"
                                mih='320px'
                                dir='rtl'
                            >

                                {key === "Platform" ? (

                                    <Container fluid pr='0' px='15%' >
                                        {/* <Container fluid pr='0' pl='15%' > */}


                                        <Grid >

                                            {/* <Grid.Col xs={12} lg={8} py="64px"> */}
                                            <Grid.Col xs={12} lg={12} pt='40px'>
                                                <SimpleGrid cols={3} spacing="lg" verticalSpacing="lg">
                                                    <SubMenu item={item} onClick={handleCloseCard} />
                                                </SimpleGrid>
                                            </Grid.Col>

                                            {/* <Grid.Col xs={12} lg={4} bg={theme.colors.violet[0]} py="48px">
                                    <SimpleGrid cols={1} spacing={0}>
                                        <LinksRightMenu />
                                    </SimpleGrid>
                                </Grid.Col> */}



                                        </Grid>
                                    </Container>

                                ) : key === "Services" ?
                                    (<Container size='900'>

                                        <Grid >
                                            <Grid.Col xs={12} lg={12} py="xl">
                                                <SimpleGrid cols={5} spacing={0} px={smallerLgScreen ? '0' : '100px'}>
                                                    <CardSubMenu onClick={handleCloseCard} item={item} />
                                                </SimpleGrid>
                                            </Grid.Col>
                                        </Grid>
                                    </Container>
                                    ) : (
                                        <Container fluid px='11%' >

                                            <Grid >
                                                <Grid.Col xs={12} lg={12} py="64px">
                                                    <SimpleGrid cols={3} spacing="lg" verticalSpacing="lg">
                                                        <SubMenu item={item} onClick={handleClose} />
                                                    </SimpleGrid>
                                                </Grid.Col>
                                            </Grid>
                                        </Container>
                                    )}
                            </BackgroundImage >
                        </HoverCard.Dropdown>)}

                    </HoverCard>
                ))}

            </Box>
        ))

    }
    const singleItemMenu = (title, link) => (
        <Box className={`${classes.link} menu-link ${activeHome === true && 'active'}`} onClick={() => handleCloseHome(true)} >
            <Link prefetch={false} href={link} passHref >
                <a className='link-section' aria-label={title} style={{ justifyContent: 'flex-start' }}>
                    {title}
                </a>
            </Link>
        </Box>
    )
    return (
        <>
            {singleItemMenu(home?.title, home?.link)}
            {menuMapper(services, "Services")}
            {company?.map((items) => (
                items?.map((menu, idx) => (
                    menu?.subMenu?.map((menu, subIndex) => (
                        <Box className={`${classes.link} menu-link ${active === subIndex && 'active'}`} onClick={() => handleClose(subIndex)} key={subIndex}>
                            <Link prefetch={false} href={menu.link} passHref >
                                <a className='link-section' aria-label={menu?.title} style={{ justifyContent: 'flex-start' }}>
                                    {menu.title}
                                </a>
                            </Link>
                        </Box>

                    ))
                ))
            ))}

        </>
    )
}
