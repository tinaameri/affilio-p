import { useContext, useEffect } from 'react';
import Header from '@/components/GeneralHeader';
import Footer from '@/components/GeneralFooter';
import { ModalWithReducer } from '@/context/ModalProvider';
import { useRouter } from 'next/router';
import RequestDemoModal from '@/components/modal/RequestDemoModal';
import SuccessModal from '@/components/modal/SuccessModal';
import GDPR from '@/components/modal/GDPR';
import { NextSeo } from 'next-seo';
// import LineScrollAnimation from './LineScrollAnimation';

const initIntrack = () => {
  (function (i, n, t, r, a, c, k) {
    let o = (i['InTrack'] = i['InTrack'] || {});
    i[a] =
      i[a] ||
      function () {
        (o.q = o.q || []).push(arguments);
      };
    let s = n.createElement(t);
    s.async = true;
    s.src = r;
    s.onload = function () {
      o.init && o.init(c);
    };
    let e = n.getElementsByTagName(t)[0];
    e.parentNode.insertBefore(s, k);
  })(
    window,
    document,
    'script',
    '//static1.intrack.ir/api/web/download/sdk/v1/inTrack.min.js',
    'Intk',
    {
      app_key: 'AAAAGg',
      auth_key: 'a8cf0ed4-d915-44bf-9645-2b72a349036c',
      public_key:
        'BPbiuDzDiduVxrx4pxSZynQ9ianfmIYD7oC_GJ-Mg7bQvyzkAf8NuPDHuBicjRVkMPkwmg-xurke8kgC12TRLD4=',
      yektanet_syncing: true,
      mediaad_syncing: true,
    },
  );
};
const initAnalytics = () => {
  // Google Analytics tracking code
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'GTM-52KXVG8', {
    page_path: window.location.pathname,
  });
  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=$GTM-52KXVG8';
  script.async = true;
  document.head.appendChild(script);

  //   //**TODO hotjar**//
  //   //! change hjid
  //   //** (function (h, o, t, j, a, r) {
  //   //** h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
  //   //**  h._hjSettings = { hjid: 3492885, hjsv: 6 };
  //   //** a = o.getElementsByTagName('head')[0];
  //   //** r = o.createElement('script'); r.async = 1;
  //   //** r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  //   //**  a.appendChild(r);
  //   //**})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
};
export default function BaseLayout({ config, children, slug }) {
  const { modalOpenState } = useContext(ModalWithReducer);
  const router = useRouter();
  const shouldHideGDPR = router.pathname.startsWith('/users');

  useEffect(() => {
    const storageStateOption = JSON.parse(localStorage.getItem('option'));
    const analytics = storageStateOption?.analytics;
    //const essential = storageStateOption?.essential;

    if (analytics === true) {
      initAnalytics();
    }
    // if (essential === true) {
    // }
    initIntrack();

    if (
      !modalOpenState.showModalGpdr &&
      storageStateOption !== null &&
      !shouldHideGDPR
    ) {
      window.Intk('updateProfile', {
        attributes: {
          affilio: true,
        },
      });
      window.Intk('InitWebPush', {
        isRTL: true,
        widget: {
          enable: true,
        },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpenState.showModalGpdr]);

  // const [show, setShow] = useState(true);

  // const handleClose = () => {
  //   setShow(false);
  // };
  // const handleOpen = () => {
  //   setShow(true);
  // };
  // const [scrolled, setScrolled] = useState(false)
  // useEffect(() => {

  //   const handleScroll = () => {
  //     if (!scrolled) {
  //       document.body.classList.add('scrolled');
  //       setScrolled(true)
  //     }

  //     clearTimeout(window.scrollTimer);
  //     window.scrollTimer = setTimeout(() => {
  //       document.body.classList.remove('scrolled');
  //       setScrolled(false)
  //     }, 500);
  //   };

  //   document.addEventListener('scroll', handleScroll);

  //   return () => {
  //     document.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  //   let scrolled = false;

  //   const handleScroll = () => {
  //     if (!scrolled) {
  //       document.body.classList.add('scrolled');
  //       scrolled = true;
  //     }

  //     clearTimeout(window.scrollTimer);
  //     window.scrollTimer = setTimeout(() => {
  //       document.body.classList.remove('scrolled');
  //       scrolled = false;
  //     }, 500);
  //   };

  //   document.addEventListener('scroll', handleScroll);

  //   return () => {
  //     document.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <>
      <NextSeo titleTemplate="%s - افیلیو" />
      <Header
        links={config?.Navigation}
        logo={config?.logo}
        slug={slug}
        button={config?.header_button}
        top_banner={config?.top_banner}
      />
      <main
        className={`main-box fixed-pattern `}
        style={{ marginTop: config?.top_banner ? '182px' : 'unset' }}
      >
        {/* <LineScrollAnimation/> */}
        {children}
      </main>
      <Footer
        links={config?.footerNavigation || []}
        logo={config?.logo}
        trust={config?.trust_logo || []}
        copy_right={config?.copy_right}
        social={config?.social_media}
        newsletter={config?.newsletter}
      />
      <RequestDemoModal />
      <SuccessModal />
      {shouldHideGDPR ? null : <GDPR content={config?.Gdpr} />}
    </>
  );
}
