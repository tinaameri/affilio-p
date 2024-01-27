import { Box, Container, Title } from '@mantine/core';
//import styles from './page.module.scss'
import HeroSection from '@/components/heroSection/HeroSection';
//import CustomersCarousel from '@/components/CustomersCarousel';
//import Heading from '@/components/Heading';
import { pages } from '/public/assets/contentJson';
import { Card } from '@/components/card';
//import BlogSection from '@/components/blog/BlogSection';
//import RequestDemo from '@/components/RequestDemo';
// import Bubble from '@/components/sections/homePage/Bubble'
import { LocalBusinessJsonLd, LogoJsonLd, NextSeo } from 'next-seo';
//import { requestPosts, GRAPHQL_QUERY as QUERY } from '@/utils/posts';
import {
  HERO_BACKGROUNDS,
  CARD_BACKGROUNDS,
  VERTICAL_CARD_BACKGROUNDS,
  COLOR,
  INFO_COLOR,
} from '@/utils/constants';

import Banner from '@/components/Banner';
import Video from '@/components/Video';
import Testimonial from '@/components/Testimonial';
import ContactUs from '@/components/ContactUs';
import Campaign from '@/components/Campaign';
import { IMAGES } from '@/utils/constants';
import React from 'react';
import Carousel from '@/components/CustomersCarousel';
import ImageCarousel from '@/components/CustomersImageCarousel';
import CardBnanner from '@/components/card/CardBanner';
import { IMAGES_BASE_UR } from '@/api/clinet';
import TimelineComponent from '@/components/timeline/TimelineComponent';
import { useRouter } from 'next/router';
import Head from 'next/head';
import CounterAnimation from '@/components/counterAnimation/CounterAnimation';
import { TopImageCardItems } from '@/components/card/TopImageCard';
import BlogSection from '@/components/blog/BlogSection';
import Markdown from './Markdown';
import AccordionComponent from './accordion/Accordion';
export default function DynamicPage({ data, config, seo, posts }) {
  const router = useRouter();
  const logo = config?.logo?.header?.data?.attributes?.url;
  const twitterData =
    seo?.metaSocial?.find((item) => item?.socialNetwork === 'Twitter') || {};
  const facebookData =
    seo?.metaSocial?.find((item) => item?.socialNetwork === 'Facebook') || {};
  const socialLinks = config?.social_media;
  const generateSameAsLinks = (socialLinks) => {
    return socialLinks?.filter((item) => item?.link).map((link) => link?.link);
  };
  const sameAsLinks = generateSameAsLinks(socialLinks);
  const heroImage = data
    ?.filter((item) => item?.__typename === 'ComponentPageSectionHero')
    ?.map((item) => item?.media.data?.attributes?.url);
  const additionalMetaTags = [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'keywords',
      // eslint-disable-next-line no-undef
      content: seo?.keywords,
    },
  ];
  if (facebookData?.title) {
    additionalMetaTags.push(
      {
        name: 'facebook:title',
        content: facebookData.title,
      },
      {
        name: 'facebook:description',
        content: facebookData.description,
      },
      {
        name: 'facebook:image',
        content: `${IMAGES_BASE_UR}${facebookData?.image?.data?.attributes?.url}`,
      },
    );
  }
  if (twitterData?.title) {
    additionalMetaTags.push(
      {
        name: 'twitter:title',
        content: twitterData?.title,
      },
      {
        name: 'twitter:description',
        content: twitterData?.description,
      },
      {
        name: 'twitter:image',
        content: `${IMAGES_BASE_UR}${twitterData?.image?.data?.attributes?.url}`,
      },
    );
  }
  return (
    <>
      <Head>
        {seo?.structuredData !== null && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(seo?.structuredData),
            }}
          />
        )}
        <link rel="preload" href={`${IMAGES_BASE_UR}${heroImage}`} as="image" />
      </Head>

      <LogoJsonLd logo={`${IMAGES_BASE_UR}${logo}`} url={`${IMAGES_BASE_UR}`} />
      <NextSeo
        title={seo?.metaTitle || data?.title}
        description={seo?.metaDescription}
        additionalMetaTags={additionalMetaTags}
        index={seo?.metaRobots?.index}
        noindex={!seo?.metaRobots?.index}
        follow={seo?.metaRobots?.follow}
        nofollow={!seo?.metaRobots?.follow}
        openGraph={{
          type: 'website',
          url: `${IMAGES_BASE_UR}${router.asPath}`,
          title: seo?.metaTitle || data?.title,
          description: seo?.metaDescription,
          canonical: seo?.canonicalURL,
          images: [
            {
              url: `${IMAGES_BASE_UR}${seo?.metaImage?.data?.attributes?.url}`,
              width: 600,
              height: 800,
              alt: data?.metaTitle,
              type: 'image/png',
            },
          ],
        }}
      />
      <LocalBusinessJsonLd
        type="Company"
        id={`${IMAGES_BASE_UR}`}
        name={config?.site_name}
        description={data?.metaDescription}
        url={`${IMAGES_BASE_UR}`}
        telephone="021 4300 0086"
        address={{
          streetAddress: 'انتهای کوچه ۱۱, پلاک ۱۵',
          addressLocality: 'شهرک غرب',
          addressRegion: 'تهران',
          postalCode: '1465754461',
          addressCountry: 'ایران',
        }}
        geo={{
          latitude: '35.759507405250496',
          longitude: '51.3752609875386',
        }}
        images={`${IMAGES_BASE_UR}${logo}`}
        sameAs={sameAsLinks}
        openingHours={[
          {
            opens: '08:00',
            closes: '20:00',
            dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
            validFrom: '2019-12-23',
            validThrough: '2020-04-02',
          },
          {
            opens: '08:00',
            closes: '20:00',
            dayOfWeek: 'Saturday',
            validFrom: '2019-12-23',
            validThrough: '2020-04-02',
          },
        ]}
      />
      <Container fluid className="w-100" size="xl" p="0">
        {console.log(data, 'data')}
        {data?.map((section, idx) => (
          <React.Fragment key={idx}>
            {
              // section.__typename === "ComponentPageSectionTopBanner" ? (
              //   <>
              //     {console.log(section, 'section')}

              //     <TopBanner
              //       content={section}
              //     />
              //   </>
              // ) :
              section.__typename === 'ComponentPageSectionHero' ? (
                <>
                  <HeroSection
                    bg={HERO_BACKGROUNDS[section?.heroBackground]}
                    title={section?.title}
                    subtitle={section?.sub_title}
                    src={`${IMAGES_BASE_UR}${section?.media?.data?.attributes?.url}`}
                    image={section?.media?.data?.attributes?.url}
                    //buttonType={section?.action?.type}
                    button={section?.action}
                    //link={section?.action?.link}
                    //targetBlank={!!section?.action?.newPage}
                    wordsAnimation={section?.words_animation}
                    lottie={section?.lottie_image_animation}
                    alt={`${IMAGES_BASE_UR}${section?.media?.data?.attributes?.alternativeText}`}
                  />
                </>
              ) : section?.__typename === 'ComponentPageSectionInfo' ? (
                <Banner
                  title={section?.title}
                  color={INFO_COLOR[section?.color]}
                  py="40px"
                  wrapperBgColor={CARD_BACKGROUNDS[section.infoBackground]}
                  description={section.description}
                />
              ) : section?.__typename ===
                'ComponentPageSectionSellerCarousel' ? (
                <>
                  <Carousel
                    customers={section}
                    //className="white-images"
                  />
                </>
              ) : section?.__typename ===
                'ComponentPageSectionImageCarousel' ? (
                <>
                  <ImageCarousel
                    customers={section?.images?.data}
                    heading_title={section?.heading_title}
                    className="white-images"
                  />
                </>
              ) : section.__typename === 'ComponentPageSectionBanner' ? (
                <Banner
                  title={section?.title}
                  description={section?.description}
                  //customers={section?.data?.carousel}
                />
              ) : section.__typename === 'ComponentPageSection2ColWithImage' ? (
                <>
                  <Card
                    //colorEven="white"
                    bgSection={CARD_BACKGROUNDS[section.cardBackground]}
                    // variant="outline"
                    // btnColor="secondary.1"

                    content={section}

                    // color={
                    //   section.cardBackground === 'pattern' ? 'white' : null
                    // }
                  />
                </>
              ) : section?.__typename ===
                'ComponentPageSectionVerticalCardList' ? (
                <>
                  {console.log(section, '>>>')}

                  <TopImageCardItems
                    imageHeight={274}
                    imageWidth={299}
                    cardContent={section?.cards}
                    content={section}
                    bgSection={
                      VERTICAL_CARD_BACKGROUNDS[section?.verticalCardBackground]
                    }
                  />
                </>
              ) : section?.__typename === 'ComponentPageSectionBlogSection' ? (
                <>
                  {' '}
                  <BlogSection
                    posts={posts}
                    title={section?.heading_title}
                    background={pages?.blog_section_bg}
                    //background={INFO_COLOR[section?.background]}
                    button={section?.button}
                  />
                </>
              ) : section.__typename === 'ComponentPageSectionVideo' ? (
                <>
                  {console.log(section, '>>>')}
                  <Video
                    content={section}
                    bgSection={CARD_BACKGROUNDS[section?.videoBackground]}
                  />
                </>
              ) : section.__typename === 'ComponentPageSectionCardBanner' ? (
                <CardBnanner
                  bgBanner={`url(${IMAGES}/bg/bg-orange-pattern.png) left/100% no-repeat`}
                  title={section?.title}
                  description={section?.description}
                  heading_title={section?.heading_title}
                  heading_description={section?.heading_description}
                  image={`${IMAGES_BASE_UR}${section?.image?.data?.attributes?.url}`}
                  image_height={section?.image?.data?.attributes?.height}
                />
              ) : section.__typename === 'ComponentPageSectionTestimonial' ? (
                <>
                  <Testimonial
                    testimonial={section}
                    bgSection={HERO_BACKGROUNDS[section?.testimonialBackground]}
                  />
                </>
              ) : section.__typename ===
                'ComponentPageSectionCreateCampaign' ? (
                <>
                  <Campaign
                    heading_title={section?.ht}
                    image_desktop={`${IMAGES_BASE_UR}${section?.image_desktop?.data?.attributes?.url}`}
                    image_mobile={`${IMAGES_BASE_UR}${section?.image_mobile?.data?.attributes?.url}`}
                  />
                </>
              ) : section.__typename === 'ComponentPageSectionContactUs' ? (
                <ContactUs
                  bg={COLOR[section?.contactUsBackground]}
                  img={`${IMAGES_BASE_UR}${section?.image.data?.attributes?.url}`}
                  description={section?.description}
                  buttonType={section?.button?.type}
                  buttonTitle={section?.button?.title}
                  buttonLink={section?.button?.link}
                  targetBlank={!!section?.button?.newPage}
                />
              ) : section.__typename ===
                'ComponentPageSectionTimelineSection' ? (
                <>
                  <TimelineComponent
                    heading_title={section?.headingTimeline}
                    content={section?.Item}
                  />
                </>
              ) : section.__typename === 'ComponentPageSectionCounter' ? (
                <>
                  <CounterAnimation
                    content={section?.Counter}
                    heading_title={section?.heading_title}
                  />
                </>
              ) : section?.__typename === 'ComponentPageSectionAccordion' ? (
                <>
                  <Box py="xl" my="xl">
                    <Title order={3} color="primary.4">
                      {section?.heading_title}:
                    </Title>
                  </Box>
                  <AccordionComponent content={section?.accordion_item} />
                </>
              ) : section?.__typename === 'ComponentPageSectionArticle' ? (
                <>
                  <Markdown text={section?.body} />
                </>
              ) : // : section.__typename === "ComponentPageSectionContactUsInfo" ? (
              //   <>
              //     <ContactInfo
              //       content={section}

              //     // instagram={section?.data?.social?.instagram}
              //     // linkedin={section?.data?.social?.linkedin}
              //     />
              //     <RequestDemo demo={content?.section_request_demo} source='contact-us' py='40px' />

              //   </>
              // ) : section.__typename === "ComponentPageSectionContactUsForm" ?
              //   <> <RequestDemo demo={section} source='contact-us' py='40px' />
              //   </>
              null
            }
          </React.Fragment>
        ))}
      </Container>
    </>
  );
}
