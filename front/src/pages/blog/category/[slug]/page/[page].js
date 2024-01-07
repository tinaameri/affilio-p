import { PAGINATION_POSTS_PER_PAGE, REVALIDATE_RATE } from "@/api/clinet";
import { getCategories, requestPosts } from "@/api/query/blogPosts";
import Posts from "@/components/blog/Posts";
import { Box } from "@mantine/core";
import { NextSeo } from "next-seo";

export async function getStaticPaths() {
  const response = await getCategories();

  return {
    paths: response?.map((category) => ({
      params: { page: "1", slug: category?.attributes?.slug }
    })),
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const response = await requestPosts({
    categoryName: params.slug,
    page: parseInt(params.page)
  });

  if (!response?.blogPosts) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      posts: response?.blogPosts?.data,
      categories: response?.blogCategories?.data || [],
      totalPages: Math.ceil(
        response?.blogPosts?.meta?.pagination?.total / PAGINATION_POSTS_PER_PAGE,
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
  currentCategory
}) {
  return (
    <>
      <Box mt="80px">
        <NextSeo
          title={
            "در جریان آخرین اخبار مارکتینگ تکنولوژی باشید" + currentCategory
          }
          // description={post?.seo?.metaDescription}
          // images={[
          //   {
          //     url: `${IMAGES_BASE_UR}${post?.featuredImage?.data?.attributes?.url}`,
          //   },
          // ]}
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
