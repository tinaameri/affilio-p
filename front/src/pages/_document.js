import Document, { Head, Html, Main, NextScript } from 'next/document';

import { ServerStyles, createStylesServer } from '@mantine/next';
import rtlCache from '@/components/rtl-cache';

const stylesServer = createStylesServer(rtlCache);
export default class _Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key="styles"
        />,
      ],
    };
  }

  render() {
    return (
      <Html lang="fa" dir="rtl">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/assets/fonts/yekan bakh en 04 regular.woff2"
            as="font"
            crossOrigin="true"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/assets/fonts/yekan bakh en 05 medium.woff"
            as="font"
            crossOrigin="true"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/assets/fonts/yekan bakh en 06 bold.woff2"
            as="font"
            crossOrigin="true"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/assets/fonts/yekan bakh en 07 heavy.woff2"
            as="font"
            crossOrigin="true"
            type="font/woff2"
          />
          <meta name="theme-color" content="#3651DE" />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WGXHJ68Z"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
