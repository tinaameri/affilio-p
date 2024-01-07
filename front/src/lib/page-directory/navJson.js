import { IMAGES } from "@/utils/constants";

export const mockdata = {
  Home: { title: "صفحه اصلی", link: "/" },
  // Platform: [{
  //     menu: "راهکارها",
  //     subMenu: [

  //         {
  //             title: "جایی که مشتریان‌تان هستند حضور داشته باشید",
  //             description: '',
  //             icon: '/assets/images/smartech/menu/customers.png',
  //             link: '/solution-adtech'
  //         },
  //         {
  //             title: "پیام خود را در زمان مناسب به مخاطبتان برسانید",
  //             description: '',
  //             icon: '/assets/images/smartech/menu/message.png',
  //             link: '/solution-martech'

  //         },
  //         {
  //             title: "بر اساس داده‌ها تصمیم‌گیری کنید",
  //             description: '',
  //             icon: '/assets/images/smartech/menu/chart.png',
  //             link: '#'

  //         },
  //         {
  //             title: "دقیق بسنجید و هوشمندانه هزینه کنید",
  //             description: '',
  //             icon: '/assets/images/smartech/menu/cost.png',
  //             link: '/solution-martech'

  //         },
  //         {
  //             title: "فرصت‌های مشارکت را از دست ندهید",
  //             description: '',
  //             icon: '/assets/images/smartech/menu/strategic_planning.png',
  //             link: '#'

  //         },

  //     ]
  // }],
  Services: [
    {
      menu: "خدمات ادورج",
      subMenu: [
        {
          title: "کمپین پوش نوتیفیکیشن",
          description:
            "با استفاده از کمپین‌های نمایشی جست‌و‌جو محور می‌تونین محصول خودتون رو در نتایج جستجوی دیجی‌کالا در کنار کالاهای پربازدید نمایش بدین (البته در صورتی که فروشنده دیجی‌کالا باشین). در این کمپین‌ها شما می‌تونید محصولات خودتون رو برای تبلیغ انتخاب کنید، بودجه‌ رو مشخص کنین و عملکرد تبلیغاتتون رو بسنجین.",
          icon: `${IMAGES}/menu/push-notification.svg`,
          link: "/push-notification",
          btn: "اطلاعات بیشتر",
          value: ""
        },
        {
          title: "کمپین جست‌وجو محور",
          description:
            "با استفاده از کمپین‌های نمایشی جست‌و‌جو محور می‌تونین محصول خودتون رو در نتایج جستجوی دیجی‌کالا در کنار کالاهای پربازدید نمایش بدین (البته در صورتی که فروشنده دیجی‌کالا باشین). در این کمپین‌ها شما می‌تونید محصولات خودتون رو برای تبلیغ انتخاب کنید، بودجه‌ رو مشخص کنین و عملکرد تبلیغاتتون رو بسنجین.",
          icon: `${IMAGES}/menu/search.svg`,
          link: "/search",
          btn: "اطلاعات بیشتر",
          value: ""
        },

        {
          title: "کمپین پیامکی",
          description:
            "پنل ارسال پیامک  ادورج، با ارائه گزارش‌های دقیق و تحلیلی از پیامک‌های ارسال‌شده، میزان به مقصد رسیدن پیامک‌ها، کلیک روی لینک‌ها و … به شما کمک می‌کنه کمپین‌های مختلف‌تون رو با هم مقایسه کنین و با بهینه کردن کمپین‌ها بهترین نتیجه رو از این نوع تبلیغات بگیرین.",
          icon: `${IMAGES}/menu/sms.svg`,
          link: "/message",
          btn: "اطلاعات بیشتر",
          value: ""
        },

        {
          title: "کمپین ریتارگتینگ",
          description:
            "خیلی وقت‌ها می‌شه که موقع خرید، مخاطب محصول یا خدمات شما‌رو می‌بینه، بهش نیاز هم داره، ولی همون لحظه خرید نمی‌کنه. حالا دلایل مختلفی هم داره، یا سرش شلوغه، یا هنوز تصمیم قطعیش رو برای خرید نگرفته. به خاطر همین، اینکه دوباره تبلیغ شما رو ببینه خیلی تاثیرگذاره، چون هم توجهش بیشتر‌ از سری اول جلب می‌شه، هم اگه این‌بار قصد خرید داره، محصول یا سرویس شما یادش میاد و خرید می‌کنه.",
          icon: `${IMAGES}/menu/retargeting.svg`,
          link: "/retargeting",
          btn: "اطلاعات بیشتر",
          value: "financial-services"
        },
        {
          title: "کمپین نمایشی بنری ",
          description:
            "دراین کمپین‌ها، گروه هدفتون رو انتخاب ‌می‌کنین تا بنرهای مربوط به محصول یا خدمت شما در وبسایت‌های پربازدید به اون گروه نمایش داده بشن؛ مخاطبان هدف با کلیک روی تبلیغ، به صفحه‌ جزئیات محصول یا خدمت وارد و به مشتری شما تبدیل می‌شن.",
          icon: `${IMAGES}/menu/banner.svg`,
          link: "/banner-show",
          btn: "اطلاعات بیشتر",
          value: ""
        }
      ]
    }
  ],

  Politics: [
    {
      menu: "سیاست های سایت",
      subMenu: [
        { title: "حریم خصوصی", link: "#" },
        { title: "قوانین و مقررات", link: "#" },
        { title: "قوانین کوکی", link: "#" }
      ]
    }
  ],
  Company_Header: [
    {
      menu: "Company",
      subMenu: [
        { title: "درباره ادورج", link: "/about-us" },
        { title: "اخبار", link: "/blog" },
        { title: "تماس با ما", link: "/contact-us" },
        { title: "راهنما", link: "/docs" }
      ]
    }
  ],
  Company_Footer: [
    {
      menu: "ادورج",
      subMenu: [
        {
          title: "صفحه اصلی",
          description: "",
          icon: "/assets/images/blog-3.png",
          link: "/"
        },

        {
          title: "درباره ادورج",
          description: "",

          icon: "/assets/images/blog-3.png",
          link: "/about-us"
        },
        {
          title: "اخبار",
          description: "",
          icon: "/assets/images/blog-3.png",
          link: "/blog"
        },
        {
          title: "تماس با ما",
          description: "",

          icon: "/assets/images/blog-3.png",
          link: "/contact-us"
        },

        {
          title: "راهنما",
          description: "",

          icon: "/assets/images/blog-3.png",
          link: ""
        }
      ]
    }
  ],
  Contact: [
    {
      menu: "راه های ارتباطی",
      subMenu: [
        {
          title: "شهرک غرب، خیابان مهستان، کوچه یازدهم، پلاک ۱۵",
          link: "https://maps.app.goo.gl/Z2stTatpitfFsdAP9"
        },
        { title: " تلفن :  43000086 021", link: "tel:+09802143000086" },
        { title: "info@adverge.ir", link: "mailto:info@adverge.ir" }
      ]
    }
  ],
  Trust: [
    {
      title: "سازمان نظام صنفی کشور",
      image: `${IMAGES}/footer/nezam-senfi-rayaneiy.png`,
      link: ""
    },
    { title: "ای نماد", image: `${IMAGES}/footer/enamad.png`, link: "" },
    {
      title: "نشانی ملی ثبت(رسانه های دیجیتال)",
      image: `${IMAGES}/footer/samandehi.png`,
      link: ""
    }
  ]
};

export const mockdataRightMenu = [
  {
    title: "Channels",
    description: []
  }
];

export const footer = [
  { title: "حریم خصوصی", link: "/privacy-policy" },
  { title: "|", link: "#" },
  { title: "قوانین و مقررات", link: "/terms" },
  { title: "|", link: "#" },
  { title: "قوانین کوکی", link: "/cookie-policy" }
];
