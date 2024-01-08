import { Grid, Box } from '@mantine/core';
//import Image from 'next/image';
import Layout from '@/components/LayoutComponent';

// import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-cards';
import Heading from '@/components/Heading';
import CardCarousel from '@/components/cardCarousel/CardCarousel';

export default function Testimonial({ testimonial, bgSection }) {
  return (
    <>
      <Box className="testimonial cover-center" bg={bgSection} mt="12px">
        <Layout py="40px">
          <Grid.Col xs={12}>
            <Heading
              title={testimonial?.heading_title}
              description={testimonial?.heading_description}
            />
          </Grid.Col>
          <Grid.Col xs={12} p="0">
            <CardCarousel cardItems={testimonial.slide} />
          </Grid.Col>
        </Layout>
      </Box>
    </>
  );
}
