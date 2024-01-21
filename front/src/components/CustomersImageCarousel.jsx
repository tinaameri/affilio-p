import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Center, Box, Image, Paper, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
//import Image from 'next/image';
import { IMAGES_BASE_UR } from '@/api/clinet';
import 'swiper/css/free-mode';
import Heading from '@/components/Heading';

export default function CustomersCarousel({ customers,heading_title }) {
  const midScreen = useMediaQuery('(max-width: 64em) and (min-width: 37.5em)');
  return (
    <Container fluid bg="/assets/bg/bg-blur-caroucel.png" className="home">
      <Container pt="50px" size={midScreen ? 'md' : 'xl'}>
        <Grid>
        <Heading title={heading_title} />
        </Grid>
        <Box>
          <Swiper
            slidesPerView={6}
            //spaceBetween={10}
            freeMode={true}
            // pagination={{
            //     clickable: true
            // }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            lopp
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            {customers?.map((item, index) => (
              <SwiperSlide key={index}>
                <Box py='xl' h='200px'>
         
                  <figure className='flex-center customer-box'>
                    <img
                      height="auto"
                      width='75%'
                      loading='lazy'
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
      </Container>
    </Container>
  );
}
