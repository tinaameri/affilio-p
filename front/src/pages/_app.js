import Providers from '@/pages/providers';
import '@/styles/globals.scss';
import Layout from '@/components/BaseLayout';
import { Center, Loader } from '@mantine/core';
// import dynamic from 'next/dynamic';

export default function App(props) {
  const { Component, pageProps } = props;
  console.log('APP PROPS', pageProps);
  return (
    <Providers>
      <Layout config={pageProps?.config} slug={pageProps?.pageData?.slug}>
        {Object.keys(pageProps).length !== 0 ? (
          <Component {...pageProps} />
        ) : (
          <Center mt="200px">
            <Loader variant="bars" />
          </Center>
        )}{' '}
      </Layout>
  </Providers>
  );
}
