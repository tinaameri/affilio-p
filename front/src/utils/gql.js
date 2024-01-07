import client from "@/utils/api";
import { gql } from "graphql-request";

export default function getPostList() {
  const query = gql`
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
      headerMenus: menuItems(where: { location: MENU_1, parentId: "0" }) {
        edges {
          node {
            id
            label
            url
            path
            childItems {
              edges {
                node {
                  id
                  label
                  path
                  url
                }
              }
            }
          }
        }
      }
      footerMenus: menuItems(where: { location: MENU_2, parentId: "0" }) {
        edges {
          node {
            id
            label
            url
            path
            childItems {
              edges {
                node {
                  id
                  label
                  path
                  url
                }
              }
            }
          }
        }
      }
    }
  `;
  return client.request(query);
}
