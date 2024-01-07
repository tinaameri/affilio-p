// import 'server-only';

import api, { gql } from "@/utils/api";
import { postPerPage } from "@/utils/constants";
import { cache } from "react";

const getPosts = cache(
  async ({ categoryName, currentPage, pageSize, query, search } = {}) => {
    const defaultPageNumber = currentPage || 1;
    const defaultQuery = query || null;
    const defaultCategoryName = categoryName || null;
    const SIZE = pageSize || postPerPage;
    const defaultSearch = search || null;
    return await api.request(POSTS_QUERY, {
      categoryId: defaultCategoryName,
      size: SIZE,
      offset: SIZE * (defaultPageNumber - 1),
      query: defaultQuery,
      search: defaultSearch,
      // tagId: TAGID,
    });
  },
);
export default getPosts;

export const POSTS_QUERY = gql`
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
        #content
        excerpt
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
