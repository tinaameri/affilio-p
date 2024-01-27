// import Search from '@/components/blog/Search'
import Layout from '@/components/LayoutComponent';
import Search from '@/components/blog/Search';
import { Grid, Title, Text, Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { pages } from 'public/assets/contentJson';

export default function TopHeader({
  heading_title,
  heading_description,
  input_placeholder,
  button,
}) {
  const smallerXsScreen = useMediaQuery('(max-width: 22.5em)');
  const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  const header_bg = pages?.header_blog;
  return (
    <>
      <Container fluid bg={header_bg} pb={smallerLgScreen ? '30px' : '80px'}>
        <Layout
          mt={smallerXsScreen ? '66px' : smallerLgScreen ? '80px' : '70px'}
          pt={smallerLgScreen ? '40px' : '90px'}
        >
          <Grid.Col xs={12} ta="center">
            <Title order={1} className="icon-bottom" color="#252D31">
              {heading_title}
            </Title>
          </Grid.Col>
          <Grid.Col xs={12} sm={12} md={12} lg={9} mx="auto" ta="center">
            <Text
              component="p"
              sx={{ opacity: '0.8' }}
              color="#252D31"
              my={smallerLgScreen ? 'xs' : 'xl'}
            >
              {heading_description}
            </Text>
          </Grid.Col>
        </Layout>
        <Search button={button} input_placeholder={input_placeholder} />
      </Container>
    </>
  );
}
