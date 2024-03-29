/* eslint-disable no-unused-vars */
import { Container, Accordion, Box, createStyles, Text } from '@mantine/core';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useThemeContext } from '@/context/theme';
import TrustLogo from '@/components/footer/TrustLogo';
import NewsletterInput from '../NewsletterInput';
import { pages } from 'public/assets/contentJson';
const useStyles = createStyles((theme) => ({
  //TODO: change style for mantine v7
  control: {
    ...theme.fn.hover({
      backgroundColor: theme.colors.primary[4],
      color: 'white',
    }),
  },
  item: {
    background: pages?.blue_gradient_bg,

    borderBottom: '1px solid white',
  },
  label: {
    color: 'white!important',

    fontWeight: 700,
  },
  content: {
    color: 'white',
    fontSize: '14px',
    paddingLeft: '40px',
  },
  panel: {
    color: 'white',
  },
  chevron: {
    color: 'white',
  },
}));
export default function AccordionFooter({ links, trust, logo, newsletter }) {
  const [show, setShow] = useState(false);
  const { setActiveTab } = useThemeContext();

  const handleClose = async (tabValue) => {
    setShow(false);
    await setActiveTab(tabValue);
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };
  const handleOpen = () => {
    setShow(true);
  };

  useEffect(() => {
    return () => {
      setShow(false);
    };
  }, []);

  const { classes } = useStyles();

  return (
    <Box bg={pages?.blue_gradient_bg} py="45px" mih="480px">
      <Container size="xl">
        <Logo position="footer" logo={logo} />
        <Box bg="primary.1">
          <Accordion classNames={classes}>
            {links.map((item) => (
              <Accordion.Item key={item.id} value={item?.id}>
                <Accordion.Control onClick={handleOpen}>
                  <span> {item?.title}</span>
                </Accordion.Control>
                {item?.links?.map((subItem, idx) => (
                  <Accordion.Panel
                    key={idx}
                    onClick={() => handleClose(subItem?.value)}
                  >
                    {subItem?.link ? (
                      <Link prefetch={false} href={subItem?.link}>
                        <a
                          target={subItem?.newPage ? '_blank' : '_self'}
                          aria-label={subItem?.title}
                        >
                          <Text
                            component="span"
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
                    ) : (
                      <Text
                        component="span"
                        sx={(theme) => ({
                          '&:hover': {
                            color: theme.colors.secondary[1],
                          },
                        })}
                      >
                        {subItem?.title}
                      </Text>
                    )}
                  </Accordion.Panel>
                ))}
              </Accordion.Item>
            ))}
          </Accordion>
        </Box>
        <TrustLogo items={trust} />
        <NewsletterInput source="footer" newsletter={newsletter} />
      </Container>
    </Box>
  );
}
