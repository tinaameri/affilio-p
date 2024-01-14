import React from 'react';
import DynamicPage from '@/components/DynamicPage';
// import { pages } from "public/assets/contentJson";
import { getSinglePage } from '@/api/query/staticPages';

export async function getStaticProps() {
  const res = await getSinglePage('home');
  if (!res?.pageData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      ...res,
    },
    revalidate: 10,
  };
}

export default function Home({ pageData, posts }) {
  return (
    <>
      <DynamicPage
        data={pageData?.page_dynamic_sections}
        seo={pageData?.seo}
        posts={posts}
      />
    </>
  );
}
