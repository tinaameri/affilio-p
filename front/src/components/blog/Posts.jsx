import BlogCard from '@/components/blog/BlogCard';
import Layout from '@/components/LayoutComponent';
import { Grid, Box, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import PostPagination from '@/components/blog/PostPagination';
import { useRouter } from 'next/router';
import Search from '@/components/blog/Search';
import Categories from '@/components/blog/Categories';

export default function Posts({
  posts,
  categories,
  totalPages,
  currentPage,
  type,
  paginationDisplay,
  currentCategory,
  button,
  input_placeholder,
}) {
  const router = useRouter();
  const smallerMidScreen = useMediaQuery('(max-width: 64em)');
  // const [loadingLoader, setLoadingLoader] = useState(true);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoadingLoader(false);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [loadingLoader]);
  return (
    <>
      {router.pathname !== '/blog' && (
        <Search button={button} input_placeholder={input_placeholder} />
      )}
      <Layout pb="40px">
        <Grid.Col xs={12} mt="lg">
          <Categories
            categories={categories}
            currentCategory={currentCategory}
          />
        </Grid.Col>
        {type === 'home' ? (
          smallerMidScreen ? (
            posts?.map((post) => (
              <Grid.Col
                xs={12}
                sm={10}
                md={6}
                lg={4}
                xl={4}
                m="auto"
                // display={largerLgScreen && 'none'}
                key={post.slug}
              >
                <Box>
                  <BlogCard
                    title={post?.attributes?.title}
                    slug={post?.attributes?.title}
                    date={post?.attributes?.date}
                    img={post?.attributes?.featuredImage?.data?.attributes?.url}
                    categories={
                      post?.attributes?.categories?.data[0]?.attributes
                        ?.title || ''
                    }
                  />
                </Box>
              </Grid.Col>
            ))
          ) : (
            posts?.slice(1)?.map((post) => (
              <Grid.Col
                xs={12}
                sm={10}
                md={6}
                lg={4}
                xl={4}
                m="auto"
                // display={largerLgScreen && 'none'}
                key={post?.attributes?.slug}
              >
                <Box>
                  <BlogCard
                    title={post?.attributes?.title}
                    slug={post?.attributes?.title}
                    date={post?.attributes?.date}
                    img={post?.attributes?.featuredImage?.data?.attributes?.url}
                    categories={
                      post?.attributes?.categories?.data[0]?.attributes
                        ?.title || ''
                    }
                  />
                </Box>
              </Grid.Col>
            ))
          )
        ) : posts?.length === 0 ? (
          <>
            <Grid.Col xs={12} mx="auto" ta="center">
              <Text ta="center" component="p">
                موردی یافت نشد
              </Text>
            </Grid.Col>
          </>
        ) : (
          posts?.map((post) => (
            <Grid.Col
              xs={12}
              sm={10}
              md={6}
              lg={4}
              xl={4}
              m="auto"
              // display={largerLgScreen && 'none'}
              key={post?.attributes?.slug}
            >
              <Box>
                <BlogCard
                  title={post?.attributes?.title}
                  slug={post?.attributes?.title}
                  date={post?.attributes?.date}
                  img={post?.attributes?.featuredImage?.data?.attributes?.url}
                  categories={
                    post?.attributes?.categories?.data[0]?.attributes?.title ||
                    ''
                  }
                />
              </Box>
            </Grid.Col>
          ))
        )}

        {posts?.length > 0 && (
          <Grid.Col display={paginationDisplay}>
            <PostPagination totalPages={totalPages} currentPage={currentPage} />
          </Grid.Col>
        )}
      </Layout>
    </>
  );
}
