import {
  IMAGES_BASE_UR,
  PAGINATION_POSTS_PER_PAGE,
  REVALIDATE_RATE,
} from '@/api/clinet';
import { getCategories, requestPosts } from '@/api/query/blogPosts';
import Posts from '@/components/blog/Posts';
import { Box } from '@mantine/core';
import { ArticleJsonLd, LogoJsonLd, NextSeo } from 'next-seo';

export async function getStaticPaths() {
  const response = await getCategories();

  return {
    paths: response?.map((category) => ({
      params: { page: '1', slug: category?.attributes?.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const response = await requestPosts({
    categoryName: params.slug,
    page: parseInt(params.page),
  });

  if (!response?.blogPosts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: response?.blogPosts?.data,
      categories: response?.blogCategories?.data || [],
      totalPages: Math.ceil(
        response?.blogPosts?.meta?.pagination?.total /
          PAGINATION_POSTS_PER_PAGE,
      ),
      currentPage: params?.page || 1,
      currentCategory: params?.slug || null,
      config: response?.config?.data?.attributes,
    },
    revalidate: REVALIDATE_RATE,
  };
}

export default function Category({
  posts,
  currentPage,
  totalPages,
  categories,
  currentCategory,
  config,
}) {
  const logo = config?.logo?.header?.data?.attributes?.url;
  return (
    <>
      {console.log(currentCategory, '<<<<')}
      <Box mt="80px">
        <NextSeo
          title={
            'در جریان آخرین اخبار مارکتینگ تکنولوژی باشید' + currentCategory
          }
          // description={post?.seo?.metaDescription}
          // images={[
          //   {
          //     url: `${IMAGES_BASE_UR}${post?.featuredImage?.data?.attributes?.url}`,
          //   },
          // ]}
        />
        <ArticleJsonLd
          type="Blog Category"
          url={`${IMAGES_BASE_UR}/blog`}
          //title={`${currentCategory} اخبار`}
          images={`${IMAGES_BASE_UR}${logo}`}
          description="در جریان آخرین اخبار مارکتینگ تکنولوژی باشید"
        />
        <LogoJsonLd
          logo={`${IMAGES_BASE_UR}${logo}`}
          url={`${IMAGES_BASE_UR}`}
        />
        <NextSeo
          title={` اخبار ${currentCategory} `}
          description="در جریان آخرین اخبار مارکتینگ تکنولوژی باشید"
          additionalMetaTags={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]}
          openGraph={{
            type: 'website',
            url: `${IMAGES_BASE_UR}/blog`,
            title: `${currentCategory} اخبار`,
            description: 'در جریان آخرین اخبار مارکتینگ تکنولوژی باشید',
            images: [
              {
                url: `${IMAGES_BASE_UR}${logo}`,
                width: 600,
                height: 800,
                alt: `${currentCategory} اخبار`,
                type: 'image/png',
              },
            ],
          }}
        />
        <Posts
          posts={posts}
          totalPages={totalPages}
          currentPage={currentPage}
          categories={categories}
          currentCategory={currentCategory}
        />
      </Box>
    </>
  );
}
