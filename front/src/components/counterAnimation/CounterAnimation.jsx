import CountUp, { useCountUp } from 'react-countup';
import Layout from '@/components/LayoutComponent';
import { Box, Flex, Grid, Text } from '@mantine/core';
import classes from '@/components/counterAnimation/CounterAnimation.module.scss';
import Bubble from '@/components/counterAnimation/Bubble';
import { pages } from 'public/assets/contentJson';
const CounterAnimation = ({ content }) => {
  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  const colorArray = ['social.5', 'social.3', 'social.4', 'social.2'];
  return (
    <>
      <Layout
        fluid
        bgFluid={'#F2F6FE'}
        className={classes.wrapper}
        containerClassName={`${classes.container} radius-xl`}
        bgLayout={pages?.counter_bg}
        pb="30px"
      >
        {content?.map((item, index) => (
          <Grid.Col sx={12} md={6} lg={3} key={index} mb="xl">
            <Box>
              <Flex
                fw="900"
                fz="36px"
                c={colorArray[index % colorArray.length]}
              >
                <Text component="span" fw="900">
                  +
                </Text>
                <Text component="span" fw="900">
                  {item?.unit}
                </Text>
                <CountUp end={item?.count} enableScrollSpy />
              </Flex>

              <Text component="p" fz="sm" c="primary.6" pr="xl">
                {item?.title}
              </Text>
            </Box>
          </Grid.Col>
        ))}
        <Bubble />
      </Layout>
    </>
  );
};

export default CounterAnimation;
