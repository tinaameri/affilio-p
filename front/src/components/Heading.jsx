import { Title, Center, Grid, Text,Image } from '@mantine/core';
import { Fade } from 'react-reveal';

export default function Heading({ title, description,without_image,text_light,className }) {
  return (
    <>
      <Grid.Col xs={12} pt="50px" mb={!description ? '50px' : '10px'} className={className}>
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
              <Title order={2} ta="center" color={text_light ? 'primary.6':'primary.4'}>
                {title}
              </Title>
              {without_image && <Center mt="lg">
                <Image
                  src={'/assets/images/heading.svg'}
                  width={34}
                  height={30}
                  alt={title}
                  sx={{opacity:text_light  && '0.2'}}
                />
              </Center>}
  
            </Grid.Col>
          </Grid>
        </Fade>
      </Grid.Col>
      {description && (
        <Grid.Col xs={12} mt="xl" mb="50px" >
          <Text component="p" fz="lg" ta="center" color={text_light ? 'primary.6':'primary.4'}>
            {description}
          </Text>
        </Grid.Col>
      )}
    </>
  );
}
