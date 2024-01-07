import type { Schema, Attribute } from '@strapi/strapi';

export interface PageElementButtonWithoutLink extends Schema.Component {
  collectionName: 'components_page_element_button_without_links';
  info: {
    displayName: 'ButtonWithoutLink';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface PageElementButton extends Schema.Component {
  collectionName: 'components_page_element_buttons';
  info: {
    displayName: 'button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    newPage: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<
      ['primaryArrow', 'secondaryArrow', 'primary', 'secondary']
    >;
  };
}

export interface PageElementContent extends Schema.Component {
  collectionName: 'components_page_element_contents';
  info: {
    displayName: 'content';
    icon: 'layer';
    description: '';
  };
  attributes: {
    description: Attribute.RichText & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageElementFieldInfo extends Schema.Component {
  collectionName: 'components_page_element_field_infos';
  info: {
    displayName: 'field_info';
    icon: 'envelop';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    info: Attribute.String & Attribute.Required;
    link: Attribute.String;
  };
}

export interface PageElementFooterLinks extends Schema.Component {
  collectionName: 'components_page_element_footer_links';
  info: {
    displayName: 'footerLinks';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    links: Attribute.Component<'page-element.button', true>;
  };
}

export interface PageElementLogo extends Schema.Component {
  collectionName: 'components_page_element_logos';
  info: {
    displayName: 'Logo';
    icon: 'picture';
  };
  attributes: {
    header: Attribute.Media & Attribute.Required;
    footer: Attribute.Media & Attribute.Required;
  };
}

export interface PageElementMetaRobots extends Schema.Component {
  collectionName: 'components_page_element_meta_robots';
  info: {
    displayName: 'metaRobots';
  };
  attributes: {
    index: Attribute.Boolean;
    follow: Attribute.Boolean;
  };
}

export interface PageElementNavMenu extends Schema.Component {
  collectionName: 'components_page_element_nav_menus';
  info: {
    displayName: 'nav_link';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String;
    sub_links: Attribute.Component<'page-element.nav-sub-menu', true>;
  };
}

export interface PageElementNavSubMenu extends Schema.Component {
  collectionName: 'components_page_element_nav_sub_menus';
  info: {
    displayName: 'nav_sub_link';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface PageElementOption extends Schema.Component {
  collectionName: 'components_page_element_options';
  info: {
    displayName: 'option';
    icon: 'check';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface PageElementSearchBox extends Schema.Component {
  collectionName: 'components_page_element_search_boxes';
  info: {
    displayName: 'search_box';
    icon: 'search';
  };
  attributes: {
    placeholder: Attribute.Text;
    button: Attribute.String;
  };
}

export interface PageElementSeller extends Schema.Component {
  collectionName: 'components_page_element_sellers';
  info: {
    displayName: 'seller';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageElementSlide extends Schema.Component {
  collectionName: 'components_page_element_slides';
  info: {
    displayName: 'slide';
    description: '';
  };
  attributes: {
    full_name: Attribute.String;
    content: Attribute.Text & Attribute.Required;
    position: Attribute.String;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface PageElementSocial extends Schema.Component {
  collectionName: 'components_page_element_socials';
  info: {
    displayName: 'social';
    icon: 'earth';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface PageElementTab extends Schema.Component {
  collectionName: 'components_page_element_tabs';
  info: {
    displayName: 'tab';
    icon: 'folder';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    icon: Attribute.Enumeration<['plane', 'shopping', 'wallet']>;
    caption: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    body: Attribute.RichText;
    galleryTitle: Attribute.String;
    gallery: Attribute.Media;
  };
}

export interface PageElementTimelineItem extends Schema.Component {
  collectionName: 'components_page_element_timeline_items';
  info: {
    displayName: 'TimelineItem';
    icon: 'filter';
    description: '';
  };
  attributes: {
    date: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface PageElementTrustLogo extends Schema.Component {
  collectionName: 'components_page_element_trust_logos';
  info: {
    displayName: 'trust_logo';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    html: Attribute.RichText;
  };
}

export interface PageElementWordsAnimation extends Schema.Component {
  collectionName: 'components_page_element_words_animations';
  info: {
    displayName: 'Words_animation';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageSection2ColWithImage extends Schema.Component {
  collectionName: 'components_page_section_2col_with_images';
  info: {
    displayName: 'cardSection';
    icon: 'layout';
    description: '';
  };
  attributes: {
    heading_title: Attribute.String;
    heading_description: Attribute.Text;
    image: Attribute.Media & Attribute.Required;
    buttons: Attribute.Component<'page-element.button', true>;
    reverse: Attribute.Boolean & Attribute.DefaultTo<false>;
    background: Attribute.Enumeration<['orange', 'green', 'white', 'blue']> &
      Attribute.DefaultTo<'white'>;
    content: Attribute.Component<'page-element.content', true>;
  };
}

export interface PageSectionBanner extends Schema.Component {
  collectionName: 'components_page_section_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    description: Attribute.RichText;
    title: Attribute.RichText & Attribute.Required;
  };
}

export interface PageSectionCardBanner extends Schema.Component {
  collectionName: 'components_page_section_card_banners';
  info: {
    displayName: 'CardBanner';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
    image: Attribute.Media & Attribute.Required;
    heading_title: Attribute.String;
    heading_description: Attribute.String;
    background: Attribute.Enumeration<
      ['orange', 'green', 'white', 'orangePattern']
    >;
  };
}

export interface PageSectionContactUs extends Schema.Component {
  collectionName: 'components_page_section_contactuses';
  info: {
    displayName: 'ContactUs';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    description: Attribute.RichText;
    button: Attribute.Component<'page-element.button'>;
    image: Attribute.Media & Attribute.Required;
    background: Attribute.Enumeration<['green', 'white', 'blue']>;
  };
}

export interface PageSectionCreateCampaign extends Schema.Component {
  collectionName: 'components_page_section_create_campaigns';
  info: {
    displayName: 'CreateCampaign';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    heading_title: Attribute.String & Attribute.Required;
    image_desktop: Attribute.Media & Attribute.Required;
    image_mobile: Attribute.Media & Attribute.Required;
  };
}

export interface PageSectionHero extends Schema.Component {
  collectionName: 'components_page_section_heroes';
  info: {
    displayName: 'hero';
    icon: 'crown';
    description: '';
  };
  attributes: {
    caption: Attribute.String;
    title: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    sub_title: Attribute.RichText &
      Attribute.SetMinMaxLength<{
        maxLength: 900;
      }>;
    action: Attribute.Component<'page-element.button'>;
    image: Attribute.Media;
    background: Attribute.Enumeration<
      ['greenPattern', 'orangePattern', 'bluePattern', 'green', 'blue']
    > &
      Attribute.DefaultTo<'green'>;
    words_animation: Attribute.Component<'page-element.words-animation', true>;
  };
}

export interface PageSectionImageCarousel extends Schema.Component {
  collectionName: 'components_page_section_image_carousels';
  info: {
    displayName: 'imageCarousel';
    icon: 'picture';
  };
  attributes: {
    images: Attribute.Media & Attribute.Required;
  };
}

export interface PageSectionInfo extends Schema.Component {
  collectionName: 'components_page_section_infos';
  info: {
    displayName: 'info';
    icon: 'information';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    background: Attribute.Enumeration<['pattern', 'white', 'gray']> &
      Attribute.DefaultTo<'white'>;
  };
}

export interface PageSectionSellerCarousel extends Schema.Component {
  collectionName: 'components_page_section_seller_carousels';
  info: {
    displayName: 'sellerCarousel';
    description: '';
  };
  attributes: {
    seller: Attribute.Component<'page-element.seller', true>;
    heading_title: Attribute.String;
  };
}

export interface PageSectionSimpleText extends Schema.Component {
  collectionName: 'components_page_element_simple_texts';
  info: {
    displayName: 'simpleText';
    icon: 'quote';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface PageSectionTabs extends Schema.Component {
  collectionName: 'components_page_section_tabs';
  info: {
    displayName: 'tabs';
    icon: 'folder';
  };
  attributes: {
    items: Attribute.Component<'page-element.tab', true>;
  };
}

export interface PageSectionTestimonial extends Schema.Component {
  collectionName: 'components_page_section_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'quote';
    description: '';
  };
  attributes: {
    heading_title: Attribute.String;
    slide: Attribute.Component<'page-element.slide', true>;
    background: Attribute.Enumeration<
      ['blue', 'green', 'orange', 'greenPattern']
    >;
    heading_description: Attribute.Text;
  };
}

export interface PageSectionTimelineSection extends Schema.Component {
  collectionName: 'components_page_section_timeline_sections';
  info: {
    displayName: 'TimelineSection';
    icon: 'filter';
  };
  attributes: {
    Item: Attribute.Component<'page-element.timeline-item', true>;
    heading_title: Attribute.String & Attribute.Required;
  };
}

export interface PageSectionTopBanner extends Schema.Component {
  collectionName: 'components_page_section_top_banners';
  info: {
    displayName: 'TopBanner';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    link: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageSectionVerticalCardList extends Schema.Component {
  collectionName: 'components_page_section_vertical_card_lists';
  info: {
    displayName: 'verticalCardList';
  };
  attributes: {
    cards: Attribute.Component<'page-section.vertical-card', true>;
  };
}

export interface PageSectionVerticalCard extends Schema.Component {
  collectionName: 'components_page_section_vertical_cards';
  info: {
    displayName: 'verticalCard';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface PageSectionVideo extends Schema.Component {
  collectionName: 'components_page_section_videos';
  info: {
    displayName: 'Video';
    icon: 'television';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    video: Attribute.Media & Attribute.Required;
    background: Attribute.Enumeration<['orange', 'green', 'white']>;
  };
}

export interface SharedGdpr extends Schema.Component {
  collectionName: 'components_shared_gdprs';
  info: {
    displayName: 'GDPR';
    icon: 'key';
    description: '';
  };
  attributes: {
    heading_title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    description: Attribute.RichText;
    customize: Attribute.String & Attribute.Required;
    toggle_option_essential: Attribute.Component<'page-element.option'>;
    accept_button: Attribute.Component<'page-element.button-without-link'>;
    decline_button: Attribute.Component<'page-element.button-without-link'>;
    toggle_option_analytics: Attribute.Component<'page-element.content'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    structuredData: Attribute.JSON;
    canonicalURL: Attribute.String;
    metaRobots: Attribute.Component<'page-element.meta-robots', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page-element.button-without-link': PageElementButtonWithoutLink;
      'page-element.button': PageElementButton;
      'page-element.content': PageElementContent;
      'page-element.field-info': PageElementFieldInfo;
      'page-element.footer-links': PageElementFooterLinks;
      'page-element.logo': PageElementLogo;
      'page-element.meta-robots': PageElementMetaRobots;
      'page-element.nav-menu': PageElementNavMenu;
      'page-element.nav-sub-menu': PageElementNavSubMenu;
      'page-element.option': PageElementOption;
      'page-element.search-box': PageElementSearchBox;
      'page-element.seller': PageElementSeller;
      'page-element.slide': PageElementSlide;
      'page-element.social': PageElementSocial;
      'page-element.tab': PageElementTab;
      'page-element.timeline-item': PageElementTimelineItem;
      'page-element.trust-logo': PageElementTrustLogo;
      'page-element.words-animation': PageElementWordsAnimation;
      'page-section.2col-with-image': PageSection2ColWithImage;
      'page-section.banner': PageSectionBanner;
      'page-section.card-banner': PageSectionCardBanner;
      'page-section.contact-us': PageSectionContactUs;
      'page-section.create-campaign': PageSectionCreateCampaign;
      'page-section.hero': PageSectionHero;
      'page-section.image-carousel': PageSectionImageCarousel;
      'page-section.info': PageSectionInfo;
      'page-section.seller-carousel': PageSectionSellerCarousel;
      'page-section.simple-text': PageSectionSimpleText;
      'page-section.tabs': PageSectionTabs;
      'page-section.testimonial': PageSectionTestimonial;
      'page-section.timeline-section': PageSectionTimelineSection;
      'page-section.top-banner': PageSectionTopBanner;
      'page-section.vertical-card-list': PageSectionVerticalCardList;
      'page-section.vertical-card': PageSectionVerticalCard;
      'page-section.video': PageSectionVideo;
      'shared.gdpr': SharedGdpr;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
