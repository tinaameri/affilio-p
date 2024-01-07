// import { NextSeo } from "next-seo";
// import DynamicPage from "@/components/sections/homePage/DynamicPage";
// import { pages } from "public/assets/contentJson";

// export async function getStaticPaths() {
//     const pageSlugs = ["push_notification", "banner-show", "about-us", "message", "retargeting","contact-us","home"]
//     return {
//         paths: pageSlugs.map((s) => (
//             {
//                 params: {
//                     dynamicPageSlug: s
//                 }
//             }
//         )),
//         fallback: false
//     }

// }

// export async function getStaticProps({ params }) {
//     const data = pages[params.dynamicPageSlug]
//     return {
//         props: {
//             data,
//         }
//     }
// }

// export default function Page({ data }) {
//     return (
//         <>
//             <NextSeo
//                 title={data.title}
//                 description={data.description}
//             />
//             <DynamicPage data={data.sections} />
//         </>
//     )
// }

import { getPagesSlugs, getSinglePage } from "@/api//query/staticPages";
import DynamicPage from "@/components/DynamicPage";
import { REVALIDATE_RATE } from "@/api/clinet";

export async function getStaticProps({ params }) {
  const res = await getSinglePage(params.dynamicPageSlug);
  if (!res?.pageData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      ...res,
    },
    revalidate: REVALIDATE_RATE,
  };
}
export async function getStaticPaths() {
  const pageSlugs = await getPagesSlugs();
  const data = {
    paths: pageSlugs?.map((s) => ({
      params: {
        dynamicPageSlug: s.id,
      },
    })),

    fallback: true,
  };

  return data;
}

export default function Page({pageData}) {
  return (
    <>
      <DynamicPage   data={pageData?.page_dynamic_sections}
        seo={pageData?.seo}/>
    </>
  );
}
