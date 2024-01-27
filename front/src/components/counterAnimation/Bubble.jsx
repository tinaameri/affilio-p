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
      width: '46px',
      height: '46px',
      top: '25%',
      backgroundColor: theme.colors.primary[0],
      opacity: '0.15',
      right: '10%',
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

  const circleCount = 1;

  const circleDivs = Array.from({ length: circleCount }, (_, index) => (
    <>
      <div key={index} className={classes.circle}></div>
    </>
  ));
  return <section>{circleDivs}</section>;
}
