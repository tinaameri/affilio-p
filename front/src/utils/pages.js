import { gql } from 'graphql-request';

import client from '@/utils/api';

export async function getPagesSlugs() {
  const PAGE_SLUG = gql`
    {
      pages {
        nodes {
          slug
        }
      }
    }
  `;
  const response = await client.request(PAGE_SLUG);
  const slugs = response?.pages?.nodes;
  return slugs;
}
export async function getSinglePage(slug) {
  const SINGLE_PAGE = gql`
    query GET_PAGE{
      pages(where:{name:"${slug}"}) {
      
        nodes {
            seo {
              fullHead
            }
            title
            content
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
       
      }
    }
  `;
  const response = await client.request(SINGLE_PAGE);
  const pageData = response.pages.nodes[0];
  return pageData;
}
