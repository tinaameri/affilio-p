import { REVALIDATE_RATE } from '@/api/clinet';
import {
  Grid,
  Title,
  Flex,
  Text,
  Box,
  Breadcrumbs,
  Skeleton,
  Image,
} from '@mantine/core';
import { getPostSlugs, getSinglePost } from '@/api/query/blogPosts';
import Layout from '@/components/LayoutComponent';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { IconChevronLeft } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { IMAGES_BASE_UR } from '@/api/clinet';
import Markdown from '@/components/Markdown';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Head from 'next/head';

export async function getStaticPaths() {
  const slugs = await getPostSlugs();
  return {
    paths: slugs,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const response = await getSinglePost(slug);
  if (!response?.post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: response?.post?.attributes,
      config: response?.config?.data?.attributes,
    },
    revalidate: REVALIDATE_RATE,
  };
}

export default function Post({ post }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  const router = useRouter();

  const smallerXsScreen = useMediaQuery('(max-width: 22.5em)');
  const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  // const largerLgScreen = useMediaQuery('(min-width: 75em)');
  const largerSmallScreen = useMediaQuery('(min-width: 37.5em)');

  const items = [
    { title: 'صفحه اصلی', href: '/' },
    { title: 'اخبار', href: '/blog' },
  ];
  const currentCategory = post?.categories?.data?.length
    ? post?.categories?.data[0]
    : null;

  if (currentCategory) {
    items.push({
      title: currentCategory?.attributes?.title || '',
      href: `/blog/category/${currentCategory?.attributes?.slug}/page/1`,
    });
  }
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let postDate = new Date(post?.date).toLocaleDateString('fa-IR', options);
  const twitterData =
    post?.seo?.metaSocial.find((item) => item.socialNetwork === 'Twitter') ||
    {};
  const facebookData =
    post?.seo?.metaSocial.find((item) => item.socialNetwork === 'Facebook') ||
    {}; 
    
    const additionalMetaTags=[
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'keywords',
        // eslint-disable-next-line no-undef
        content: post?.seo?.keywords,
      },
    ]
    if (facebookData?.title) {
      additionalMetaTags.push(
        {
          name: 'facebook:title',
          content: facebookData.title,
        },
        {
          name: 'facebook:description',
          content: facebookData.description,
        },
        {
          name: 'facebook:image',
          content: `${IMAGES_BASE_UR}${facebookData?.image?.data?.attributes?.url}`,
        }
      );
    }  
    if (twitterData?.title) {
      additionalMetaTags.push(
        {
          name: 'twitter:title',
          content: twitterData?.title,
        },
        {
          name: 'twitter:description',
          content: twitterData?.description,
        },
        {
          name: 'twitter:image',
          content: `${IMAGES_BASE_UR}${twitterData?.image?.data?.attributes?.url}`,
        },
      );
    }

    return (
    <>
      {post?.seo?.structuredData !== null && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(post?.seo?.structuredData),
            }}
          />
        </Head>
      )}
      <ArticleJsonLd
        type="Article"
        useAppDir={false}
        url={`${IMAGES_BASE_UR}${router.asPath}`}
        title={post?.title}
        images={`${IMAGES_BASE_UR}${post?.featuredImage?.data?.attributes?.url}`}
        datePublished={post?.publishedAt}
        dateModified={post?.date || post?.publishedAt}
        description={post?.seo?.metaDescription}
        isAccessibleForFree={true}
      />
      <NextSeo
        title={post?.seo?.metaTitle || post?.title}
        description={post?.seo?.metaDescription}
        images={[
          {
            url: `${IMAGES_BASE_UR}${post?.featuredImage?.data?.attributes?.url}`,
          },
        ]}
        additionalMetaTags={additionalMetaTags}
        index={post?.seo?.metaRobots?.index}
        noindex={!post?.seo?.metaRobots?.index}
        follow={post?.seo?.metaRobots?.follow}
        nofollow={!post?.seo?.metaRobots?.follow}
        openGraph={{
          title: post?.seo?.metaTitle || post?.title,
          description: post?.seo?.metaDescription,
          url: `${IMAGES_BASE_UR}${router.asPath}`,
          type: 'Article',
          article: {
            publishedTime: post?.publishedAt,
            modifiedTime: post?.date || post?.publishedAt,
            //expirationTime: '2022-12-21T22:04:11Z',
          },
          images: [
            {
              url: `${IMAGES_BASE_UR}${post?.featuredImage?.data?.attributes?.url}`,
              width: 850,
              height: 650,
              alt: post?.title,
            },
          ],
        }}
      />
      <Layout
        mt={smallerXsScreen ? '78px' : smallerLgScreen ? '90px' : '109px'}
      >
        <Grid.Col xs={12}>
          <Title order={1} ta="center" my={largerSmallScreen ? '40px' : 'xl'}>
            {post?.title}
          </Title>
          <Flex justify="center" mb="15px">
            {/* <Text component='small'>Written by: {post.author?.node.name}</Text>
                        <Text component='span'>&#8226;</Text> */}
            <Text c="dimmed" fz="14px" component="small">
              آخرین به‌روزرسانی: {postDate}
            </Text>
          </Flex>
          <Box h={largerSmallScreen ? '420px' : '200px'}>
            {post?.featuredImage?.data?.attributes?.url ? (

              <Image
                //layout='responsive'
                fit="cover"
                withPlaceholder
                width="100%"
                alt={post?.title}
                height={largerSmallScreen ? '420px' : '200px'}
                radius="1rem"
                src={`${IMAGES_BASE_UR}${post?.featuredImage?.data?.attributes?.url}`}
              />
            ) : (
              <Skeleton
                height={largerSmallScreen ? '420px' : '200px'}
                mt={6}
                width="100%"
                radius="1rem"
              />
            )}
          </Box>
          <Flex align="center">
            <Breadcrumbs separator={<IconChevronLeft size="20px" />} mt="xs">
              {items.map((item, index) => (
                <Text
                  fz="sm"
                  fw="600"
                  component={Link}
                  href={item?.href}
                  key={index}
                  lineClamp={1}
                >
                  {item?.title}
                </Text>
              ))}
            </Breadcrumbs>
            <Box m="18px 3px 0 3px">
              <IconChevronLeft size="20px" />
            </Box>

            <Text color="primary.1" fz="sm" mt="xs" fw="600" lineClamp={1}>
              {post?.title || null}
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col>
          <article className="article-post">
            <Markdown text={post?.body} />
          </article>
        </Grid.Col>
      </Layout>
    </>
  );
}
