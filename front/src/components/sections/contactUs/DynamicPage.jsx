import { Container, Box } from '@mantine/core';
//import styles from './page.module.scss'
import HeroSection from '@/components/HeroSection';
import CustomersCarousel from '@/components/CustomersCarousel';
import Heading from '@/components/Heading';
import { content } from '/public/assets/contentJson'
import { CardList } from '@/components/card';
import BlogSection from '@/components/blog/BlogSection';
import RequestDemo from '@/components/RequestDemo';
// import Bubble from '@/components/sections/homePage/Bubble'
import { NextSeo } from 'next-seo';
import { requestPosts, GRAPHQL_QUERY as QUERY } from '@/utils/posts';
import { REVALIDATE_RATE } from "@/utils/constants";
import { TopImageCardItems } from '@/components/card/TopImageCard';
import { useThemeContext } from '@/context/theme';
import Banner from '@/components/Banner';
import Video from '@/components/Video';
import Testimonial from '@/components/Testimonial';
import ContactUs from '@/components/ContactUs';
import TimeLine from '@/components/timeline/TimelineComponent';
import Campaign from '@/components/Campaign';
import { IMAGES } from '@/utils/constants';
import React from 'react';
import ContactInfo from '@/components/ContactInfo';

export default function DynamicPage({ contactForm, content }) {

  return (
    <>
      <NextSeo
        title='تماس با ما'
        description=""
        openGraph={{
          url: 'https://adverge.ir/pages/contact-us',
          title: 'تماس با ما',
          description: '',
          images: [
            {
              url: '',
              width: 600,
              height: 800,
              alt: '',
              type: 'image/png',
            },
          ],
        }}
      />
      <Container fluid className='w-100' size='xl' p="0" >
        <ContactInfo content={content} />
        {contactForm?.map((section, idx) => (

          <React.Fragment key={idx} >
            {section.type === "contact-form" ?
              <> <RequestDemo demo={section?.data} source='contact-us' py='40px' />
              </> : null}



          </React.Fragment>
        ))
        }
      </Container >
    </>
  )
}