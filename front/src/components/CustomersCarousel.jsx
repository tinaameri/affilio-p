import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Box, Flex, Title, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
//import Image from 'next/image';
import 'swiper/css/free-mode';
import { pages } from 'public/assets/contentJson';
import { IMAGES_BASE_UR } from '@/api/clinet';

export default function CustomersCarousel({ customers }) {
  const midScreen = useMediaQuery('(max-width: 64em) and (min-width: 37.5em)');

  return (
    <Container fluid bg={pages?.bg_card} className="seller">
      <Container pt="50px" size={midScreen ? 'md' : 'xl'}>
        <Title order={2} ta="center" c="white">
          {customers?.heading_title}
        </Title>
        <Box mt="50px">
          <Swiper
            //slidesPerView={4}
            spaceBetween={0}
            freeMode={true}
            // autoplay={{
            //     delay: 1000,
            //     disableOnInteraction: false,
            //     pauseOnMouseEnter: true,

            // }}
            breakpoints={{
              400: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
                //spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                //spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                //spaceBetween: 40,
              },
            }}
            lopp
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            {/* {console.log(customers?.seller,'>>>seller')} */}
            {customers?.seller?.map((item, index) => (
              <SwiperSlide key={index}>
                <Flex
                  //justify="space-around"
                  align="center"
                  className="customer-item"
                >
                  <Image
                    height="40px"
                    fit="contain"
                    className="white-images"
                    alt={item?.attributes?.alt}
                    src={`${IMAGES_BASE_UR}${item?.attributes?.url}`}
                  />
                </Flex>
              </SwiperSlide>
            ))}
            {/* <SwiperSlide style={{ background: 'red' }}>Slide 1</SwiperSlide>
                        <SwiperSlide style={{ background: 'red' }}>Slide 3</SwiperSlide>
                        <SwiperSlide style={{ background: 'red' }}>Slide 2</SwiperSlide>
                        <SwiperSlide style={{ background: 'red' }}>Slide 4</SwiperSlide> */}
          </Swiper>
          {/* <Swiper
                        className={`${className} customer-wrapper`}
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        centeredSlides
                        //loop

                        // breakpoints={{
                        //     640: {
                        //         slidesPerView: 2,
                        //         spaceBetween: 20,
                        //     },
                        //     768: {
                        //         slidesPerView: 4,
                        //         spaceBetween: 40,
                        //     },
                        //     1024: {
                        //         slidesPerView: 6,
                        //         spaceBetween: 40,
                        //     },
                        // }}

                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: true,
                        }}
                        modules={[Autoplay, FreeMode]}


                    >
                        {customers?.map((item, index) => (
                            <SwiperSlide key={index} className="customer-item">
                                <Box>
                                    <Image height='50px' fit='contain' width={item?.attributes?.width}
                                        alt={item?.attributes?.alt} src={`${IMAGES_BASE_UR}${item?.attributes?.url}`} />
                                </Box>


                            </SwiperSlide>
                        ))}
                    </Swiper> */}
        </Box>
      </Container>
    </Container>
  );
}
