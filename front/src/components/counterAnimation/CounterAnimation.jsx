import CountUp, { useCountUp } from 'react-countup';
import Layout from '../LayoutComponent';
import { Box, Flex, Grid, Text } from '@mantine/core';
import Heading from '@/components/Heading';

const CounterAnimation = ({ content, heading_title, heading_description }) => {
  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <Layout pb="100px">
      {heading_title && (
        <Heading title={heading_title} description={heading_description} />
      )}
      {content?.map((item, index) => (
        <Grid.Col sx={12} md={6} lg={3} key={index}>
          <Box>
            <Box>
              <Flex fw="900" fz="30px">
                <Text component="span">{item?.unit}</Text>
                <CountUp end={item?.count} enableScrollSpy />
                <Text component="span">+</Text>
              </Flex>
            </Box>
            <Text component="p">{item?.title}</Text>
          </Box>
        </Grid.Col>
      ))}
    </Layout>
  );
};

export default CounterAnimation;
