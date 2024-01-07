import { Box, Center, Text, Grid, Button, createStyles, Container, BackgroundImage } from '@mantine/core';
import Layout from '@/components/LayoutComponent';
import { useContext } from 'react'
import { ModalWithReducer } from "@/context/ModalProvider";
import { IconArrowRight } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { Zoom } from 'react-reveal';
import Image from 'next/image';
//import { textSplitter } from '@/utils/helpers';
//import CustomersCarousel from '@/components/CustomersCarousel';
//import Customers from './Customers';
import Markdown from '@/components/Markdown';
import { IMAGES } from '@/utils/constants';

const useStyles = createStyles((theme) => ({
    box: {
        borderRadius: '23px',
        position: 'absolute',
        bottom: '-100px',
        minHeight: '270px',
        '&:before,&:after': {
            content: "''",
            position: 'absolute',
            width: '80px',
            height: '79px',
            backgroundSize: 'cover',

            [theme.fn.smallerThan('xl')]: {
                content: 'unset'
            }
        },

        '&:before': {

            top: '-40px',
            right: '-40px',
            backgroundImage: `url(${IMAGES}/home/Vector-Banner-left.svg)`,
        },
        '&:after': {
            bottom: '-40px',
            left: '-40px',
            backgroundImage: `url(${IMAGES}/home/Vector-Banner-right.svg)`,

        }
    },



}));

export default function Banner({ title, description, src, image, bgColor, color, button, bgBtn, py, customers, lgWidth, xlWidth, imgHeight, wrapperBgColor }) {
    const { dispatch } = useContext(ModalWithReducer);
    const largerScreen = useMediaQuery('(min-width: 600px)');
    const smallerScreen = useMediaQuery('(max-width: 600px)');
    const { classes } = useStyles();

    return (
        <Box mih='400px' >
            <BackgroundImage
                src={largerScreen && src}
                bgr="no-repeat"
                bgp="left"
                bgsz="cover"
                //pos='relative'
                sx={{ zIndex: 20 }}
            >

                <Box mih='300px' bg='secondary.8'>
                    {/* <Customers customers={customers} className='white-images' /> */}
                    <Zoom>
                        <Container size='1200px' pos='relative'>

                            <Layout py={py ?? (smallerScreen ? '40px' : '30px')} className={`${classes.box} shadow-left`} bgColor='primary.7' >
                                <Grid.Col xs={12} sm={12} md={image ? 6 : 12}
                                    lg={image ? 6 : 12} xl={image ? 6 : 12}
                                    m='auto' >
                                    <Text color={color} fw='800' align='center'>
                                        <Markdown text={title} />
                                    </Text>

                                </Grid.Col>
                                {(button?.length || description) &&
                                    <Grid.Col xs={12} sm={12} md={image ? 6 : 12} lg={image ? 6 : 10} xl={image ? 6 : 10} mx='auto'>
                                        <Text color={color} align='center' fz='lg' fw='500'>
                                        <Markdown text={description} />
                                        </Text>
                                        {button?.length && (
                                            <Center>
                                                <Button mt='md' width='250px' onClick={() => { dispatch({ type: "DEMO" }) }} color={bgBtn} rightIcon={<IconArrowRight size="23px" />}>
                                                    <span>{button}</span>
                                                </Button>
                                            </Center>)}

                                    </Grid.Col>}

                                {image &&
                                    <Grid.Col xs={12} sm={12} md={6} lg={6} xl={6} mx='auto' mt={largerScreen && '100px'}>
                                        <Box pos='relative' h={imgHeight ?? '538px'} w='100%'>
                                            <Image
                                                layout='fill'
                                                objectFit='contain'
                                                src={image}
                                                alt={title}
                                            /></Box>
                                    </Grid.Col>
                                }

                            </Layout>

                        </Container>
                    </Zoom>
                </Box>
            </BackgroundImage >
        </Box >
    );
}