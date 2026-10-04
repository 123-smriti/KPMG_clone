// Two promo bands shown near the bottom of the homepage.
//  tone   : 'blue' (bright blue panel) | 'dark' (navy panel)
//  layout : 'panel-left' (panel top-left over a full-width photo)
//           'panel-right' (photo on the left, panel over its lower-right corner)
//  image  : file name in src/assets/images; imagePosition is the photo's focal point.
export const subscribePromo = {
  id: 'subscribe',
  tone: 'blue',
  layout: 'panel-left',
  title: 'Subscribe to KPMG Insights',
  text: 'Access personalized content based on your interests by signing up today.',
  ctaLabel: 'Create an account',
  ctaHref: '#',
  image: 'promo-subscribe.webp',
  imageAlt: 'Glass office building reflecting trees',
  imagePosition: 'right center', // the left of the photo sits behind the panel
};

export const careersPromo = {
  id: 'careers',
  tone: 'dark',
  layout: 'panel-right',
  title: 'Interested in a career at KPMG?',
  text: 'We want to support your journey to an impactful career. Join us and do work that matters.',
  ctaLabel: 'Find your next opportunity',
  ctaHref: '/careers',
  image: 'promo-careers.jpg',
  imageAlt: 'A group of colleagues working together around a table',
  imagePosition: 'center 30%',
};
