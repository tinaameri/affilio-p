import { useThemeContext } from '@/context/theme';
import { Container, Tabs, Box, Title, Text, Flex, Grid } from '@mantine/core';
import { IconWallet, IconShoppingCart, IconPlane } from '@tabler/icons-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { content } from 'public/assets/contentJson';
// import CustomersCarousel from '@/components/CustomersCarousel';
import Customers from '@/components/Customers';
import Heading from '@/components/Heading';

export default function TabsTopImg({ imgHeight }) {
  const router = useRouter();
  const header = content?.industry?.tabs.carousel_header;
  const tabsContent = content?.industry?.tabs?.tabs_content;
  //const [activeTab, setActiveTab] = useState(tabsContent[0]?.value); // Initialize activeTab state
  //const customers = content?.industry?.tabs?.customers_carousel

  const { activeTab, setActiveTab } = useThemeContext();
  const getIconForTab = (icon) => {
    switch (icon) {
      case 'plane':
        return <IconPlane size="40px" />;
      case 'wallet':
        return <IconWallet size="40px" />;
      case 'shopping':
        return <IconShoppingCart size="40px" />;
      default:
        return null;
    }
  };
  // useEffect(() => {
  //     setActiveTab(router.query.activeTab || defaultTabValue);
  //     { console.log(router.query.activeTab, activeTab, '>>>') }

  // }, [router.query.activeTab, defaultTabValue]);

  // useEffect(() => {
  //     if (window.location.hash.length > 0) {
  //       scrollIntoView(window.location.hash.substring(1));
  //     }
  //   }, []);
  // const handleChangeTab = (tabValue) => {
  //     router.push(`/industry#${tabValue}`);
  //     setActiveTab(tabValue);
  //     { console.log(router.query.activeTab, activeTab, '>>>') }

  // }
  return (
    <Container size="xl" py="xl">
      <Tabs
        value={activeTab}
        onTabChange={(value) => {
          router.push(`/industry#${value}`);
          setActiveTab(value);
        }}
        color="secondary.0"
        //defaultValue={tabsContent[0]?.value}
      >
        <Tabs.List grow position="center">
          {tabsContent?.map((tab, index) => (
            <Tabs.Tab
              key={index}
              value={tab?.value}
              className="icon-secondary-color"
            >
              <Flex
                mih={109}
                justify="space-around"
                align="center"
                direction="column"
              >
                {getIconForTab(tab?.icon)}
                <Text component="span" fw="600" fz="lg">
                  {tab?.title}
                </Text>
              </Flex>
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {tabsContent?.map((tabs, index) => (
          <Tabs.Panel key={index} value={tabs?.value} pt="xs" id={tabs?.value}>
            {tabs?.header?.map((item, idx) => (
              <Box key={idx} mb="xl" pt="lg">
                <Title color="primary.1" order={3} py="xl">
                  {item?.title}
                </Title>
                <Text color="primary.1">{item?.description}</Text>
              </Box>
            ))}
            <Grid py="xl">
              <Grid.Col sm={12} xs={12} md={12} lg={6} xl={6}>
                {tabs?.main?.map((tab, index) => (
                  <Box key={index} mih={50} mb="xl" pb="md">
                    <Title order={5} color="secondary.0" pb="md">
                      {tab?.title}
                    </Title>
                    <Text component="p" fz="md" fw="400" color="primary.1">
                      {tab?.description}
                    </Text>
                  </Box>
                ))}
              </Grid.Col>
              <Grid.Col sm={12} xs={12} md={12} lg={6} xl={6}>
                {tabs?.header?.map((item, index) => (
                  <Box
                    key={index}
                    pos="relative"
                    h={imgHeight ?? '538px'}
                    w="100%"
                  >
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src={item?.img}
                      alt=""
                    />
                  </Box>
                ))}
              </Grid.Col>
              <Grid.Col sm={12}>
                <Box pb="80px">
                  <Heading
                    title={header}
                    headline={3}
                    color="primary.1"
                    py="40px"
                  />
                  <Customers customers={tabs?.customers_carousel} />
                </Box>
              </Grid.Col>
            </Grid>
          </Tabs.Panel>
        ))}
      </Tabs>
    </Container>
  );
}
