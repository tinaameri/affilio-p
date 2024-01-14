import { BLOG_POSTS_SECTION } from './blogPosts';
import { CONFIG_QUERY, SEO_QUERY } from './shared';
import { strapiClient, gql } from '@/api/clinet';
export async function getPagesSlugs() {
  const PAGE_SLUG = gql`
    {
      staticPages {
        data {
          id
          attributes {
            slug
            title
          }
        }
      }
    }
  `;
  const response = await strapiClient.request(PAGE_SLUG);
  const slugs = response?.staticPages?.data;
  return slugs;
}

export async function getContactUs() {
  const CONTACT_US = gql`
    query GET_CONTACT_US {
      contactUs {
        data {
          id
          attributes {
            title: heading_title
            description: heading_description
            info_description: description
            image {
              data {
                id
                attributes {
                  url
                  caption
                  width
                }
              }
            }
            info {
              id
              title
              info
              link
            }
            social_title: title
            social_description
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
          }
        }
      }
    }
  `;
  let response;
  try {
    response = await strapiClient.request(CONTACT_US);
  } catch (error) {
    console.error('error contact-us');
  }

  return {
    contactUs: response?.contactUs?.data?.attributes || {},
  };
}

export async function getSinglePage(slug) {
  const SINGLE_PAGE = gql`
    query GET_PAGE{
      ${CONFIG_QUERY}
      ${BLOG_POSTS_SECTION}
      staticPages(filters:{slug:{
        eq:"${slug}"
      }}){
        data{
          attributes{
            ${SEO_QUERY}
            title
            slug
            page_dynamic_sections{
              __typename
              ... on ComponentPageSectionTopBanner{
                id
                link
                title
                image{
                  data{
                    id
                    attributes{
                      url
                      caption
                    }
                  
                  }
                }
              }
              ... on ComponentPageSectionHero{
                id
                caption
                title
                sub_title
                words_animation{
                  id
                  title
                }
                heroBackground: background
                action{
                  link
                  title
                  type
                  newPage
                }
                media: image {
                  data{
                    attributes{
                      caption
                      url
                    }
                  }
                }
                
              }
              
              ... on ComponentPageSection2ColWithImage{
                id
                heading_title
                heading_description
                content{
                  id
                  title
                  description
                }
                cardBackground: background
                reverse
                buttons{
                  title
                  link
                  newPage
                  type
                }
                image{
                  data{
                    attributes{
                      caption
                      url
                    }
                  }
                }
              }


              ... on ComponentPageSectionInfo{
                id
                title
                desc: description
                infoBackground: background
              }


              ... on ComponentPageSectionImageCarousel{
                id
                images{
                  data{
                    attributes{
                      caption
                      url
                      width
                      height
                    }
                  }
                }
              }  
               ... on ComponentPageSectionSellerCarousel{
                id
                heading_title
                seller{
                  id
                  title
                }
              }

              ... on ComponentPageSectionBlogSection{
                id
                heading_title
                button{
                  id
                  title
                  link
                  newPage
                  type
                }
                background
              }
              ...on ComponentPageSectionVerticalCardList{
                id
                heading_title
                heading_description
                three_column
                cards{
                  id
                  title
                  description
                  
button{
  title
  link
  newPage
  type
}
                  image{
                    data{
                      attributes{
                        url
                        caption
                        width
                        height
                      }
                    }
                  }
                }
              }


            ...on ComponentPageSectionTabs{
              id
              items{
                id
                icon
                caption
                title
                body
                description
                image{
                  data{
                    attributes{
                      url
                      caption
                    }
                  }
                }
                galleryTitle
                gallery{
                  data{
                    attributes{
                      url
                      caption
                      width
                      height
                    }
                  }
                }
              }
            }

            ... on ComponentPageSectionSimpleText{
              id
              body
            }

            ... on ComponentPageSectionBanner{
              id
              title
              description
        
            }
            ... on ComponentPageSectionVideo{
              id
              title
              videoBackground:background
              video{
                data{
                  id,
                  attributes{
                    url
                  }
                  
                }
              }
         
            }
            ... on ComponentPageSectionTestimonial {
              id
              heading_title
              heading_description
              testimonialBackground:background
              slide{
                id
                content
                full_name
                position
                image{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
            }
            ... on ComponentPageSectionCardBanner {
              id
              heading_title
              heading_description
              title
              description
              image{
                data{
                  attributes{
                    url
                    caption
                    height
                  }
                }
              }             
            }  
            ... on ComponentPageSectionCreateCampaign {
              id
              ht: heading_title
              image_mobile{
                data{
                  id
                  attributes{
                    caption
                    url
                    height
                  }
                }
              }
              image_desktop{
                data{
                  id
                  attributes{
                    caption
                    url
                    height
                  }
                }
              }
            }
            ... on ComponentPageSectionContactUs {
              id
              description
              contactUsBackground:background
              button {
                id
                title
                link
                newPage
                type
              }
              image {
                data {
                  id
                  attributes {
                    caption
                    url
                  }
                }
              }
            } 
            ... on ComponentPageSectionCounter{
              heading_title
              heading_description
              Counter{
                id
                title
                unit
                count
              }
            }
            ... on ComponentPageSectionTimelineSection {
              id
              headingTimeline:heading_title
              Item {
                id
                description
                date
                image {
                  data {
                    id
                    attributes {
                      caption
                      url
                    }
                  }
                }
              }
            }

              
          }
            
          }
        }
      }
    }
  `;
  let response;
  try {
    response = await strapiClient.request(SINGLE_PAGE);
  } catch (error) {
    console.error('>>>>>', slug);
    console.error('>>>>>error', error);
  }

  console.log('>>>>>>>res', response);
  return {
    pageData: response?.staticPages?.data?.length
      ? response?.staticPages?.data[0]?.attributes
      : null,
    config: response?.config?.data?.attributes || {},
    posts: response?.blogPosts?.data || {},
    seo: response?.staticPages?.data?.length
      ? response?.staticPages?.data[0]?.attributes?.seo
      : null,
    //contactUs: response?.contactUs?.data?.attributes || {}
  };
}
