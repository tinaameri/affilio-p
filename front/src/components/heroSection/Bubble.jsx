import { createStyles, em } from '@mantine/core';

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
      top: '60%',
      backgroundColor:theme.colors.primary[0],
      opacity: '0.15',
      right: '10%',
    },
    '&:nth-of-type(2)': {
      width: '30px',
      height: '30px',
      top: '30%',
      background:
      theme.colors.secondary[0],
      left: '5%',
      opacity:'0.26'
    },

    '&:nth-of-type(3)': {
      width: '65px',
      height: '65px',
      top: '100%',
      backgroundColor:theme.colors.primary[0],
      left: '8%',
      opacity: '0.15',

    },


    '@keyframes moveAround': {
      '0%': {
        transform: 'translate(0, 0)',
      },

      '25%': {
        transform: 'translate(15px, 0)',
      },

      '50%': {
        transform: 'translate(15px, 15px)',
      },

      '75%': {
        transform: 'translate(0, 15px)',
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
