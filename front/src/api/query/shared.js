import { gql, strapiClient } from '@/api/clinet';

export const CONFIG_QUERY = gql`
config {
    data {
      attributes {
        site_name
        top_banner {
          image {
            data {
              id
              attributes {
                url
                caption
                height
              }
            }
          }
          link
          title
          
        }
        Navigation {
          title
          link
          sub_links {
            title
            link
            description
            image {
              data {
                id
                attributes {
                  name
                  caption
                  url
                }
              }
            }
          }
        }
        header_button{
          MainButton{
            id
            title
            link
            newPage
            type
          }
          dropDownItem{
            title
            link
            newPage
            
          }
        }
        newsletter{
          title
          email_placeholder
          button
        }
        footerNavigation {
          id
          title
          links {
            id
            link
            title
            newPage
            type
          }

        }

        Gdpr {
          id
          heading_title
          description
          image {
            data {
              id
              attributes {
                url
                caption
              }
            }
          }
          customize
          toggle_option_essential {
            id
            title
            description
          }
          toggle_option_analytics {
            id
            title
            description
          }
          accept_button {
            id
            title
            type
          }
          decline_button {
            id
            title
            type
          }
        }
        copy_right
        social_media {
          id
          title
          link
          icon {
            data {
              id
              attributes {
                url
                caption
              }
            }
          }
        }
        trust_logo {
          id
          title
          html        
        }
        logo {
          id
          header {
            data {
              id
              attributes {
                alternativeText
                url
                caption
                height
                width
              }
            }
          }
          footer {
            data {
              id
              attributes {
                alternativeText
                url
                caption
                height
                width
              }
            }
          }
        }
        contactFormTitle
        contactFormDescription
   
      }
    }
  }
`;

export const SEO_QUERY = gql`

      seo {
        metaTitle
        metaImage {
          data {
            attributes {
              url
            },
          }
        }
        metaRobots{
          index
          follow
        }
        metaDescription
        canonicalURL
        keywords
        structuredData
        metaSocial {
          socialNetwork
          title
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }

`;
export async function getConfig() {
  const QUERY = gql`
    {
      ${CONFIG_QUERY}
    }
  `;
  const response = await strapiClient.request(QUERY);

  return response;
}
