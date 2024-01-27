import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  circle: {
    position: 'absolute',
    borderRadius: '50%',
    animation: 'moveAround 4s linear infinite',
    transformStyle: 'preserve-3d',
    transform: 'translateZ(0)',
    perspectiveOrigin: '150% 50%',
    '&:nth-of-type(1)': {
      width: '48px',
      height: '48px',
      top: '80%',
      backgroundColor: theme.colors.secondary[0],
      opacity: '0.15',
      left: '-20%',
    },
    '&:nth-of-type(2)': {
      width: '75px',
      height: '75px',
      top: '20%',
      backgroundColor: theme.colors.primary[0],
      opacity: '0.15',
      left: '-30%',
    },

    '@keyframes moveAround': {
      '0%': {
        transform: 'translate(0, 0)',
      },

      '25%': {
        transform: 'translate(25px, 0)',
      },

      '50%': {
        transform: 'translate(25px, 25px)',
      },

      '75%': {
        transform: 'translate(0, 25px)',
      },

      '100%': {
        transform: 'translate(0, 0)',
      },
    },
  },
}));
export default function Bubble() {
  const { classes } = useStyles();

  const circleCount = 2;

  const circleDivs = Array.from({ length: circleCount }, (_, index) => (
    <>
      <div key={index} className={classes.circle}></div>
    </>
  ));
  return <section>{circleDivs}</section>;
}
