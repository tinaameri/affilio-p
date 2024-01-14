/* eslint-disable no-unused-vars */
import {
  Box,
  Container,
  Text,
  List,
  Grid,
  TextInput,
  Button,
} from '@mantine/core';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { useThemeContext } from '@/context/theme';
import TrustLogo from '@/components/footer/TrustLogo';
import { useForm } from '@mantine/form';
import ButtonComponent from '../Button';
import NewsletterInput from '../NewsletterInput';
export default function TopFooter({ links, trust, logo, newsletter, source }) {
  // const { setActiveTab } = useThemeContext();
  // const handleRouteClick = async (route) => {
  //   //await setActiveTab(route);
  //   window.scrollTo({ top: 100, behavior: 'smooth' });
  // };

  // const handleDeactive = (event) => {
  //   event.preventDefault();
  // };

  return (
    <Box bg="secondary.1" py="80px" mih="400px">
      <Container size="1344px">
        <Grid spacing="48px">
          <Grid.Col style={{ minHeight: '50px' }} xs={12} md={12} lg={2} xl={2}>
            <Logo logo={logo} position="footer" />
            <TrustLogo items={trust} />
          </Grid.Col>
          <Grid.Col xs={12} md={12} lg={10} xl={10} px="sm">
            <Grid columns={5}>
              {links.map((item, idx) => (
                <Grid.Col key={idx} md={2} lg={1}>
                  <Text component="span" color="gray.5">
                    {item.title}
                  </Text>
                  <List listStyleType="none" size="sm">
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
                                color="white"
                                sx={(theme) => ({
                                  '&:hover': {
                                    color: theme.colors.secondary[1],
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
                          <Text component="span" color="white">
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
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
