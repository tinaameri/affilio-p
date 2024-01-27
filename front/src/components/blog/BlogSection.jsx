import Layout from '@/components/LayoutComponent';
import Heading from '@/components/Heading';
import { Grid } from '@mantine/core';
import BlogCard from '@/components/blog/BlogCard';
import ButtonComponent from '../Button';
// import { HeadMetaTags } from './HeadMetaTags';
export default function BlogSection({
  posts,
  title,
  background,
  button,
  withButton,
}) {
  return (
    <>
      <Layout pb="100px" fluid bgFluid={background}>
        <Heading title={title} color="primary.1" />
        {posts?.slice(0, 3).map((post) => (
          <Grid.Col
            xs={12}
            md={6}
            lg={4}
            m="auto"
            className="blog-section"
            // display={largerLgScreen && 'none'}
            key={post?.attributes?.slug}
          >
            <BlogCard
              title={post?.attributes?.title}
              slug={post?.attributes?.slug}
              date={post?.attributes?.date}
              img={post?.attributes?.featuredImage?.data?.attributes?.url}
              categories={
                post?.attributes?.categories?.data[0]?.attributes?.title
              }
            />
          </Grid.Col>
        ))}
        {withButton && (
          <Grid.Col xs={12} ta="center" mt="xl">
            <ButtonComponent
              type={button?.type}
              href={button?.link}
              title={button?.title}
              targetBlank={button?.newPage}
            />
          </Grid.Col>
        )}
      </Layout>
    </>
  );
}
