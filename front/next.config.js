/** @type {import('next').NextConfig} */
// const nextConfig = {
//   // basePath:'/docs',
//   // basePath: process.env.NEXT_PUBLIC_STAGE === 'true' ? process.env.NEXT_PUBLIC_BASE_URL_STAGE : '',
//   // experimental: {
//   //   publicDirectory: true,
//   //   appDir: true,
//   // },
//   //reactStrictMode: true,

// }

// module.exports = nextConfig

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.module.rules.push({
        sideEffects: false,
        test: /\.(jsx?|tsx?)$/,
      });
    }
    return config;
  },
  output: 'standalone',
  images: {
    unoptimized: true
    // loader: 'custom',
    // loaderFile: './staticloader.js',
  },


  // async redirects() {
  //   return [
  //     {
  //       source: '/blog/what-is-ad-campaign',
  //       destination: `/blog/post/کمپین_تبلیغاتی_چیست؟_نکات_مهم_در_راه%E2%80%8C%E2%80%8Cاندازی_یک_کمپین_تبلیغاتی`,
  //       permanent: true,
  //     }, {
  //       source: '/blog/sms-marketing',
  //       destination: `/blog/post/بازاریابی_پیامکی_و_پیام%E2%80%8Cهای_متنی_موثر_برای_ارتباط_با_مشتری`,
  //       permanent: true,
  //     }, {
  //       source: '/blog/successful-sms-marketing',
  //       destination: `/blog/post/کمپین_پیامکی_موفق_و_نحوه_برگزاری_آن`,
  //       permanent: true,
  //     }, {
  //       source: '/blog/sending-bulk-message',
  //       destination: `/blog/post/ارسال_پیامک_انبوه`,
  //       permanent: true,
  //     }, {
  //       source: `/blog/نحوه-ورود-به-پنل-ادورج`,
  //       destination: `/blog/post/نحوه_ورود_به_پنل_ادورج`,
  //       permanent: true,
  //     }, {
  //       source: '/blog/what-is-display-advertising',
  //       destination: `/blog/post/تبلیغات_نمایشی_چیست؟`,
  //       permanent: true,
  //     }, {
  //       source: '/blog/what-is-retargeting-ads',
  //       destination: `/blog/post/تبلیغات_ریتارگتینگ_چیست_و_چگونه_به_فروش_بهتر_کمک_می%E2%80%8Cکند؟`,
  //       permanent: true,
  //     }, {
  //       source: '/blog/persona-in-marketing/',
  //       destination: `/blog/post/پرسونای_مخاطب_در_بازاریابی`,
  //       permanent: true,
  //     }, {
  //       source: '/blog/enhancing-sms-campaign/',
  //       destination: `/blog/post/نکات_مهم_در_بهبود_کمپین_پیامکی`,
  //       permanent: true,
  //     }, {
  //       source: '/blog/what-is-conversion-rate/',
  //       destination: `/blog/post/نرخ_تبدیل_چیست_و_چرا_برای_بیزینس%E2%80%8Cها_اهمیت_دارد؟`,
  //       permanent: true,
  //     }, {
  //       source: '/blog/how-to-increase-online-sales/',
  //       destination: '`/blog/post/۱۰_نکته_برای_کمک_به_افزایش_فروش_آنلاین_`',
  //       permanent: true,
  //     }, {
  //       source: '/blog/what-is-competitive-advantage/',
  //       destination: `/blog/post/مزیت_رقابتی_در_بازار_به_چه_معناست؟`,
  //       permanent: true,
  //     }, {
  //       source: '/blog/what-is-ad-network/',
  //       destination: `/blog/post/شبکه_تبلیغاتی_یا_ادنتورک_چیست؟`,
  //       permanent: true,
  //     }, {
  //       source: '/blog/what-is-market-research/',
  //       destination: `/blog/post/تحقیقات_بازار_به_چه_معناست_و_چه_منفعتی_برای_کسب_و_کارها_دارد؟`,
  //       permanent: true,
  //     },
  //     {
  //       source: '/blog/what-is-clv-and-how-to-measure-it/',
  //       destination: `/blog/post/ارزش_طول_عمر_مشتری_%28CLV%29_چیست_و_نحوه_محاسبه_آن_چگونه_است؟`,
  //       permanent: true,
  //     },
  //     {
  //       source: '/blog/what-is-ctr/',
  //       destination: `/blog/post/نرخ_کلیک_%28CTR%29_چیست_و_چگونه_محاسبه_می%E2%80%8Cشود؟`,
  //       permanent: true,
  //     } ,{
  //       source: '/blog/what-is-marketing-automation/',
  //       destination: `/blog/post/مارکتینگ_اتومیشن_یا_اتوماسیون_بازاریابی_چیست؟`,
  //       permanent: true,
  //     },{
  //       source: '/blog/targeted-ads-by-adverge/',
  //       destination: `/blog/post/تبلیغات_هدفمند_با_استفاده_از_ادورج_چگونه_است؟`,
  //       permanent: true,
  //     },{
  //       source: '/blog/what-is-cross-selling/',
  //       destination: `/blog/post/تکنیک_فروش_مکمل_%28Cross-Selling%29_چیست_و_فرآیند_آن_چگونه_است؟`,
  //       permanent: true,
  //     },{
  //       source: '/blog/what-is-upselling',
  //       destination: `/blog/post/بیش_فروشی_%28upselling%29_و_عوامل_موثر_در_آن`,
  //       permanent: true,
  //     },{
  //       source: '/blog/everything-about-affiliate-marketing',
  //       destination: `/blog/post/همه_چیز_درباره_افیلیت_مارکتینگ_یا_بازاریابی_وابسته`,
  //       permanent: true,
  //     },{
  //       source: '/blog/what-is-digital-marketing/',
  //       destination: `/blog/post/دیجیتال_مارکتینگ_چیست_و_چه_کاربردی_دارد؟`,
  //       permanent: true,
  //     },{
  //       source: '/blog/what-is-market-research/',
  //       destination: `/blog/post/تحقیقات_بازار_به_چه_معناست_و_چه_منفعتی_برای_کسب_و_کارها_دارد؟`,
  //       permanent: true,
  //     },{
  //       source: '/blog/ab-testing-in-marketing',
  //       destination: `/blog/post/معنی_a-b_تست_در_بازاریابی_چیست؟`,
  //       permanent: true,
  //     },{
  //       source: '/blog/market-segmentation-steps/',
  //       destination: `/blog/post/مراحل_اجرای_سگمنتیشن_%28بخش%E2%80%8Cبندی_بازار%29_و_نمونه%E2%80%8Cهای_آن`,
  //       permanent: true,
  //     },{
  //       source: '/blog/market-segmentation/',
  //       destination: `/blog/post/بخش_بندی_بازار_یا_سگمنتیشن_و_انواع_آن`,
  //       permanent: true,
  //     },{
  //       source: '/blog/what-is-call-to-action/',
  //       destination: `/blog/post/کال_تو_اکشن_%28CTA%29_چیست_و_چه_کاربردی_دارد؟`,
  //       permanent: true,
  //     },{
  //       source: '/blog/digital-ads-advantages-and-disadvantages',
  //       destination: `/blog/post/مزایا_و_معایب_تبلیغات_در_اینترنت`,
  //       permanent: true,
  //     },{
  //       source: '/blog/what-is-push-notification-ads/',
  //       destination: `/blog/post/تبلیغات_پوش%E2%80%8Cنوتیفیکیشن_چیست_و_چرا_برای_کسب_و_کارها_اهمیت_دارد؟`,
  //       permanent: true,
  //     },{
  //       source: '/blog/what-is-kpi',
  //       destination: `/blog/post/KPI_چیست؟`,
  //       permanent: true,
  //     },{
  //       source: '/blog/targeted-ads-and-its-types/',
  //       destination: `/blog/post/تبلیغات_هدفمند_و_انواع_آن`,
  //       permanent: true,
  //     },{
  //       source: '/blog/different-advertising-mediums/',
  //       destination: `/blog/post/انواع_رسانه%E2%80%8Cهای_تبلیغاتی`,
  //       permanent: true,
  //     },{
  //       source: '/blog/what-is-digital-advertising/',
  //       destination: `/blog/post/تبلیغات_دیجیتال_چیست؟`,
  //       permanent: true,
  //     }

  //   ]
  // },

});


