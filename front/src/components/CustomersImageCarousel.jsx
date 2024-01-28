import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Grid } from '@mantine/core';
//import Image from 'next/image';
import { IMAGES_BASE_UR } from '@/api/clinet';
import 'swiper/css/free-mode';
import Heading from '@/components/Heading';
import { pages } from 'public/assets/contentJson';
import Layout from './LayoutComponent';

export default function CustomersCarousel({ customers, heading_title }) {
  return (
    <Layout
      fluid
      bgFluid={pages?.bg_caroucel_image}
      sxFluid={{ position: 'relative', zIndex: '-1' }}
      py='xl'
    >
      <Heading title={heading_title} />
      <Grid.Col xs={12}>
        <Box>
          <Swiper
            //slidesPerView={6}
            //spaceBetween={10}
            freeMode={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              400: {
                slidesPerView: 2,
                spaceBetween: 40,
              },

              660: {
                slidesPerView: 3,
                //spaceBetween: 40,
              },
              887: {
                slidesPerView: 4,
                //spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                //spaceBetween: 40,
              },
            }}
            lopp
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            {customers?.map((item, index) => (
              <SwiperSlide key={index}>
                <Box pb="50px" h="150px" className="flex-center">
                  <figure className="flex-center customer-box">
                    <img
                      height="auto"
                      width="75%"
                      loading="lazy"
                      //className="white-images"
                      alt={item?.attributes?.alt}
                      src={`${IMAGES_BASE_UR}${item?.attributes?.url}`}
                    />
                  </figure>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Grid.Col>
    </Layout>
  );
}
