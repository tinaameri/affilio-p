import { createStyles, em } from '@mantine/core';

const useStyles = createStyles(() => ({
  circle: {
    position: 'absolute',
    borderRadius: '50%',
    animation: 'moveAround 4s linear infinite',
    transformStyle: 'preserve-3d',
    transform: 'translateZ(0)',
    perspectiveOrigin: '150% 50%',
    '&:nth-of-type(1)': {
      width: '212px',
      height: '212px',
      top: '150px',
      backgroundColor: ' rgba(5, 180, 117, 0.15)',
      opacity: '0.5',
      right: '-20px',
    },
    '&:nth-of-type(2)': {
      width: '55px',
      height: '55px',
      top: '190px',
      background:
        "url('/assets/images/background/border-orange.svg') no-repeat center",
      right: '5%',
    },

    '&:nth-of-type(3)': {
      width: '55px',
      height: '55px',
      top: '370px',
      background:
        "url('/assets/images/background/border-green.svg') no-repeat center",
      right: '3%',
    },

    '&:nth-of-type(4)': {
      width: '258px',
      height: '258px',
      top: '400px',
      background: 'rgba(64, 83, 213, 0.10)',
      opacity: 0.3,
      right: '45%',
    },

    '&:nth-of-type(6)': {
      width: 144,
      height: 144,
      top: 450,
      background: '#FFDA18',
      opacity: 0.2,
      right: '5%',
      [`@media (max-width: ${em(768)})`]: {
        display: 'none',
      },
    },

    '&:nth-of-type(7)': {
      width: 55,
      height: 55,
      top: 100,
      background:
        "url('/assets/images/background/border-orange.svg') no-repeat center",
      right: '94%',
      [`@media (max-width: ${em(768)})`]: {
        display: 'none',
      },
    },

    '&:nth-of-type(8)': {
      width: 55,
      height: 55,
      top: 200,
      background:
        "url('/assets/images/background/border-green.svg') no-repeat center",
      right: '92%',
      [`@media (max-width: ${em(768)})`]: {
        display: 'none',
      },
    },

    '&:nth-of-type(9)': {
      width: 138,
      height: 138,
      top: 100,
      background: 'rgba(5, 180, 117, 0.10)',
      right: '96%',
      [`@media (max-width: ${em(768)})`]: {
        display: 'none',
      },
    },

    '&:nth-of-type(10)': {
      width: 104,
      height: 104,
      top: 400,
      background: '#FFDA18',
      opacity: 0.3,
      right: '88%',
      [`@media (max-width: ${em(768)})`]: {
        display: 'none',
      },
    },
    '&:nth-of-type(11)': {
      width: 104,
      height: 104,
      top: 1360,
      background: '#FFDA18',
      opacity: 0.3,
      right: '100%',
      [`@media (max-width: ${em(768)})`]: {
        display: 'none',
      },
    },

    '&:nth-of-type(13)': {
      width: '55px',
      height: '55px',
      top: '800px',
      background:
        "url('/assets/images/background/border-green.svg') no-repeat center",
      right: '98%',
    },

    '&:nth-of-type(14)': {
      width: '258px',
      height: '258px',
      top: '500px',
      background: 'rgba(64, 83, 213, 0.10)',
      opacity: 0.3,
      right: '95%',
    },

    '&:nth-of-type(16)': {
      width: 144,
      height: 144,
      top: 1200,
      background: '#FFDA18',
      opacity: 0.2,
      right: '95%',
      [`@media (max-width: ${em(768)})`]: {
        display: 'none',
      },
    },

    '@keyframes moveAround': {
      '0%': {
        transform: 'translate(0, 0)',
      },

      '25%': {
        transform: 'translate(10px, 0)',
      },

      '50%': {
        transform: 'translate(10px, 10px)',
      },

      '75%': {
        transform: 'translate(0, 10px)',
      },

      '100%': {
        transform: 'translate(0, 0)',
      },
    },
  },
}));
export default function Bubble() {
  const { classes } = useStyles();

  const circleCount = 100;

  const circleDivs = Array.from({ length: circleCount }, (_, index) => (
    <>
      <div key={index} className={classes.circle}></div>
    </>
  ));
  return <section>{circleDivs}</section>;
}
