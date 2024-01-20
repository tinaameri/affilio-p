export const REVALIDATE_RATE = 60;

// eslint-disable-next-line no-undef
// export const GRAPHQL_ENDPOINT = process.browser
//   ? '/graphql'
//   : 'https://wapi.usermost.com/index.php?graphql='; //TODO: load from env?

//export const GRAPHQL_ENDPOINT = "https://wapi1.smartech.ir/index.php?graphql=";
export const postPerPage = 6;
export const PAGINATION_POSTS_PER_PAGE = 16;
export const PAGINATION_SEARCH_POSTS_PER_PAGE = 100;
export const IMAGES = '/assets/images/adverge';

export const HERO_BACKGROUNDS = {
  greenPattern: `url(${IMAGES}/bg/bg-green-circle.png) center/cover no-repeat`,
  orangePattern: `url(${IMAGES}/bg/bg-orange-circle.png) center/cover no-repeat`,
  bluePattern: `url(${IMAGES}/bg/bg-blue-circle.png) center/cover no-repeat`,
  green: '#F4FBEC',
  blue: '#DCEAFF',
};
export const CARD_BACKGROUNDS = {
  orange: `url(${IMAGES}/bg/bg-orange.png) center/cover no-repeat`,
  green: `url(${IMAGES}/bg/bg-green.png) center/cover no-repeat`,
  white: '#FDFDFD',
  orangePattern: `url(${IMAGES}/bg/bg-orange-pattern.png) center/cover no-repeat`,
  blue: '#E9F2FF',
};
export const VERTICAL_CARD_BACKGROUNDS = {
dark:'url("/assets/images/top-right-blue.png") no-repeat left top,url("/assets/images/bottom-left-blue.png") no-repeat right bottom,radial-gradient(50% 50% at 50% 50%, #173466 0%, #11264B 100%)'
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
