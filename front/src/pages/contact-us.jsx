import React from 'react';
import DynamicPage from '@/components/sections/contactUs/DynamicPage';
import { pages } from 'public/assets/contentJson';
import { getContactUs } from '@/api/query/staticPages';
import { getConfig } from '@/api/query/shared';

import { REVALIDATE_RATE } from '@/api/clinet';

export default function contactUs({ contactUs, contactForm }) {
  return (
    <>
      <DynamicPage contactForm={contactForm?.sections} content={contactUs} />
    </>
  );
}
export async function getStaticProps() {
  const configResponse = await getConfig();
  const contactForm = pages?.contact_us;
  const res = await getContactUs();

  const contactUs = res.contactUs;
  try {
    return {
      props: {
        contactForm,
        contactUs,
        config: configResponse?.config?.data?.attributes,
      },

      revalidate: REVALIDATE_RATE,
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
