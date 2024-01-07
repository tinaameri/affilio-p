import { Autoplay, FreeMode } from 'swiper/modules';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Center, Box, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
//import Image from 'next/image';
import { IMAGES_BASE_UR } from '@/api/clinet';
import 'swiper/css/free-mode';

export default function CustomersCarousel({ customers, className, slidesPerView, bgSection }) {

    const midScreen = useMediaQuery('(max-width: 64em) and (min-width: 37.5em)')
    return (
        <Container fluid bg='secondary.8' className='home'>
            <Container pt='50px' size={midScreen ? 'md' : 'xl'}
            >

                <Box >
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
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
                                <Center>
                                    <Image height='40px' fit='contain' className='white-images'
                                        alt={item?.attributes?.alt} src={`${IMAGES_BASE_UR}${item?.attributes?.url}`} />
                                </Center>


                            </SwiperSlide>
                        ))}
                      
                    </Swiper>
                   
                </Box>

            </Container>
        </Container>

    );
}