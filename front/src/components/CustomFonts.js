import { Global } from '@mantine/core';
export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Yekan Bakh',
            fontDisplay: 'swap',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: 'normal',
            src: `url('/assets/fonts/yekan bakh en 04 regular.woff2') format('woff2')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Yekan Bakh',
            fontDisplay: 'swap',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            src: `url('/assets/fonts/yekan bakh en 05 medium.woff2') format('woff2')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Yekan Bakh',
            fontDisplay: 'swap',
            fontStyle: 'normal',
            fontWeight: 900,
            lineHeight: 'normal',
            src: `url('/assets/fonts/yekan bakh en 06 bold.woff2') format('woff2')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Yekan Bakh',
            fontDisplay: 'swap',
            fontStyle: 'normal',
            fontWeight: 'bold',
            lineHeight: 'normal',
            src: `url('/assets/fonts/yekan bakh en 07 heavy.woff2') format('woff2')`,
          },
        },
      ]}
    />
  );
}
