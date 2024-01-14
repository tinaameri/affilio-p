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
                    '#8CE969',
                    '#3D8423',
                    '#63B245',
                    '#D4F3C8',
                    '#E6F1E0 ',
                    '#ffffff',
                    'rgba(0, 0, 0, 0.87)',
                    '#F0F6ED',
                    '#F0F6ED',
                    '#F0F6ED',
                    '#F0F6ED',
                  ],
                  // 'secondary': ['0-main', '1-dark-hover', '2-light2',   '3-deep light',   '4-light' , '5-contrastText' , '6-text', '7-bg', ''],

                  secondary: [
                    '#6A9AE2',
                    '#0E1E57',
                    '#DCEAFF',
                    '#E9F2FF',
                    '#F2F6FD',
                    '#ffffff',
                    '#0F1743',
                    '#EFF5FF',
                    '#0E1E57',
                    '#FDF0E5',
                    '#FDF0E5',
                  ],
                  warning: [
                    '#ff9800',
                    '#ffb74d',
                    '#f57c00',
                    'rgba(0, 0, 0, 0.87)',
                    '#ff9800',
                    '#162059',
                    '#EBEEFC',
                    '#1B286F',
                    '#1B286F',
                    '#1B286F',
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
                    '#F5F7FB',
                    '#EAEEF6',
                    '#BCC9E2',
                    '#A9B5CB',
                    '#96A1B5',
                    '#8D97AA',
                    '#717988',
                    '#555A66',
                    '#42464F',
                    '#42464F',
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
                            fontSize: '36px',
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
                        caretColor: theme.colors.primary[6],
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
                        color: theme.colors.primary[6],
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
                        height: '50px',
                        padding: '0 10px',

                        minWidth: '120px',
                        width: 'auto',
                        borderRadius: '15px',
                        fontSize: '16px',
                        fontWeight: '700',
                        border: '1px solid #000',
                        top: '0',
                        right: '0',
                        transition: 'all .15s linear 0s',
                        position: 'relative',
                        display: 'inline-block',
                        //backgroundColor: theme.colors.primary[0],

                        //color: theme.colors.primary[6],

                        //boxShadow: `4px 4px 0 ${theme.colors.primary[6]}`,

                        // '&:hover': {
                        //   top: ' 3px',
                        //   left: '-3px',
                        //   boxShadow: `0px 0px 0 ${theme.colors.primary[6]}`,
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
                          fontWeight: '700',
                        },
                        [theme.fn.smallerThan('xl')]: {
                          height: '50px',
                          fontSize: '16px',
                          padding: '13px 32px',
                        },
                        [theme.fn.smallerThan('lg')]: {
                          height: '46px',
                          fontSize: '14px',
                          padding: '11px 24px',
                        },
                        [theme.fn.smallerThan('md')]: {
                          height: '42px',
                          fontSize: '14px',
                          padding: '9px 16px',
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
                    borderRadius: '10px',
                    backgroundColor: theme.colors.primary[0],
                    color: '#000',
                    width: '150px',
                    fontWeight: 900,
                    fontFamily: 'Yekan Bakh',
                    cursor: 'pointer',
                    '&-transparent': {
                      border: 'unset',
                      color: '#757575',
                      height: '50px',
                      padding: '9px 24px',
                      background: 'transparent',
                    },
                    '&-outline': {
                      background: 'transparent',
                      border: '1px solid #000',
                      color: '#000',
                      height: '50px',
                      padding: '9px 24px',
                      fontWeight: 900,
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

                    color: theme.colors.primary[6],

                    boxShadow: `-4px 4px 0 ${theme.colors.primary[6]}`,
                    '&:hover': {
                      top: ' 3px',
                      left: '-3px',
                      boxShadow: `0px 0px 0 ${theme.colors.primary[6]}`,
                      backgroundColor: theme.colors.primary[0],
                      color: theme.colors.primary[6],
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
                  '.fixed-pattern': {
                    '&:before': {
                      content: '""',
                      position: 'fixed',
                      left: '10px',
                      top: '0',
                      width: '100px',
                      height: '100%',
                      zIndex: 5,
                      backgroundImage: `url('/assets/images/adverge/home/left-patern.svg')`,
                      backgroundSize: 'cover',
                      [theme.fn.smallerThan('lg')]: {
                        display: 'none',
                      },
                    },
                  },
                  '.trust-logo': {
                    cursor: 'pointer',
                    borderRadius: '10px',
                    padding: '8px',
                    img: {
                      height: '100%',
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
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    },
                    '&-bottom': {
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'bottom',
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

                  '.login-main-box': {
                    minHeight: '100vh',
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                  },
                  'h1,h2,h3,h4,h5,h6': {
                    fontWeight: 900,
                    lineHeight: 'normal',
                    margin: 0,
                    padding: 0,
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
                      fontSize: '36px',
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
                      color: theme.colors.primary[6],
                      fontWeight: 700,
                    },
                  '.wrapperHeader .mantine-rtl-Burger-burger,.wrapperHeader .mantine-rtl-Burger-burger::before,.wrapperHeader .mantine-rtl-Burger-burger::after':
                    {
                      backgroundColor: theme.colors.primary[6],
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
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '5px',
                        borderRadius: '13px 13px 0px 0px',
                        bottom: '-1px',
                        right: '0',
                        backgroundColor: theme.colors.primary[1],
                      },
                    },
                  },
                  '.wrapperHeader .menu-link svg': {
                    stroke: theme.colors.primary[6],
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
                      stroke: theme.colors.primary[6],
                      color: theme.colors.primary[6],
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
                    color: theme.colors.primary[6],
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
                  '.text-white': {
                    color: 'white',
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
                    border: '1px solid #8D92A8',
                    borderRadius: '11px',
                  },
                  '.focus-radius input': {
                    width: '105%',
                    borderRadius: '50px',
                    '&:focus': {
                      borderRadius: '50px',
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
                  '.img-responsive': {
                    minWidth: '100%',
                    maxWidth: '100%',
                    height: 'auto',
                  },
                  '.newsletter-section': {
                    marginTop: '20px',
                    height: '50px',
                    border: '1px solid gray',
                    borderRadius: '5px',
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
                    },
                    button: {
                      position: 'absolute',
                      height: '40px',
                      left: '3px',
                      top: '3px',
                      borderRadius: '5px',
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
