import { MediaQuery, Box } from '@mantine/core';

import BottomFooter from '@/components/footer/BottomFooter';
import TopFooter from '@/components/footer/TopFooter';
import AccordionFooter from '@/components/footer/AccordionFooter';
// import { mockdata, mockdataRightMenu, companyFooter } from '@/lib/page-directory/navJson';

export default function GeneralFooter({
  links,
  trust,
  copy_right,
  social,
  logo,
  newsletter,
}) {
  // const trust=[
  //     {
  //       "title": "سازمان نظام صنفی کشور",
  //       "image": "/assets/images/adverge/footer/nezam-senfi-rayaneiy.png",
  //       "link": ""
  //     },
  //     {
  //       "title": "ای نماد",
  //       "image": "/assets/images/adverge/footer/enamad.png",
  //       "link": ""
  //     },
  //     {
  //       "title": "نشانی ملی ثبت(رسانه های دیجیتال)",
  //       "image": "/assets/images/adverge/footer/samandehi.png",
  //       "link": ""
  //     }
  // ]

  return (
    <footer>
      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Box>
          <TopFooter
            links={links}
            trust={trust}
            logo={logo}
            newsletter={newsletter}
          />
        </Box>
      </MediaQuery>
      <MediaQuery largerThan="md" styles={{ display: 'none' }}>
        <Box>
          <AccordionFooter
            links={links}
            trust={trust}
            logo={logo}
            newsletter={newsletter}
          />
        </Box>
      </MediaQuery>
      <BottomFooter copy_right={copy_right} social={social} />
    </footer>
  );
}
