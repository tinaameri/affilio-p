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
            fontWeight: 400,
            lineHeight: 'normal',
            src: `url('/assets/fonts/YekanBakhFaNum-Regular.woff') format('woff')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Yekan Bakh',
            fontDisplay: 'swap',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            src: `url('/assets/fonts/YekanBakhFaNum-SemiBold.woff2') format('woff')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Yekan Bakh',
            fontDisplay: 'swap',
            fontStyle: 'normal',
            fontWeight: 800,
            lineHeight: 'normal',
            src: `url('/assets/fonts/YekanBakhFaNum-Bold.woff') format('woff')`,
          },
        },
      ]}
    />
  );
}
