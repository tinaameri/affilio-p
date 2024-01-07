import Link from 'next/link';
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
import { useMediaQuery } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { IMAGES_BASE_UR } from '@/api/clinet';
import { useRouter } from 'next/router';
import ActiveLink from './ActiveLink';
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
      //backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#F6FFF2',
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
const SimpleSubMenu = ({ link, onClick, imageData, title }) => {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.subLink} onClick={onClick}>
      <Link prefetch={false} href={link} as={link}>
        <a className={classes.subLinkTitle}>
          <Image
            src={`${IMAGES_BASE_UR}${imageData?.url}`}
            alt={imageData?.caption}
            width={80}
            height={80}
          />
          <Text component="span" fz="sm" fw="600" ml="sm" color="primary.1">
            {title}
          </Text>
        </a>
      </Link>
    </UnstyledButton>
  );
};
const CardSubMenuSS = ({ link, onClick, imageData, title, description }) => {
  return (
    <Card dir="rtl" bg="transparent" radius="lg" onClick={onClick}>
      <Link href={link} as={link}>
        <a className="card-link-section"></a>
      </Link>
      <Box mb="md">
        <Image
          src={`${IMAGES_BASE_UR}${imageData?.url}`}
          alt={imageData?.caption}
          height={135}
          radius="lg"
        />
      </Box>
      <Box px="xs">
        <Text component="strong" fz="lg" fw="600" color="primary.1">
          {title}
        </Text>
        <Text
          component="p"
          mt="sm"
          lineClamp={2}
          fz="sm"
          fw="400"
          color="primary.1"
        >
          {description}
        </Text>
      </Box>
    </Card>
  );
};
const CardSubMenu = ({ link, onClick, imageData, title, description }) => {
  const { classes } = useStyles();
  const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  return (
    <Card dir='rtl'
      bg='transparent'
      radius='lg'
      onClick={onClick}
      className={classes.cardItem}
    >
      <Link href={link} >
        <a className='card-link-section' aria-label={title}></a>
      </Link>
      <Box mb='md'>
        <Image
          src={`${IMAGES_BASE_UR}${imageData?.url}`}
          height={135}
          alt={title}
          radius='lg'
        />
      </Box>
      <Box px='xs'>
        <Text component='strong' fz={smallerLgScreen ? 'md' : 'lg'} fw='600' color='primary.6'>
          {title}
        </Text>
        <Text component="p" mt='xs' lineClamp={2} fz='sm' fw='400' color='primary.6'>
          {description}
        </Text>
      </Box>
    </Card>
  );
};

export default function NavbarItem({ links, slug }) {
  const { classes } = useStyles();
  const router = useRouter();
  const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  return (
    <>
      {links.map((item, idx) => (
        <HoverCard
          width="100%"
          position="bottom"
          shadow="md"
          withinPortal
          key={idx}
        >
          <HoverCard.Target>
            <Box className={`${classes.link} ${router.pathname === slug && 'active'} menu-link`}>
              {item?.sub_links?.length ? (
                <Center inline>
                  <Text component="span" mr={5} color="primary.1">
                    {item.title}
                  </Text>
                  <IconChevronDown size={20} />
                </Center>
              ) : (
                <ActiveLink href={item?.link || '#'} as={item?.link} activeClassName="active">
                  <a
                    className="link-section"
                    style={{ justifyContent: 'flex-start' }}
                  >
                    {item?.title}
                  </a>
                </ActiveLink>
                // <Link prefetch={false} href={item?.link || '#'} passHref>

                // </Link>
              )}
            </Box>
          </HoverCard.Target>
          {item?.sub_links?.length ? (
            <HoverCard.Dropdown sx={{ overflow: 'hidden' }} p="0">
              <BackgroundImage
                // src="/assets/images/smartech/menu/bg-left-menu.svg"
                bgr="no-repeat"
                bgp="top right"
                bgsz="143px"
                mih="320px"
                dir="rtl"
              >
                <Container size='900'>
                  <Grid>
                    <Grid.Col xs={12} lg={12} py="xl">
                      <SimpleGrid cols={5} spacing={0} px={smallerLgScreen ? '0' : '100px'}>
                        {item?.sub_links?.map((subItem, idx) => (
                          <>
                            {subItem?.description ? (
                              <CardSubMenu
                                key={idx}
                                link={subItem?.link}
                                title={subItem?.title}
                                description={subItem?.description}
                                imageData={subItem?.image?.data?.attributes}
                              />
                            ) : (
                              <SimpleSubMenu
                                key={idx}
                                link={subItem?.link}
                                title={subItem?.title}
                                imageData={subItem?.image?.data?.attributes}
                              />
                            )}
                          </>
                        ))}
                      </SimpleGrid>
                    </Grid.Col>
                  </Grid>
                </Container>
              </BackgroundImage>
            </HoverCard.Dropdown>
          ) : null}
        </HoverCard>
      ))}
    </>
  );
}


// <Container size='900'>

//                                         <Grid >
//                                             <Grid.Col xs={12} lg={12} py="xl">
//                                                 <SimpleGrid cols={5} spacing={0} px={smallerLgScreen ? '0' : '100px'}>
//                                                     <CardSubMenu onClick={handleCloseCard} item={item} />
//                                                 </SimpleGrid>
//                                             </Grid.Col>
//                                         </Grid>
//                                     </Container>