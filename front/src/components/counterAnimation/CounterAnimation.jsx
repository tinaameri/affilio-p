import CountUp, { useCountUp } from 'react-countup';
import Layout from '@/components/LayoutComponent';
import { Box, Flex, Grid, Text } from '@mantine/core';
import Heading from '@/components/Heading';
import classes from '@/components/counterAnimation/CounterAnimation.module.scss';
import Bubble from '@/components/counterAnimation/Bubble';
const CounterAnimation = ({ content, heading_title, heading_description }) => {
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
      className={classes.wrapper}
      containerClassName={`${classes.container} radius-xl`}
      bgLayout={`radial-gradient(50% 50% at 50% 50%, #173466 0%, #11264B 100%)`}
      pb="100px"
    >
      {heading_title && (
        <Heading
          title={heading_title}
          description={heading_description}
          className="text-white"
          without_image={false}
        />
      )}

      {content?.map((item, index) => (
        <Grid.Col sx={12} md={6} lg={3} key={index} mb="xl">
          <Box>
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
            </Box>
            <Text component="p" fz="sm" c="primary.6">
              {item?.title}
            </Text>
          </Box>
        </Grid.Col>
      ))}
          <Bubble/>
    </Layout>

    </>
  );
};

export default CounterAnimation;
