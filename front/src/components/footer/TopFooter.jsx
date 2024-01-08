import { Box, Container, Text, List, Grid, Title } from '@mantine/core';
import Logo from '@/components/Logo';
import Link from 'next/link';
//import { useThemeContext } from '@/context/theme';
import TrustLogo from '@/components/footer/TrustLogo';
export default function TopFooterNew({ links, trust, logo }) {
  //const { setActiveTab } = useThemeContext();
  // const handleRouteClick = async (route) => {
  //   await setActiveTab(route);
  //   window.scrollTo({ top: 600, behavior: 'smooth' });
  // };

  // const handleDeactive = (event) => {
  //   event.preventDefault();
  // };

  return (
    <Box bg="secondary.1" py="40px">
      <Container size="1344px">
        <Grid columns={6} spacing="48px">
          <Grid.Col style={{ minHeight: '50px' }} sm={12} md={3} lg={2} xl={2}>
            <Logo logo={logo} position="footer" />
            <TrustLogo items={trust} />
          </Grid.Col>
          <Grid.Col sm={6} md={3} lg={4} xl={4}>
            <Grid>
              {links.map((item, idx) => (
                <Grid.Col key={idx} sm={6} md={6} lg={4} xl={4}>
                  <Title order={5} color="white">
                    {item.title}
                  </Title>
                  <List listStyleType="none" size="sm">
                    {item?.links?.map((subItem, idx) => (
                      <List.Item
                        py="10px"
                        key={idx}
                        //onClick={() => handleRouteClick(subItem?.value)}
                      >
                        <Link prefetch={false} href={subItem?.link}>
                          <a
                            target={subItem.newPage ? '_blank' : '_self'}
                            //onClick={(e) => handleDeactive(e)}
                          >
                            <Text
                              component="span"
                              color="#fff"
                              fw="400"
                              sx={(theme) => ({
                                '&:hover': {
                                  color: theme.colors.primary[0],
                                },
                              })}
                            >
                              {subItem?.title}
                            </Text>
                          </a>
                        </Link>
                      </List.Item>
                    ))}
                  </List>
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
