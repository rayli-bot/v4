module.exports = {
  siteTitle: 'Ray Lee | Crypto. Engineer',
  siteDescription:
    'Ray Lee is a crypto. engineer based in Hong Kong who specializes in building blockchain applications, Real-time Progressive Web App (PWA), Mobile App and Cryptographic Protocol.',
  siteKeywords:
    'Ray Lee, Ray, Lee, rayli-bot, blockchain engineer, crypto engineer, web developer, javascript, mobile app',
  siteUrl: 'https://rayli-bit.github.io',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Ray Lee',
  location: 'Hong Kong',
  email: 'ray.li.cmd@gmail.com',
  github: 'https://github.com/rayli-bot',
  twitterHandle: '@rayli_bot',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/rayli-bot',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ray-lee-6bb72213b',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#f7d754',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
