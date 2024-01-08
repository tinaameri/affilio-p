import { NextResponse } from 'next/server';

const redirects = {
  '/blog/what-is-ad-campaign':
    '/blog/post/کمپین_تبلیغاتی_چیست؟_نکات_مهم_در_راه%E2%80%8C%E2%80%8Cاندازی_یک_کمپین_تبلیغاتی',
  '/blog/sms-marketing':
    '/blog/post/بازاریابی_پیامکی_و_پیام%E2%80%8Cهای_متنی_موثر_برای_ارتباط_با_مشتری',
  '/blog/successful-sms-marketing': `/blog/post/کمپین_پیامکی_موفق_و_نحوه_برگزاری_آن`,
  '/blog/sending-bulk-message': `/blog/post/ارسال_پیامک_انبوه`,

  '/blog/what-is-display-advertising': `/blog/post/تبلیغات_نمایشی_چیست؟`,
  '/blog/what-is-retargeting-ads': `/blog/post/تبلیغات_ریتارگتینگ_چیست_و_چگونه_به_فروش_بهتر_کمک_می%E2%80%8Cکند؟`,
  '/blog/persona-in-marketing/': `/blog/post/پرسونای_مخاطب_در_بازاریابی`,
  '/blog/enhancing-sms-campaign/': `/blog/post/نکات_مهم_در_بهبود_کمپین_پیامکی`,
  '/blog/what-is-conversion-rate/': `/blog/post/نرخ_تبدیل_چیست_و_چرا_برای_بیزینس%E2%80%8Cها_اهمیت_دارد؟`,
  '/blog/how-to-increase-online-sales/': `/blog/post/۱۰_نکته_برای_کمک_به_افزایش_فروش_آنلاین_`,
  '/blog/what-is-competitive-advantage/': `/blog/post/مزیت_رقابتی_در_بازار_به_چه_معناست؟`,
  '/blog/what-is-ad-network/': `/blog/post/شبکه_تبلیغاتی_یا_ادنتورک_چیست؟`,
  '/blog/what-is-market-research/': `/blog/post/تحقیقات_بازار_به_چه_معناست_و_چه_منفعتی_برای_کسب_و_کارها_دارد؟`,
  '/blog/what-is-clv-and-how-to-measure-it/': `/blog/post/ارزش_طول_عمر_مشتری_%28CLV%29_چیست_و_نحوه_محاسبه_آن_چگونه_است؟`,
  '/blog/what-is-ctr/': `/blog/post/نرخ_کلیک_%28CTR%29_چیست_و_چگونه_محاسبه_می%E2%80%8Cشود؟`,
  '/blog/what-is-marketing-automation/': `/blog/post/مارکتینگ_اتومیشن_یا_اتوماسیون_بازاریابی_چیست؟`,

  '/blog/targeted-ads-by-adverge/': `/blog/post/تبلیغات_هدفمند_با_استفاده_از_ادورج_چگونه_است؟`,

  '/blog/what-is-cross-selling/': `/blog/post/تکنیک_فروش_مکمل_%28Cross-Selling%29_چیست_و_فرآیند_آن_چگونه_است؟`,
  '/blog/نحوه-ورود-به-پنل-ادورج': `/blog/post/نحوه_ورود_به_پنل_ادورج`,
  '/blog/what-is-upselling': `/blog/post/بیش_فروشی_%28upselling%29_و_عوامل_موثر_در_آن`,
  '/blog/everything-about-affiliate-marketing': `/blog/post/همه_چیز_درباره_افیلیت_مارکتینگ_یا_بازاریابی_وابسته`,
  '/blog/what-is-digital-marketing/': `/blog/post/دیجیتال_مارکتینگ_چیست_و_چه_کاربردی_دارد؟`,
  '/blog/ab-testing-in-marketing': `/blog/post/معنی_a-b_تست_در_بازاریابی_چیست؟`,
  '/blog/market-segmentation-steps/': `/blog/post/مراحل_اجرای_سگمنتیشن_%28بخش%E2%80%8Cبندی_بازار%29_و_نمونه%E2%80%8Cهای_آن`,
  '/blog/market-segmentation/': `/blog/post/بخش_بندی_بازار_یا_سگمنتیشن_و_انواع_آن`,
  '/blog/what-is-call-to-action/': `/blog/post/کال_تو_اکشن_%28CTA%29_چیست_و_چه_کاربردی_دارد؟`,
  '/blog/digital-ads-advantages-and-disadvantages': `/blog/post/مزایا_و_معایب_تبلیغات_در_اینترنت`,
  '/blog/what-is-push-notification-ads/': `/blog/post/تبلیغات_پوش%E2%80%8Cنوتیفیکیشن_چیست_و_چرا_برای_کسب_و_کارها_اهمیت_دارد؟`,
  '/blog/what-is-kpi': `/blog/post/KPI_چیست؟`,
  '/blog/targeted-ads-and-its-types/': `/blog/post/تبلیغات_هدفمند_و_انواع_آن`,
  '/blog/different-advertising-mediums/': `/blog/post/انواع_رسانه%E2%80%8Cهای_تبلیغاتی`,
  '/blog/what-is-digital-advertising/': `/blog/post/تبلیغات_دیجیتال_چیست؟`,
};

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (redirects[pathname]) {
    const absoluteUrl = `https://adverge.io${redirects[pathname]}`;
    return NextResponse.redirect(absoluteUrl);
  }

  return NextResponse.next();
}
