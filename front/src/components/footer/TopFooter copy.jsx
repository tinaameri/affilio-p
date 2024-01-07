import { Box, Title, Text, List, Grid, Paper, Flex } from '@mantine/core'
import Logo from '@/components/Logo'
import Link from 'next/link'
import { useThemeContext } from '@/context/theme';
import Layout from '../LayoutComponent';
export default function TopFooter({ politics, channels, contact, services, company, products, target,trust,footerLogo,headerLogo,altLogo }) {

    const { setActiveTab } = useThemeContext();
    const handleRouteClick = async (route) => {
        await setActiveTab(route);
        window.scrollTo({ top: 600, behavior: 'smooth' });

    };

    const handleDeactive = (event) => {
        event.preventDefault()
    }
    const footerMapper = (footer, isProduct, deactive) => {
        return footer?.map((items, index) => (
            items.map((item, idx) => (

                <Grid.Col key={idx} md={6} lg={4} xl={4}>
                    {/* <Grid.Col key={idx} xs={2.5} sm={2.5} md={2.5} lg={1} xl={1}> */}
                    <Title order={5} color='white'>
                        {item.menu}
                    </Title>
                    <List listStyleType='none' size='sm'>
                        {item?.subMenu?.map((subItem, idx) => (
                            <List.Item py='xs' key={idx} onClick={() => !deactive ? handleRouteClick(subItem?.value) : null}>
                                <Link prefetch={false} href={subItem?.link} >
                                    <a target={isProduct ? '_blank' : '_self'} onClick={(e) => deactive ? handleDeactive(e) : null}
                                    ><Text component='span' color='white' sx={(theme) => (!deactive ? {

                                        '&:hover': {
                                            color: theme.colors.secondary[1],
                                        },
                                    } : { cursor: 'auto' })}>{subItem?.title}</Text></a>
                                </Link>
                            </List.Item>
                        ))}
                    </List>
                </Grid.Col>

            ))
        ))
    }

    return (
        <Box bg='#0E1E57' py='80px'>
            <Layout>
                {/* <Grid
                    columns={4}
                    //columns={3}
                    spacing="48px"

                > */}

                <Grid.Col style={{ minHeight: '50px' }} md={3} lg={3} xl={3}>
                    {/* <Grid.Col style={{ minHeight: '50px' }} md={1} lg={1} xl={1}> */}
                    <Logo type='white' footerLogo={footerLogo} headerLogo={headerLogo} altLogo={altLogo} />
                    <Flex>
                     {trust.map((item,index)=>(
                         <Paper w='100px' h='100px' bg={item?.image} key={index}>
                             <Link href='#'>
                                 <a></a>
                             </Link>
                         </Paper>
                     ))}
               
                    </Flex>
                </Grid.Col>
                <Grid.Col md={9} lg={9} xl={9}>
                    <Grid>

                        {/* {footerMapper(channels)} */}
                        {/* {footerMapper(products, true, false)} */}
                        {footerMapper(company, false, false)}
                        {footerMapper(services, false, false)}
                        {footerMapper(contact, false, false)}
                        {/* {footerMapper(politics, false, true)} */}
                    </Grid>
                </Grid.Col>


                {/* </Grid> */}
            </Layout>

        </Box >
    )
}
