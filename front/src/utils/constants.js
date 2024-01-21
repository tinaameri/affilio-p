export const REVALIDATE_RATE = 60;

// eslint-disable-next-line no-undef
// export const GRAPHQL_ENDPOINT = process.browser
//   ? '/graphql'
//   : 'https://wapi.usermost.com/index.php?graphql='; //TODO: load from env?

//export const GRAPHQL_ENDPOINT = "https://wapi1.smartech.ir/index.php?graphql=";
export const postPerPage = 6;
export const PAGINATION_POSTS_PER_PAGE = 16;
export const PAGINATION_SEARCH_POSTS_PER_PAGE = 100;
export const IMAGES = '/assets/images';

export const HERO_BACKGROUNDS = {
  blur: `url(${IMAGES}/bg/bg-blur.svg) center/cover no-repeat`,

};
export const CARD_BACKGROUNDS = {
  blur: `url(${IMAGES}/bg/bg-blur-card.svg) center/cover no-repeat`,

};
export const VERTICAL_CARD_BACKGROUNDS = {
dark:'url("/assets/images/top-right-blue.png") no-repeat left top,url("/assets/images/bottom-left-blue.png") no-repeat right bottom,radial-gradient(50% 50% at 50% 50%, #173466 0%, #11264B 100%)',
blur: `url(${IMAGES}/bg/bg-blur-card.svg) center/cover no-repeat`,

};
export const COLOR = {
  green: '#F4FBEC',
  white: '#FDFDFD',
  blue: '#DCEAFF',
};
export const INFO_COLOR = {
  white: '#FFF',
  primary: 'primary.1',
  gray: 'gray.0',
};
