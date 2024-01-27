import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  circle: {
    position: 'absolute',
    borderRadius: '50%',
    transformStyle: 'preserve-3d',
    transform: 'translateZ(0)',
    perspectiveOrigin: '150% 50%',
    ':nth-of-type(odd)': {
      animation: 'moveAround 4s linear infinite',
      backgroundColor: theme.colors.primary[0],
    },
    ':nth-of-type(even)': {
      animation: 'moveAroundReverse 4s linear infinite',
      backgroundColor: theme.colors.secondary[0],
    },
    '&:nth-of-type(1)': {
      width: '46px',
      height: '46px',
      top: '60%',
      opacity: '0.15',
      left: '-20%',
    },
    '&:nth-of-type(2)': {
      width: '40px',
      height: '40px',
      top: '90%',
      opacity: '0.15',
      left: '-10%',
    },

    '@keyframes moveAround': {
      '0%': {
        transform: 'translate(25px, 25px)',
      },

      '25%': {
        transform: 'translate(0, -25px)',
      },

      '50%': {
        transform: 'translate(0px, 0px)',
      },

      '75%': {
        transform: 'translate(25px, 0)',
      },

      '100%': {
        transform: 'translate(25px, 25px)',
      },
    },
    '@keyframes moveAroundReverse': {
      '0%': {
        transform: 'translate(0, 0)',
      },

      '25%': {
        transform: 'translate(-25px, 0)',
      },

      '50%': {
        transform: 'translate(-25px, -25px)',
      },

      '75%': {
        transform: 'translate(0, -25px)',
      },

      '100%': {
        transform: 'translate(0, 0)',
      },
    },
  },
}));
export default function Bubble() {
  const { classes } = useStyles();

  const circleCount = 10;

  const circleDivs = Array.from({ length: circleCount }, (_, index) => (
    <>
      <div key={index} className={classes.circle}></div>
    </>
  ));
  return <section>{circleDivs}</section>;
}
