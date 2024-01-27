import { ArticleJsonLd, LogoJsonLd, NextSeo } from 'next-seo';
import Posts from '@/components/blog/Posts';
import TopHeader from '@/components/blog/TopHeader';
import LatestPost from '@/components/blog/LatestPost';
import {
  IMAGES_BASE_UR,
  PAGINATION_POSTS_PER_PAGE,
  REVALIDATE_RATE,
} from '@/api/clinet';
import { requestPosts } from '@/api/query/blogPosts';
import PostPagination from '@/components/blog/PostPagination';
export async function getStaticProps() {
  const response = await requestPosts({});
  try {
    return {
      props: {
        posts: response?.blogPosts?.data,
        categories: response?.blogCategories?.data || [],
        totalPages: Math.ceil(
          response?.blogPosts?.meta?.pagination?.total /
            PAGINATION_POSTS_PER_PAGE,
        ),
        currentPage: 1,
        config: response?.config?.data?.attributes,
      },
      revalidate: REVALIDATE_RATE,
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
export default function Post({
  posts,
  categories,
  totalPages,
  currentPage,
  config,
}) {
  var data = [];
  for (var i = 1; i <= totalPages; i++) {
    data.push(i);
  }
  const logo = config?.logo?.header?.data?.attributes?.url;
  const header = config?.top_header_blog;
  return (
    <>
      <ArticleJsonLd
        type="BlogPosting"
        url={`${IMAGES_BASE_UR}/blog`}
        title="اخبار"
        images={`${IMAGES_BASE_UR}${logo}`}
        description="در جریان آخرین اخبار مارکتینگ تکنولوژی باشید"
      />
      <LogoJsonLd logo={`${IMAGES_BASE_UR}${logo}`} url={`${IMAGES_BASE_UR}`} />
      <NextSeo
        title="اخبار"
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
          title: 'اخبار',
          description: 'در جریان آخرین اخبار مارکتینگ تکنولوژی باشید',
          images: [
            {
              url: `${IMAGES_BASE_UR}${logo}`,
              width: 600,
              height: 800,
              alt: 'اخبار',
              type: 'image/png',
            },
          ],
        }}
      />
      <TopHeader
        heading_title={header?.heading_title}
        heading_description={header?.heading_description}
        input_placeholder={header?.input_placeholder}
        button={header?.button}
      />
      <LatestPost
        posts={posts}
        categories={categories}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      <Posts
        type="home"
        posts={posts}
        categories={categories}
        totalPages={totalPages}
        currentPage={currentPage}
        paginationDisplay="none"
      />
      <PostPagination
        //type="all-news"
        totalPages={totalPages}
        currentPage={currentPage}
      />
      {/* <Bubble /> */}
    </>
  );
}
