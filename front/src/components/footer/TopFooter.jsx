/* eslint-disable no-unused-vars */
import { Box, Container, Text, List, Grid, MediaQuery } from '@mantine/core';
import Logo from '@/components/Logo';
import Link from 'next/link';
import TrustLogo from '@/components/footer/TrustLogo';
import NewsletterInput from '../NewsletterInput';
import { pages } from 'public/assets/contentJson';
export default function TopFooter({ links, trust, logo, newsletter }) {
  // const { setActiveTab } = useThemeContext();
  // const handleRouteClick = async (route) => {
  //   //await setActiveTab(route);
  //   window.scrollTo({ top: 100, behavior: 'smooth' });
  // };

  // const handleDeactive = (event) => {
  //   event.preventDefault();
  // };
  return (
    <Box bg={pages?.blue_gradient_bg} pt="80px" pb="50" mih="400px">
      <Container size="1344px">
        <Grid spacing="48px">
          <Grid.Col style={{ minHeight: '50px' }} xs={12} md={12} lg={2} xl={2}>
            <Logo logo={logo} position="footer" />
            <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
              <Box>
                <TrustLogo items={trust} />
              </Box>
            </MediaQuery>
          </Grid.Col>
          <Grid.Col xs={12} md={12} lg={10} xl={10} px="sm">
            <Grid columns={5}>
              {links.map((item, idx) => (
                <Grid.Col key={idx} md={2} lg={1}>
                  <Text component="span" color="white" fw="700">
                    {item.title}
                  </Text>
                  <List listStyleType="none" size="sm" mt="lg">
                    {item?.links?.map((subItem, idx) => (
                      <List.Item
                        py="xs"
                        key={idx}
                        //onClick={() => handleRouteClick(subItem?.value)}
                      >
                        {subItem?.link && subItem?.type !== 'disable' && (
                          <Link prefetch={false} href={subItem?.link}>
                            <a
                              target={subItem.newPage ? '_blank' : '_self'}
                              // onClick={(e) => handleDeactive(e, subItem?.type)}
                            >
                              <Text
                                component="span"
                                color="gray.2"
                                fz="md"
                                sx={(theme) => ({
                                  '&:hover': {
                                    color: theme.colors.secondary[0],
                                  },
                                })}
                              >
                                {subItem?.title}
                              </Text>
                            </a>
                          </Link>
                        )}
                        {(subItem?.link === null ||
                          subItem?.type === 'disable') && (
                          <Text component="span" color="gray.2" fz="md">
                            {subItem?.title}
                          </Text>
                        )}
                      </List.Item>
                    ))}
                  </List>
                </Grid.Col>
              ))}
              <Grid.Col md={3} lg={2}>
                <NewsletterInput source="footer" newsletter={newsletter} />
              </Grid.Col>

              <MediaQuery largerThan="lg" styles={{ display: 'none' }}>
                <Grid.Col>
                  <TrustLogo items={trust} />
                </Grid.Col>
              </MediaQuery>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
