import { Title, Center, Grid, Text } from '@mantine/core';
import Image from 'next/image';
import { Fade } from 'react-reveal';

export default function Heading({ title, description }) {
  return (
    <>
      <Grid.Col xs={12} pt="50px" mb={!description ? '50px' : '10px'}>
        <Fade top distance="15%" duration={1000}>
          <Grid>
            <Grid.Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              m="auto"
              align="center"
            >
              <Title order={2} ta="center">
                {title}
              </Title>
              <Center mt="lg">
                <Image
                  src="/assets/images/adverge/bottom-heading.svg"
                  width={213}
                  height={12}
                  alt={title}
                />
              </Center>
            </Grid.Col>
          </Grid>
        </Fade>
      </Grid.Col>
      {description && (
        <Grid.Col xs={12} mt="xl" mb="50px">
          <Text component="p" fz="lg" ta="center">
            {description}
          </Text>
        </Grid.Col>
      )}
    </>
  );
}
