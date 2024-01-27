import { Title, Grid, Text } from '@mantine/core';
import { Fade } from 'react-reveal';

export default function Heading({ title, description, text_light, className }) {
  return (
    <>
      <Grid.Col
        xs={12}
        pt="50px"
        mb={!description ? '50px' : '10px'}
        className={className}
      >
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
              <Title
                order={2}
                ta="center"
                color={text_light ? 'primary.6' : 'primary.4'}
                className="icon-bottom"
              >
                {title}
              </Title>
            </Grid.Col>
          </Grid>
        </Fade>
      </Grid.Col>
      {description && (
        <Grid.Col xs={12} mt="xl" mb="50px">
          <Text
            component="p"
            fz="lg"
            ta="center"
            color={text_light ? 'primary.6' : 'primary.4'}
          >
            {description}
          </Text>
        </Grid.Col>
      )}
    </>
  );
}
