import {
  Card,
  Flex,
  Text,
  Title,
  Box,
  Grid,
  Loader,
  Center,
} from '@mantine/core';
import Link from 'next/link';
import { ImageLoader, TxtLoader } from '@/components/blog/Loader';
import { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { IMAGES_BASE_UR } from '@/api/clinet';

const getSlug = (title) => {
  if (title) {
    return title.replace(/ /g, '_');
  }
};

export default function BlogCard(props) {
  const {
    title,
    categories,
    date,
    slug,
    img,
    latestTxt,
    latestImg,
    imgHeight,
    orderImg,
    imgAlign,
    dateDisplay,
  } = props;
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let postDate = new Date(date).toLocaleDateString('fa-IR', options);
  const [loadingPost, setLoadingPost] = useState(false);
  const toggleLoader = () => {
    setLoadingPost(true);

    setTimeout(() => setLoadingPost(false), 2300);
  };
  return (
    <Zoom>
      <Card
        padding="24px 17px 5px 17px"
        bg="white"
        radius="24px"
        mt="md"
        onClick={() => toggleLoader()}
        sx={(theme) => ({
          border: `1px solid ${theme.colors.gray[2]}`,
          borderRadius: '15px',
          '&:hover .mantine-rtl-Title-root': {
            color: theme.colors.primary[1],
          },
        })}
      >
        <Link href={'/blog/post/' + getSlug(slug)}>
          <a aria-label={title}>
            <Grid>
              <Grid.Col
                xs={12}
                sm={12}
                md={latestImg ?? 12}
                lg={latestImg ?? 12}
                xl={latestImg ?? 12}
                ta={imgAlign ?? 'center'}
                py="0"
                order={orderImg}
                h={imgHeight ?? '175px'}
                mb="17px"
              >
                <Center
                  mb="20px"
                  h="100%"
                  sx={{ overflow: 'hidden', borderRadius: '10px' }}
                  //className='object-fit-blog-card'
                >
                  {loadingPost && (
                    <Loader
                      size="xl"
                      color="primary"
                      sx={{
                        position: 'absolute',
                        top: '24%',
                        left: '41%',
                        zIndex: 9,
                      }}
                    />
                  )}
                  {img ? (
                    <figure>
                      <img
                        className="img-responsive"
                        loading="lazy"
                        alt="title"
                        src={`${IMAGES_BASE_UR}${img}`}
                      />
                    </figure>
                  ) : (
                    <ImageLoader imgHeight={200} />
                  )}
                </Center>
              </Grid.Col>
              <Grid.Col
                xs={12}
                sm={12}
                md={latestTxt ?? 12}
                lg={latestTxt ?? 12}
                xl={latestTxt ?? 12}
                pl="15px"
                py="0"
                pos="relative"
              >
                <Box mih="133px" sx={{ overflow: 'hidden' }}>
                  {title ? (
                    <>
                      <Title order={6} lineClamp={3} c="rgba(0, 0, 0, 0.87)">
                        {title}
                      </Title>

                      <Box pos="absolute" bottom="20px" w="95%" left="3%">
                        <Flex justify="space-between" mt="md" w="100%">
                          {/* <Link href='#'>
                        <a> */}
                          <Text
                            component="span"
                            c="gray.6"
                            fz="xs"
                            fw="900"
                            sx={(theme) => ({
                              '&:hover': {
                                color: theme.colors.gray[9],
                              },
                            })}
                          >
                            {categories?.length
                              ? categories[0]?.attributes?.title
                              : ''}
                          </Text>
                          {/* </a>
                    </Link> */}

                          <Text
                            display={dateDisplay}
                            c="gray.6"
                            fz="xs"
                            fw="900"
                          >
                            {postDate}
                          </Text>
                        </Flex>
                      </Box>
                    </>
                  ) : (
                    <TxtLoader />
                  )}
                </Box>
              </Grid.Col>
            </Grid>
          </a>
        </Link>
      </Card>
    </Zoom>
  );
}
