import { strapiClient, gql, PAGINATION_POSTS_PER_PAGE } from '@/api/clinet';
import { CONFIG_QUERY, SEO_QUERY } from './shared';

const BLOG_CATEGORIES = gql`
  blogCategories {
    data {
      attributes {
        slug
        title
        description
      }
    }
  }
`;

export const BLOG_POSTS = gql`
  query GET_PERPAGEPOST(
    $page: Int
    $size: Int
    $categoryName: String
    $search: String
    $title: String
  ) {
    blogPosts(
      sort:"createdAt:desc"
      filters: {
        or: [
          #{ body: { contains: $search } },
           { title: { contains: $search } }]
        categories: { slug: { contains: $categoryName } }
        title: {eq: $title}
      }
      pagination: { page: $page, pageSize: $size }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        attributes {
          title
          page_dynamic_sections_blog{
            ... on ComponentPageSectionArticle{
              id
              body
            }
            ... on ComponentPageSectionAccordion{
              id
              title
              description
              
              
            }
          }
          slug: title
          date: publishedAt
          #body
          featuredImage {
            data {
              attributes {
                url
                caption
              }
            }
          }
          categories {
            data {
              attributes {
                title
                slug
              }
            }
          }
          ${SEO_QUERY}
        }
      }
    }
    ${BLOG_CATEGORIES}
    ${CONFIG_QUERY}
  }
`;
export const BLOG_POSTS_SECTION = gql`
  blogPosts(sort:"createdAt:desc") {
    data {
      id
      attributes {
        title
        slug: title
        date: publishedAt
        featuredImage {
          data {
            attributes {
              url
              caption
            }
          }
        }
        categories {
          data {
            attributes {
              title
              slug
            }
          }
        }
      }
    }
  }
`;
export async function requestPosts({ categoryName, page, search, title } = {}) {
  const params = {
    size: PAGINATION_POSTS_PER_PAGE,
    page: page || 1,
  };
  if (categoryName) {
    params.categoryName = categoryName;
  }
  if (search) {
    params.search = search;
  }
  if (title) {
    params.title = title;
  }

  return await strapiClient.request(BLOG_POSTS, params);
}

export async function getCategories() {
  const response = await strapiClient.request(gql`{${BLOG_CATEGORIES}}`);
  return response?.blogCategories?.data || [];
}

export async function getSinglePost(slug) {
  const title = slug.replace(/_/g, ' ');

  const res = await requestPosts({ title });
  if (res?.blogPosts?.meta?.pagination?.total != 1) {
    return null;
  } else {
    return { post: res?.blogPosts?.data[0], config: res?.config };
  }
}

export async function getPostSlugs() {
  const SLUG_LIST = gql`
    {
      blogPosts {
        data {
          attributes {
            title
          }
        }
      }
    }
  `;
  const response = await strapiClient.request(SLUG_LIST);
  const slugs = response?.blogPosts?.data?.map((post) => ({
    params: { slug: post.attributes.title.replace(/ /g, '_') },
  }));
  return slugs;
}
