export interface LightboxImage {
  src: string;
  alt: string;
  caption: string;
  sourceLabel?: string;
}

export const PROJECT_LINKS = {
  liveWebsite: 'https://kopi-ruang-website.vercel.app/',
  githubRepo: 'https://github.com/irfanfahrezidesign/kopi-ruang-website',
  designerEmail: 'irfanfahrezi.design@gmail.com',
};

export const UPLOADED_SCREENSHOTS = {
  mobileHero: '/assets/aistudio/Screenshot_20261125-092758_Chrome__1__cf52c50f.jpg',
  desktopHeroAndAbout: '/assets/aistudio/Screenshot_20261125-092815_Chrome__1__5684379c.jpg',
  pagespeedMobile: '/assets/aistudio/Screenshot_20261125-092918_Chrome_4e7abcc1.jpg',
  pagespeedDesktop: '/assets/aistudio/Screenshot_20261125-092923_Chrome_31dfa01b.jpg',
};

export const EDITORIAL_IMAGES = {
  overviewCraft: '/src/assets/images/overview_coffee_craft_1795582892050.jpg',
  moodboardPourOver: '/src/assets/images/moodboard_pour_over_1795582891690.jpg',
  moodboardInterior: '/src/assets/images/moodboard_cafe_interior_1795582891337.jpg',
  moodboardCeramic: '/src/assets/images/moodboard_ceramic_espresso_1795582892247.jpg',
  moodboardCoffeeBar: '/src/assets/images/moodboard_coffee_bar_1795582892330.jpg',
};

export const NAV_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'visual-design', label: 'Visual Design' },
  { id: 'website', label: 'Website' },
  { id: 'process', label: 'Process' },
  { id: 'results', label: 'Results' },
] as const;

export const COLOR_PALETTE = [
  {
    name: 'Warm Cream',
    hex: '#F7F3E9',
    role: 'Primary editorial canvas & light section ground',
    textDark: true,
  },
  {
    name: 'Forest Green',
    hex: '#183F35',
    role: 'Primary brand ground, hero backdrop & contrast panels',
    textDark: false,
  },
  {
    name: 'Deep Green',
    hex: '#22392C',
    role: 'Secondary structural green & dark container depth',
    textDark: false,
  },
  {
    name: 'Muted Gold',
    hex: '#B99A5D',
    role: 'Primary CTA highlight, arch outlines & section eyebrows',
    textDark: true,
  },
  {
    name: 'Soft Beige',
    hex: '#E8DFD0',
    role: 'Alternating tonal surface & subtle editorial borders',
    textDark: true,
  },
  {
    name: 'Dark Charcoal',
    hex: '#292B28',
    role: 'Primary body typography & high-contrast ink',
    textDark: false,
  },
];

export const PAGE_STRUCTURE_STEPS = [
  { num: '01', name: 'HERO', detail: 'Brand introduction, value proposition, facility highlights & primary CTAs', tone: 'dark' as const },
  { num: '02', name: 'ABOUT', detail: 'Café story, warm interior arch framing & brand philosophy', tone: 'light' as const },
  { num: '03', name: 'WHY US', detail: 'Core differentiators: fast WiFi, local beans & calm workspace ambiance', tone: 'dark' as const },
  { num: '04', name: 'MENU', detail: 'Categorized specialty coffee, non-coffee & light bite selections with pricing', tone: 'light' as const },
  { num: '05', name: 'GALLERY', detail: 'Curated interior & beverage photography with interactive lightbox', tone: 'dark' as const },
  { num: '06', name: 'REVIEWS', detail: 'Guest impressions highlighting atmosphere and drink consistency', tone: 'light' as const },
  { num: '07', name: 'LOCATION', detail: 'Address details, opening hours, map access & contact information', tone: 'dark' as const },
  { num: '08', name: 'FINAL CTA', detail: 'Direct invitation to visit the space or place a WhatsApp order', tone: 'light' as const },
  { num: '09', name: 'FOOTER', detail: 'Brand mark, quick section links, social handles & closing details', tone: 'dark' as const },
];
