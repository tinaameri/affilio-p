import Layout from '@/components/LayoutComponent'
import Heading from '@/components/Heading'
import { Box, Grid, } from '@mantine/core';
import BlogCard from '@/components/blog/BlogCard';
// import { HeadMetaTags } from './HeadMetaTags';
export default function BlogSection({ posts }) {
    return (
        <>
            <Heading title='Fresh from the Blog' color='primary.1' />
            <Layout pb='100px'>

                {posts?.slice(0, 3).map((post, index) => (
                    <Grid.Col xs={12} sm={8} md={6} lg={4} xl={4} m='auto' className='blog-section'
                        // display={largerLgScreen && 'none'} 
                        key={post.slug}>
                        <Box>
                            <BlogCard
                                title={post.title}
                                slug={post.slug}
                                date={post.date}
                                img={post.featuredImage?.node.mediaItemUrl}
                                categories={post.categories?.nodes}
                            />
                        </Box>
                    </Grid.Col>
                ))
                }
            </Layout>

        </>
    )
}
