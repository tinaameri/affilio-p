import client from "@/utils/api";
import { gql } from "graphql-request";
import { PAGINATION_POSTS_PER_PAGE } from "@/utils/constants";

export async function requestPosts({ categoryName, page, query, search }) {
  const defaultPageNumber = page || 1;
  const defaultQuery = query || null;
  const defaultCategoryName = categoryName || null;
  const SIZE = PAGINATION_POSTS_PER_PAGE;
  const defaultSearch = search || null;
  return await client.request(GRAPHQL_QUERY, {
    categoryName: defaultCategoryName,
    size: SIZE,
    offset: SIZE * (defaultPageNumber - 1),
    query: defaultQuery,
    search: defaultSearch,
  });
}
export const GRAPHQL_QUERY = gql`
  query GET_PERPAGEPOST(
    $offset: Int
    $size: Int
    $categoryName: String
    $search: String
  ) {
    posts(
      where: {
        offsetPagination: { size: $size, offset: $offset }
        categoryName: $categoryName
        search: $search
      }
    ) {
      pageInfo {
        offsetPagination {
          total
        }
      }
      nodes {
        seo {
          fullHead
        }
        title
        slug
        content
        id
        date
        slug
        featuredImage {
          node {
            id
            link
            mediaItemUrl
          }
        }
        categories {
          nodes {
            seo {
              fullHead
            }
            name
            slug
            id
            description
          }
        }
      }
    }
  }
`;

export async function getSinglePost(slug) {
  const SINGLE_POST = gql`
  query singlePost {
    post(id:"${slug}", idType: SLUG) {
      seo {
        fullHead
      }
      title
      content
      id
      date
      categories {
        nodes {
          name
          slug
        }
      }
      featuredImage {
        node {
          id
          mediaItemUrl
        }
      }
      author {
        node {
          name
        }
      }
    }
  }

  `;
  const response = await client.request(SINGLE_POST);
  const singlePost = response?.post;
  return singlePost;
}
export async function getPostSlugs() {
  const SLUG_LIST = gql`
    {
      posts {
        nodes {
          slug
        }
      }
    }
  `;
  const { posts } = await client.request(SLUG_LIST);
  const slugs = posts?.nodes?.map((post) => ({ params: { slug: post.slug } }));
  return slugs;
}
export async function getCategory() {
  const CATEGORY = gql`
    {
      categories {
        nodes {
          seo {
            fullHead
          }
          name
          slug
          id
          description
        }
      }
    }
  `;
  const response = await client.request(CATEGORY);
  const categoriesData = response?.categories?.nodes || [];
  const categories = categoriesData?.map((node) => ({
    name: node.name,
    params: { slug: node.slug },
  }));
  return categories;
}
export async function getPages() {
  const ID = process.env.NEXT_PUBLIC_WP_PAGE_ID;
  const PAGE_QUERY = gql`
    query GET_PAGE($id: ID!) {
      page(id: $id, idType: DATABASE_ID) {
        seo {
          fullHead
        }
        title
        content
      }
    }
  `;
  const response = await client.request(PAGE_QUERY, {
    id: ID,
  });
  const pageResponse = response?.page || [];
  return pageResponse;
}
