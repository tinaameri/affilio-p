import { ThemeContextProvider } from '@/context/theme';
import ModalWithReducerProvider from '@/context/ModalProvider';
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, em } from '@mantine/core';
// import { CustomFonts } from '@/components/CustomFonts';
import { ModalsProvider } from '@mantine/modals';
import rtlCache from '@/components/rtl-cache';
import { CustomFonts } from './CustomFonts';
export default function ThemeProvider(props) {
  const { children } = props;
  const [colorScheme, setColorScheme] = useState(props.colorScheme);

  const toggleColorScheme = (value) => {
    const nextColorScheme =
      value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    // setCookie('mantine-color-scheme', nextColorScheme, {
    //   maxAge: 60 * 60 * 24 * 30,
    // });
  };
  return (
    <>
      <ModalWithReducerProvider>
        <ThemeContextProvider>
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <MantineProvider
              emotionCache={rtlCache}
              theme={{
                fontSizes: {
                  xs: '12px',
                  sm: '14px',
                  md: '16px',
                  lg: '18px',
                  xl: '20px',
                },
                fontFamily: 'Yekan Bakh,sans-serif',
                // fontFamilyMonospace: 'Roboto, sans-serif',
                fontDisplay: 'swap',
                background: '#FDFDFD',

                //primaryShade: { light: 1, dark: 5 },
                primaryShade: 0,
                colors: {
                  // 'primary': ['0-main', '1-dark-hover', '2-light1','3-light2,'4-dlight','5-cText','6-text ','7-bg',   '8-dark bg','#1B286F', '#1B286F'],
                  primary: [
                    '#2C6CF6',
                    '#255ACC',
                    '#1B52B0',
                    '#173466',
                    '#11264B ',
                    '#0D1F3D',
                    '#F2F6FE',
                    'linear-gradient(180deg, #2C6CF6 100%, #255ACC 100%)',
                    '#ffffff',
                    '#ffffff',
                    '#ffffff',
                  ],
                  // 'secondary': ['0-main', '1-dark-hover', '2-light2',   '3-deep light',   '4-light' , '5-contrastText' , '6-text', '7-bg', ''],

                  secondary: [
                    '#FF7346',
                    '#FF7346',
                    '#FF7346',
                    '#FF7346',
                    '#FF7346',
                    '#FF7346',
                    '#FF7346',
                    '#FF7346',
                    '#FF7346',
                    '#FF7346',
                    '#FF7346',
                  ],
                  social: [
                    '#2AABEE',
                    '#0a66c2',
                    '#ED3976',
                    '#00C6BB',
                    '#ff9800',
                    '#FFD200',
                    '#FFD200',
                    '#FFD200',
                    '#FFD200',
                    '#FFD200',
                  ],
                  // 'error': ['0-light', '1-main', '2-dark',   '3-contrastText',   '4-text','5-bg'  , '6-bg' , '7-dark bg', '#1B286F', '#1B286F'],

                  success: [
                    '#81c784',
                    '#4caf50',
                    '#d32f2f',
                    '#388e3c',
                    'rgba(0, 0, 0, 0.87)',
                    '#162059',
                    '#EBEEFC',
                    '#1B286F',
                    '#1B286F',
                    '#1B286F',
                  ],
                  error: [
                    '#e57373',
                    '#f44336',
                    '#d32f2f',
                    '#fff',
                    '#f44336',
                    '#162059',
                    '#EBEEFC',
                    '#1B286F',
                    '#1B286F',
                    '#1B286F',
                  ],
                  light: [
                    '#AFB9F2',
                    '#fff',
                    '#fff',
                    '#fff',
                    '#fff',
                    '#fff',
                    '#fff',
                    '#fff',
                    '#fff',
                    '#fff',
                  ],
                  gray: [
                    '#EAEEF6',
                    '#BCC9E2',
                    '#96A1B5',
                    '#44587B',
                    '#44587B',
                    '#44587B',
                    '#44587B',
                    '#44587B',
                    '#44587B',
                    '#44587B',
                  ],
                },
                primaryColor: 'primary',
                secondaryColor: 'secondary',
                //errorColor:'error',
                breakpoints: {
                  xs: '0',
                  sm: '22.5625em',
                  md: '37.5em',
                  lg: '64em',
                  xl: '90em',
                },
                components: {
                  Title: {
                    styles: (theme) => ({
                      root: {
                        '&:is(h1),&:is(h2),&:is(h3),&:is(h4),&:is(h5),&:is(h6)':
                          {
                            fontWeight: 'bold',
                            lineHeight: 'normal',
                            margin: '0',
                            padding: '0',
                            '*': {
                              fontWeight: 'bold',
                            },
                          },
                        '&:is(h2),&:is(h3),&:is(h4),&:is(h5),&:is(h6)': {
                          fontWeight: 700,
                          lineHeight: 'normal',
                        },

                        [theme.fn.largerThan('xs')]: {
                          '&:is(h1),&:is(h2),&:is(h3)': {
                            fontSize: '26px',
                          },
                          '&:is(h4)': {
                            fontSize: '18px',
                          },
                        },
                        [theme.fn.largerThan('md')]: {
                          '&:is(h1),&:is(h2)': {
                            fontSize: '32px',
                          },

                          '&:is(h3)': {
                            fontSize: '28px',
                          },
                          '&:is(h4)': {
                            fontSize: '20px',
                          },
                        },
                        [theme.fn.largerThan('lg')]: {
                          '&:is(h1)': {
                            fontSize: '40px',
                          },
                          '&:is(h2)': {
                            fontSize: '32px',
                          },
                          '&:is(h3)': {
                            fontSize: '30px',
                          },
                          '&:is(h4)': {
                            fontSize: '24px',
                          },
                          '&:is(h5)': {
                            fontSize: '20px',
                          },
                          '&:is(h6)': {
                            fontSize: '18px',
                          },
                        },
                      },
                    }),
                  },
                  Text: {
                    styles: () => ({
                      root: {
                        fontWeight: 500,
                        padding: 0,
                        margin: 0,
                      },
                    }),
                  },

                  Container: {
                    defaultProps: {
                      sizes: {
                        xs: 360,
                        sm: 360,
                        md: '90%',
                        lg: 1024,
                        xl: 1024,
                      },
                    },
                  },
                  Drawer: {
                    styles: (theme) => ({
                      close: {
                        color: theme.colors.dark[2],
                      },
                    }),
                  },
                  InputWrapper: {
                    styles: (theme) => ({
                      root: {
                        height: '61px',
                        backgroundColor: 'transparent',
                        outline: 'none',
                        border: 'none',
                        borderBottom: '1px solid #8D92A8',
                        caretColor: theme.colors.primary[4],
                      },
                      label: {
                        color: '#252D31',

                        fontWeight: 900,
                        fontSize: 12,
                      },
                      input: {
                        paddingLeft: 0,
                      },
                      required: {
                        color: theme.colors.primary[4],
                      },
                      error: {
                        color: theme.colors.error[1],
                        // color: theme.colors.error[theme.fn.primaryShade(2)]
                      },
                    }),
                  },
                  Checkbox: {
                    styles: (theme) => ({
                      label: {
                        color: theme.colors.primary[1],
                      },
                    }),
                  },
                  Alert: {
                    styles: (theme) => ({
                      root: {
                        background: 'transparent',
                        color: theme.colors.error[1],
                        padding: '10px 0',
                      },
                    }),
                  },
                  Input: {
                    styles: () => ({
                      input: {
                        border: 'unset',
                        //  borderBottom: '1px solid #8D92A8',
                        borderRadius: '0',
                        backgroundColor: 'transparent',

                        // '&:[data-invalid]': {
                        //     borderBottom: `1px solid ${theme.colors.error[1]}`
                        // }
                      },
                    }),
                  },

                  Modal: {
                    styles: (theme) => ({
                      close: {
                        color: theme.colors.dark[5],
                      },
                      body: {
                        padding: '0',
                      },
                    }),
                  },
                  Accordion: {
                    styles: () => ({
                      root: {
                        fontWeight: 700,
                      },

                      content: {
                        fontWeight: 500,
                      },
                    }),
                  },
                  Button: {
                    styles: (theme, params, { variant }) => ({
                      root: {
                        height: '46px',

                        //minWidth: '120px',
                        width: 'auto',
                        //borderRadius: '4px 16px 16px 16px',
                        fontSize: '16px',
                        fontWeight: 900,
                        position: 'relative',
                        display: 'inline-block',
                        //backgroundColor: theme.colors.primary[3],

                        //color: theme.colors.primary[4],

                        //boxShadow: `4px 4px 0 ${theme.colors.primary[4]}`,

                        // '&:hover': {
                        //   top: ' 3px',
                        //   left: '-3px',
                        //   boxShadow: `0px 0px 0 ${theme.colors.primary[4]}`,
                        //   //backgroundColor: theme.colors.primary[0],
                        //   '&::after': {
                        //     top: '1px',
                        //     right: '-2px',
                        //     width: '4px',
                        //     height: '4px',
                        //   },

                        //   '&::before': {
                        //     bottom: '-2px',
                        //     left: '1px',
                        //     width: '4px',
                        //     height: '4px',
                        //   },
                        // },
                        a: {
                          position: 'absolute',
                          width: '100%',
                          left: '0',
                          zIndex: '999',
                          justifyContent: 'space-between!important',
                        },

                        // '.mantine-rtl-Button-icon': {
                        //     position: 'absolute',
                        //     right: '9px'

                        // },

                        span: {
                          fontWeight: 900,
                          //padding: '11px 32px',
                          height: '25px',
                        },
                        // [theme.fn.smallerThan('xl')]: {
                        //   height: '50px',
                        //   fontSize: '16px',
                        //   padding: '13px 32px',
                        // },
                        // [theme.fn.smallerThan('lg')]: {
                        //   height: '46px',
                        //   fontSize: '14px',
                        //   padding: '11px 24px',
                        // },
                        [theme.fn.smallerThan('md')]: {
                          padding: '21px',
                          borderRadius: '3px 14px 14px 14px',
                        },
                        ...theme.fn.hover({
                          backgroundColor:
                            variant === 'subtle' && theme.colors.primary[7],
                        }),
                      },
                    }),
                  },

                  Badge: {
                    styles: {
                      root: { borderWidth: '0.125rem' },
                    },
                  },
                },
                globalStyles: (theme) => ({
                  html: {
                    scrollBehavior: 'smooth',
                  },
                  '*, *::before, *::after': {
                    boxSizing: 'border-box',
                    margin: 0,
                    padding: 0,
                  },
                  // 'body.scrolled .fixed-pattern': {
                  //     '&:before': {
                  //         width: '100px'
                  //     }

                  // },
                  '.simple-button': {
                    outline: 'none',
                    border: 'none',
                    borderRadius: '50px',
                    backgroundColor: theme.colors.primary[0],
                    fontWeight: 700,
                    fontFamily: 'Yekan Bakh',
                    cursor: 'pointer',
                    padding: '12px 24px',
                    '&-secondary': {
                      border: 'unset',
                      color: 'white',
                      background: theme.colors.secondary[0],
                    },
                    '&-outline': {
                      background: 'transparent',
                      border: `1px solid ${theme.colors.gray[1]}`,
                      color: theme.colors.primary[3],
                    },
                  },
                  '.mantine-rtl-Burger-root': {
                    height: '40px',
                    width: '40px',
                    //padding: '0 1.875rem',
                    borderRadius: '10px!important',
                    fontSize: '16px',
                    fontWeight: '700',
                    border: '1px solid #000 !important',
                    top: '0',
                    right: '0',
                    transition: 'all .15s linear 0s',
                    position: 'relative',
                    display: 'inline-block',
                    backgroundColor: 'white',

                    color: theme.colors.primary[4],

                    boxShadow: `-4px 4px 0 ${theme.colors.primary[4]}`,
                    '&:hover': {
                      top: ' 3px',
                      left: '-3px',
                      boxShadow: `0px 0px 0 ${theme.colors.primary[4]}`,
                      backgroundColor: theme.colors.primary[0],
                      color: theme.colors.primary[4],
                      '&::after': {
                        top: '1px',
                        right: '-2px',
                        width: '4px',
                        height: '4px',
                      },

                      '&::before': {
                        bottom: '-2px',
                        left: '1px',
                        width: '4px',
                        height: '4px',
                      },
                    },
                  },
                  // 'body': {
                  //     transform: 'translateX(0px)'
                  // },

                  // '@font-face': {
                  //     fontFamily: 'Yekan Bakh Medium',
                  //     fontDisplay: 'swap',
                  //     fontStyle: 'normal',
                  //     fontWeight: '400',
                  //     lineHeight:'normal',
                  //     src: `url('/assets/fonts/Yekan Bakh FaNum 05 Medium.woff') format('woff')`,
                  // },
                  //      '@font-face': {
                  //     fontFamily: 'Yekan Bakh Bold',
                  //     fontDisplay: 'swap',
                  //     fontStyle: 'normal',
                  //     fontWeight: '600',
                  //     lineHeight:'normal',
                  //     src: `url('/assets/fonts/Yekan Bakh FaNum 06 Bold.woff') format('woff')`,
                  // },
                  //   '@font-face': {
                  //     fontFamily: 'Yekan Bakh Heavy',
                  //     fontDisplay: 'swap',
                  //     fontStyle: 'normal',
                  //     fontWeight: '900',
                  //     lineHeight:'normal',
                  //     src: `url('/assets/fonts/Yekan Bakh FaNum 07 Heavy.woff') format('woff')`,
                  // },
                  '.main-box': {
                    minHeight: '41.5vh',
                    // '&:before': {
                    //     content: '""',
                    //     position: 'fixed',
                    //     left: '10px',
                    //     top: '0',
                    //     width: '100px',
                    //     height: '100%',
                    //     backgroundSize: 'cover',
                    //     zIndex: 999,
                    //     backgroundImage: `url('/assets/images/adverge/home/left-patern.svg')`,
                    //     [theme.fn.smallerThan('lg')]: {
                    //         display: 'none'

                    //     },
                    // }
                  },
                  // '.fixed-pattern': {
                  //   '&:before': {
                  //     content: '""',
                  //     position: 'fixed',
                  //     left: '10px',
                  //     top: '0',
                  //     width: '100px',
                  //     height: '100%',
                  //     zIndex: 5,
                  //     backgroundImage: `url('/assets/images/adverge/home/left-patern.svg')`,
                  //     backgroundSize: 'cover',
                  //     [theme.fn.smallerThan('lg')]: {
                  //       display: 'none',
                  //     },
                  //   },
                  // },
                  '.trust-logo': {
                    cursor: 'pointer',
                    borderRadius: '10px',
                    padding: '8px',
                    img: {
                      height: '100%',
                      width: '100%',
                    },
                  },

                  // '.outline-secondary': {
                  //     color: theme.colors.secondary[2],

                  //     '&:hover': {
                  //         color: theme.colors.primary[1],
                  //         backgroundColor: theme.colors.secondary[1]

                  //     }
                  // },

                  '.mantine-rtl-CloseButton-root': {
                    marginLeft: 'auto',
                    marginRight: 'unset',
                  },
                  '.demo .mantine-rtl-Modal-body': {
                    minHeight: '550px',
                  },
                  '.cover': {
                    '&-left': {
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right',
                    },
                    '&-center': {
                      backgroundSize: '100%',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    },
                    '&-bottom': {
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'bottom',
                    },
                  },
                  '.radius': {
                    '&-xl': {
                      borderRadius: '40px',
                    },
                  },
                  '.shadow': {
                    '&-left': {
                      boxShadow: '-4px 4px 0px 0px #000',
                      borderRadius: '15px',
                    },
                    '&-right': {
                      boxShadow: '4px 4px 0px 0px #000',
                      borderRadius: '15px',
                    },
                    '&-left-green': {
                      boxShadow: `-4px 4px 0px 0px ${theme.colors.primary[0]}`,
                      borderRadius: '15px',
                    },
                  },
                  '.back-mini-img': {
                    width: ' 61.384px',
                    height: '60px',
                    borderRadius: '16px',
                    background:
                      'radial-gradient(141.42% 141.42% at 0% 0%, rgba(250, 250, 250, 0.30) 0%, rgba(246, 246, 246, 0.00) 100%)',

                    backdropFilter: 'blur(12px)',
                  },

                  '.login-main-box': {
                    minHeight: '100vh',
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                  },
                  'h1 *,h2 *,h3 *,h4 *,h5 *,h6 *': {
                    fontWeight: 'bold',

                    lineHeight: 'normal',
                    margin: 0,
                    padding: 0,
                  },
                  'h1,h2,h3,h4,h5,h6': {
                    fontWeight: 700,
                  },
                  h1: {
                    fontWeight: 'bold',
                  },
                  h6: {
                    fontSize: '18px',
                  },

                  [theme.fn.largerThan('xs')]: {
                    'h1,h2,h3': {
                      fontSize: '26px',
                    },
                    h4: {
                      fontSize: '18px',
                    },
                  },
                  [theme.fn.largerThan('md')]: {
                    'h1,h2': {
                      fontSize: '32px',
                    },

                    h3: {
                      fontSize: '36px',
                    },
                    h4: {
                      fontSize: '20px',
                    },
                  },
                  [theme.fn.largerThan('lg')]: {
                    h1: {
                      fontSize: '40px',
                    },
                    h2: {
                      fontSize: '32px',
                    },
                    h3: {
                      fontSize: '28px',
                    },
                    h4: {
                      fontSize: '24px',
                    },
                    h5: {
                      fontSize: '20px',
                    },
                    h6: {
                      fontSize: '18px',
                    },
                  },

                  '.wrapperHeader': {
                    background: '#fff!important',
                    //borderBottom: '1px solid #435880',
                    boxShadow: '2px 2px 20px 0px rgba(0, 0, 0, 0.15)',
                  },
                  '.wrapperHeader .menu-link a,.wrapperHeader .menu-link span':
                    {
                      color: theme.colors.primary[4],
                      fontWeight: 700,
                    },
                  '.wrapperHeader .mantine-rtl-Burger-burger,.wrapperHeader .mantine-rtl-Burger-burger::before,.wrapperHeader .mantine-rtl-Burger-burger::after':
                    {
                      backgroundColor: theme.colors.primary[4],
                    },
                  '.dropDownMenu': {
                    position: 'relative',
                    '.mantine-rtl-Menu-dropdown': {
                      top: '60px!important',
                      left: '-6px!important',
                    },
                  },

                  '.menu-link': {
                    position: 'relative',

                    '&:hover,.active': {
                      '.link-section': {
                        color: `${theme.colors.secondary[0]}!important`,
                      },
                      color: `${theme.colors.secondary[0]}!important`,

                      '&:before,&:after': {
                        content: '""',
                        position: 'absolute',
                        borderRadius: '50%',
                        bottom: '-7px',
                      },
                      '&:before': {
                        width: '15px',
                        height: '15px',

                        backgroundColor: 'white',
                        right: 'calc(50% - 7.5px)',
                      },
                      '&:after': {
                        width: '7px',
                        height: '7px',
                        bottom: '-3px',
                        right: 'calc(50% - 3.5px)',

                        backgroundColor: theme.colors.secondary[0],
                      },
                    },
                  },
                  '.wrapperHeader .menu-link svg': {
                    stroke: theme.colors.primary[4],
                  },
                  // '.mantine-rtl-Header-root': {
                  //     top: 'unset',
                  //     '&.header': {
                  //         top: '0'
                  //     }
                  // },
                  '.headerBlur': {
                    position: 'absolute',
                    //top: '0',
                    width: '100%',
                    height: '100%',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      // filter: 'blur(12px)',
                      zIndex: -1,
                      background: 'rgba(255, 255, 255, 0.80)',
                      boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.08)',
                      backdropFilter: 'blur(12px)',
                    },
                    '.menu-link span, .menu-link svg,.menu-link a': {
                      stroke: theme.colors.primary[4],
                      color: theme.colors.primary[4],
                      fontWeight: 700,
                    },
                  },
                  'span strong': {
                    color: '#FF7855',
                  },
                  '.fit': {
                    '&-none': {
                      img: {
                        objectFit: 'unset!important',
                      },
                    },
                    '-containg': {
                      img: {
                        objectFit: 'contain',
                      },
                    },
                  },

                  '.text-animation': {
                    fontWeight: '500',
                    fontsize: '23px',
                  },

                  '.testimonial': {
                    '.swiper': {
                      width: '100%',
                      height: '100%',
                    },
                    '.swiper-slide': {
                      textAlign: 'right',
                    },
                    '.swiper-slide img': {
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    },
                  },
                  '.seller': {
                    '.swiper-slide': {
                      //width: 'fit-content !important',
                      '> div': {
                        justifyContent: 'space-around',
                        textAlign: 'center',
                        alignItems: 'flex-start',
                        svg: {
                          marginTop: '8px',
                        },

                        [`@media (max-width: ${em(400)})`]: {
                          justifyContent: 'center',
                        },
                      },
                    },
                  },
                  // '.customer-wrapper': {

                  //     width: '100%',
                  //     '.swiper-wrapper .mantine-rtl-Image-imageWrapper': {
                  //         display: 'flex',
                  //         justifyContent: 'center',
                  //     },
                  //     '.customer-item': {
                  //         height: '30px',
                  //         width: '100px',
                  //         display: 'table',
                  //         //margin: '0 10px',

                  //     },

                  //     '&.tabs ': {
                  //         '.customer-item': {
                  //             //border: `1px solid ${theme.colors.gray[1]}`,
                  //             borderRadius: '15px',
                  //             width: '228px',
                  //             height: '118px',
                  //             //marginBottom: '20px',
                  //             display: 'flex',
                  //             justifyContent: 'center',
                  //             alignItems: 'center',

                  //         }
                  //     },
                  //     '&.gray-images,&.white-images ': {
                  //         '.customer-item': {
                  //             display: 'flex',
                  //             justifyContent: 'center',
                  //             alignItems: 'center',
                  //             'img': {
                  //                 filter: 'grayscale(100%)',
                  //                 transition: 'filter 0.3s ease',
                  //                 opacity: '0.5',

                  //                 '&:hover': {
                  //                     filter: 'unset !important',
                  //                     opacity: '1',

                  //                 }
                  //             }

                  //         }
                  //     },
                  //     '&.white-images ': {
                  //         marginTop: '20px',
                  //         'img': {
                  //             filter: 'brightness(0) invert(1) !important',
                  //             transition: 'filter 0.3s ease',
                  //             opacity: '1 !important',

                  //         }
                  //     }
                  // },

                  '.white-images ': {
                    marginTop: '20px',
                    img: {
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.3s ease',
                      opacity: '0.8',

                      '&:hover': {
                        filter: 'unset !important',
                        opacity: '1',
                        cursor: 'pointer',
                      },
                    },
                  },
                  '.mantine-rtl-1yyx421': {
                    '&:hover': {
                      background: 'transparent',
                    },
                  },
                  '.login .mantine-rtl-InputWrapper-label': {
                    fontSize: '16px',
                    fontWeight: 600,
                    margin: '20px 0',
                  },
                  '.login .mantine-rtl-Input-input': {
                    border: `1px solid ${theme.colors.gray[2]}`,
                    borderRadius: '10px',
                    height: '60px',
                    width: '100%',
                    '&:focus': {
                      borderRadius: '10px',
                      background: 'transparent',
                    },
                  },
                  '.login .mantine-rtl-PasswordInput-innerInput': {
                    height: '60px',
                    width: '100%',

                    '&:focus': {
                      borderRadius: '10px',
                      background: 'transparent',
                    },
                  },
                  '.login .mantine-rtl-InputWrapper-root': {
                    borderBottom: 'unset',
                  },
                  '.login button svg': {
                    color: theme.colors.gray[5],
                  },

                  '.mantine-rtl-Input-wrapper .mantine-rtl-Input-input[data-invalid] ':
                    {
                      borderBottom: `1px solid ${theme.colors.error[1]}`,
                      marginTop: '1px',
                      color: theme.colors.error[1],
                    },
                  '.login .mantine-rtl-Input-wrapper .mantine-rtl-Input-input[data-invalid] ':
                    {
                      border: `1px solid ${theme.colors.error[1]}`,
                    },
                  '.article-terms *': {
                    color: theme.colors.primary[4],
                  },
                  '.article-terms p': {
                    fontWeight: 400,
                    fontSize: '16px',
                  },
                  '.article-terms ul,.article-terms ol': {
                    [`@media (max-width: ${em(991)})`]: {
                      paddingRight: '17px',
                    },
                    marginTop: '10px',
                  },

                  '.article-terms li': {
                    marginTop: '10px',
                  },
                  '.article-terms ul ul,.article-terms ol ul': {
                    //paddingLeft: '17px',
                  },
                  '.article-terms ul::marker,.article-terms ol::marker': {
                    fontSize: '17px',
                    fontWeight: 700,
                  },
                  '.text-decoration': {
                    textDecoration: 'underline',
                  },
                  '@keyframes fadeIn': {
                    from: {
                      opacity: 0,
                    },
                    to: {
                      opacity: 1,
                    },
                  },

                  'cursor-pointer': {
                    cursor: 'pointer!important',
                  },
                  '.mantine-rtl-1avyp1d': {
                    height: '100%',
                  },
                  '.align-center': {
                    display: 'flex',
                    alignItems: 'cen,ter',
                  },
                  '.img-rounded': {
                    borderRadius: '24px',
                    background: 'blue',
                  },
                  '.text-white *': {
                    color: 'white!important',
                  },
                  '.text-secondary': {
                    color: theme.colors.secondary[0],
                  },
                  '.text-orange': {
                    color: '#FF7855',
                  },

                  '.text-body1r': {
                    fontWeight: 400,
                    fontSize: '18px',
                  },
                  '.text-body3r': {
                    fontSize: '14px',
                    fontWeight: 400,
                  },
                  '.text-body3m': {
                    fontWeight: 500,
                    fontSize: '14px',
                  },
                  '.text-body3b': {
                    fontSize: '14px',
                    fontWeight: 700,
                  },
                  '.flex': {
                    '&-wrap': {
                      display: 'flex',
                      [theme.fn.smallerThan('lg')]: {
                        flexDirection: 'column',
                        alignItems: 'center',
                      },
                    },
                  },

                  '.flex-align-end': {
                    [theme.fn.smallerThan('lg')]: {
                      display: 'flex',
                      alignItems: 'flex-end',
                    },
                  },
                  '.flex-align': {
                    '&-center': {
                      display: 'flex',
                      alignItems: 'center',
                    },
                    // '&-self-center-img':{
                    //     'img':{
                    //         alignSelf: 'center'

                    //     }
                    // }
                  },
                  '.flex-align-start': {
                    display: 'flex',
                    alignItems: 'flex-start',
                  },
                  '.flex-justify-start': {
                    display: 'flex',
                    justifyContent: 'flex-start',
                  },
                  '.flex-center': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  '.outline-light': {
                    border: `1px solid ${theme.colors.primary[2]}`,
                  },
                  '.border-radius-gray': {
                    border: `1px solid ${theme.colors.gray[2]}`,
                    borderRadius: '18px',
                  },
                  '.search-input': {
                    svg: {
                      color: theme.colors.secondary[0],
                      transform: 'rotate(90deg)',
                    },
                    input: {
                      width: '128%',
                      borderRadius: '18px',

                      '&::placeholder': {
                        color: theme.colors.gray[3],
                      },
                      '&:focus': {
                        borderRadius: '18px',
                      },
                    },
                  },

                  '.blog-section': {
                    [theme.fn.smallerThan('lg')]: {
                      '&:nth-of-type(2),&:nth-of-type(3)': {
                        display: 'none',
                      },
                    },
                  },
                  '.mantine-rtl-Breadcrumbs-breadcrumb': {
                    color: theme.colors.primary[2],
                  },
                  '.mantine-rtl-Breadcrumbs-separator': {
                    margin: '0 3px',
                  },
                  '.mantine-rtl-Breadcrumbs-root a,.mantine-rtl-Breadcrumbs-separator':
                    {
                      color: theme.colors.gray[7],
                      fontWeight: 500,
                      fontSize: '14px',
                    },
                  '.mantine-rtl-Breadcrumbs-root a': {
                    //minWidth: 'fit-content',

                    '&:nth-child(1)': {
                      minWidth: '64px',
                    },
                  },

                  '.article-post h2,.article-post h3,.article-post h4,.article-post h5,.article-post h5,.icon-right,.icon-bottom':
                    {
                      position: 'relative',
                      paddingRight: '40px!important',
                      ':before': {
                        content: "''",
                        position: 'absolute',
                        height: '26px',
                        width: '29px',
                        right: '0',
                        bottom: 'calc(50% - 13px)',
                        background:
                          'url("/assets/images/heading.svg") no-repeat',
                        backgroundSize: 'cover',
                      },
                    },
                  '.icon-bottom': {
                    paddingBottom: '60px!important',
                    paddingRight: '0!important',

                    ':before': {
                      height: '30px',
                      width: '34px',
                      right: 'calc(50% - 14.5px)',
                      top: '60%',
                    },
                  },
                  '.article-post': {
                    fontWeight: 500,
                    paddingBottom: '30px',
                    img: {
                      width: '100%',
                      height: '400px',
                      objectFit: 'contain',
                      borderRadius: '15px',
                      margin: '30px 0',

                      [theme.fn.smallerThan('lg')]: {
                        height: '350px',
                      },
                    },
                    p: {
                      margin: '20px 0',
                    },
                  },

                  '.article-post h2': {
                    fontSize: '32px!important',
                    lineHeight: '40px!important',
                    padding: '20px 0',
                  },
                  '.article-post ol,.article-post ul': {
                    paddingLeft: '20px',
                    li: {
                      listStylePosition: 'inside',
                    },
                  },
                  '.wp-block-heading': {
                    fontWeight: 700,
                    margin: '30px 0',
                  },

                  '.link-section': {
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 600,
                  },
                  '.link-button': {
                    height: '100%',
                    padding: '0 20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 600,
                  },
                  '.card-link-section': {
                    // '&:hover': {
                    //     background: '#F6FFF2',
                    //     zIndex:'0'
                    // },
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    position: 'absolute',
                    zIndex: '1',
                    fontWeight: 700,
                    top: '0',
                    paddingBottom: '50px',
                  },

                  '.icon-secondary-color svg': {
                    stroke: theme.colors.secondary[0],
                  },
                  '.icon-primary svg': {
                    stroke: '#252D31',
                  },
                  '.mantine-rtl-Tabs-tab': {
                    marginBottom: '-1.5px',
                    '&:not([data-active]) ': {
                      color: theme.colors.gray[3],
                    },
                  },
                  '.mantine-rtl-Tabs-tabsList': {
                    borderBottom: `1px solid ${theme.colors.gray[4]}`,
                  },
                  '.split span': {
                    '&:first-of-type': {
                      position: 'relative',
                      paddingLeft: 5,
                      '&:before': {
                        content: '"؛"',
                        position: 'absolute',
                        left: '-3px',
                      },
                    },
                  },
                  '.customer-box': {
                    width: '133px',
                    height: '110px',
                    borderRadius: '20px',
                    border: '1px solid  #EAEEF6',
                    opacity: '0.93',
                    background: 'white',
                    boxShadow: '-15px 15px 25px -15px rgba(27, 82, 176, 0.12)',
                  },

                  '.img-responsive': {
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden',
                    img: {
                      height: '100%',
                      aspectRatio: 1,
                      objectFit: 'cover',
                      width: '100%',
                    },
                  },
                  '.social-item': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    padding: '10px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '10px',
                    figure: {
                      width: '100%',
                      height: '100%',
                      padding: '0',
                      marginBottom: '-2px',
                    },

                    '.social-icon': {
                      width: '22px',
                      height: '22px',
                    },
                  },
                  '.newsletter-section': {
                    marginTop: '20px',
                    height: '50px',
                    border: `1px solid ${theme.colors.gray[4]}`,
                    borderRadius: '16px',
                    position: 'relative',
                    '.mantine-rtl-InputWrapper-root': {
                      margin: '0px',
                      height: '100%',
                      borderBottom: '0',
                      '.mantine-rtl-Input-wrapper': {
                        height: '100%',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                      },
                    },
                    input: {
                      height: '100%',
                      color: 'white',
                      '::placeholder': {
                        color: theme.colors.gray[2],
                      },
                    },
                    button: {
                      position: 'absolute',
                      height: '40px',
                      left: '2px',
                      top: '2px',
                      minWidth: 'fit-content',
                    },
                  },
                }),
              }}
              // theme={{ colorScheme, background }}
              withGlobalStyles
              withNormalizeCSS
            >
              <ModalsProvider>
                <CustomFonts />

                {children}
              </ModalsProvider>
            </MantineProvider>
          </ColorSchemeProvider>
        </ThemeContextProvider>
      </ModalWithReducerProvider>
    </>
  );
}

// App.getInitialProps = async appContext => {
//     const appProps = await NextApp.getInitialProps(appContext)
//     return {
//         ...appProps,
//         colorScheme: getCookie("mantine-color-scheme", appContext.ctx) || "dark"
//     }
// }
