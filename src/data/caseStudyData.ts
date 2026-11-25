export interface LightboxImage {
  src: string;
  alt: string;
  caption: string;
  sourceLabel?: string;
}

export interface SectionScreenshotSet {
  desktop: string;
  desktopAlt: string;
  desktopWidth: number;
  desktopHeight: number;
  mobile?: string;
  mobileAlt?: string;
  mobileWidth?: number;
  mobileHeight?: number;
}

export const PROJECT_LINKS = {
  liveWebsite: 'https://kopi-ruang-website.vercel.app/',
  githubRepo: 'https://github.com/irfanfahrezidesign/kopi-ruang-website',
  designerEmail: 'irfanfahrezi.design@gmail.com',
};

export const PROJECT_SNAPSHOT = [
  { label: 'Project Type', value: 'Self-Initiated Fictional Concept Project (Protolabs Brief)' },
  { label: 'Role', value: 'UI/UX Direction, Design System, Copywriting, Photo Curation & QA' },
  {
    label: 'Platform & Stack',
    value: 'Responsive Web (Desktop & Mobile) · HTML, Tailwind CSS v4, Vite',
  },
  {
    label: 'Tools',
    value: 'Figma, Google AI Studio (Gemini), GitHub, Vercel',
  },
] as const;

export const UPLOADED_SCREENSHOTS = {
  mobileHero: '/assets/aistudio/Screenshot_20261125-092758_Chrome__1__cf52c50f.jpg',
  desktopHeroAndAbout: '/assets/aistudio/Screenshot_20261125-092815_Chrome__1__5684379c.jpg',
  desktopHero: '/assets/aistudio/Screenshot_2026-11-25_140614_edited_654deeaa.png',
  desktopAbout: '/assets/aistudio/Screenshot_2026-11-25_141010_edited_90eb8de1.png',
  desktopMenuCoffee: '/assets/aistudio/Screenshot_2026-11-25_140712_edited_28a6d66a.png',
  desktopMenuPastry: '/assets/aistudio/Screenshot_2026-11-25_140754_edited_66a974dc.png',
  desktopGallery: '/assets/aistudio/Screenshot_2026-11-25_140851_edited_a063903e.png',
  desktopLocation: '/assets/aistudio/Screenshot_2026-11-25_140935_edited_a926b86a.png',
};

/**
 * Structured screenshot registry per section so future mobile captures
 * can be dropped into `mobile` / `mobileAlt` without changing UI components.
 */
export const WEBSITE_SHOWCASE_MEDIA: Record<
  'hero' | 'about' | 'menuCoffee' | 'menuPastry' | 'gallery' | 'location',
  SectionScreenshotSet
> = {
  hero: {
    desktop: '/assets/aistudio/Screenshot_2026-11-25_140614_edited_654deeaa.png',
    desktopAlt:
      'Kopi Ruang desktop hero view featuring single-row navigation, Specialty Coffee Shop eyebrow, headline Ruang untuk Fokus Ruang untuk Bercerita, and arched pour-over photography',
    desktopWidth: 1899,
    desktopHeight: 831,
    mobile: '/assets/aistudio/Screenshot_20261125-092758_Chrome__1__cf52c50f.jpg',
    mobileAlt:
      'Kopi Ruang mobile hero view showing responsive header, Pesan Online CTA, Kunjungi Kami button, and stacked facility highlights',
    mobileWidth: 1080,
    mobileHeight: 2157,
  },
  about: {
    desktop: '/assets/aistudio/Screenshot_2026-11-25_141010_edited_90eb8de1.png',
    desktopAlt:
      'Kopi Ruang desktop Tentang Kami section with arched cafe interior photo, editorial brand story, and illustrative concept stats',
    desktopWidth: 1892,
    desktopHeight: 821,
  },
  menuCoffee: {
    desktop: '/assets/aistudio/Screenshot_2026-11-25_140712_edited_28a6d66a.png',
    desktopAlt:
      'Kopi Ruang desktop Menu section on the Coffee tab displaying Espresso, Americano, and Café Latte with arch photography and IDR pricing',
    desktopWidth: 1885,
    desktopHeight: 804,
  },
  menuPastry: {
    desktop: '/assets/aistudio/Screenshot_2026-11-25_140754_edited_66a974dc.png',
    desktopAlt:
      'Kopi Ruang desktop Menu section on the Pastry tab displaying Butter Croissant, Almond Croissant, and Banana Bread with arch photography and IDR pricing',
    desktopWidth: 1894,
    desktopHeight: 831,
  },
  gallery: {
    desktop: '/assets/aistudio/Screenshot_2026-11-25_140851_edited_a063903e.png',
    desktopAlt:
      'Kopi Ruang desktop Suasana gallery section on forest green background featuring Interior Café, Sudut Kerja Fokus, and Bar Seduh photography',
    desktopWidth: 1888,
    desktopHeight: 826,
  },
  location: {
    desktop: '/assets/aistudio/Screenshot_2026-11-25_140935_edited_a926b86a.png',
    desktopAlt:
      'Kopi Ruang desktop Location section displaying map pin for Jakarta Selatan, operational status, opening hours, Petunjuk Arah, and Chat WhatsApp buttons',
    desktopWidth: 1894,
    desktopHeight: 837,
  },
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
    hex: '#F5EFE3',
    proportion: '~60% Cream & Beige',
    role: 'Primary light canvas & editorial ground',
    textDark: true,
  },
  {
    name: 'Soft Beige',
    hex: '#E8DCC4',
    proportion: '~60% Cream & Beige',
    role: 'Alternating tonal surface & card panels',
    textDark: true,
  },
  {
    name: 'Forest Green',
    hex: '#17291F',
    proportion: '~30% Deep Green',
    role: 'Primary dark brand ground & hero backdrop',
    textDark: false,
  },
  {
    name: 'Deep Green',
    hex: '#22392C',
    proportion: '~30% Deep Green',
    role: 'Secondary structural green & container depth',
    textDark: false,
  },
  {
    name: 'Muted Gold',
    hex: '#B39A6E',
    proportion: '~10% Gold Accent',
    role: 'Primary CTA highlight & accents on dark surfaces',
    textDark: true,
  },
  {
    name: 'Deep Gold',
    hex: '#6B5230',
    proportion: '~10% Gold Accent',
    role: 'Accessible gold label text & accents on light surfaces',
    textDark: false,
  },
  {
    name: 'Espresso Ink',
    hex: '#2B1F17',
    proportion: 'Typography Ink',
    role: 'Primary body & editorial heading ink on light grounds',
    textDark: false,
  },
  {
    name: 'Sage Mist',
    hex: '#7F8F7A',
    proportion: 'Decoration & Border',
    role: 'Strictly for subtle decoration and borders only',
    textDark: true,
  },
];

export const PAGE_STRUCTURE_STEPS = [
  { num: '01', name: 'HERO', detail: 'Brand introduction, value proposition, facility highlights & primary CTAs', tone: 'dark' as const },
  { num: '02', name: 'ABOUT', detail: 'Café story, warm interior arch framing & brand philosophy', tone: 'light' as const },
  { num: '03', name: 'WHY US', detail: 'Core differentiators: fast WiFi, local beans & calm workspace ambiance', tone: 'dark' as const },
  { num: '04', name: 'MENU', detail: '12 menu items with individual AI-curated photos across Coffee, Signature Drinks & Pastry', tone: 'light' as const },
  { num: '05', name: 'GALLERY', detail: 'Curated interior & beverage photography with interactive lightbox', tone: 'dark' as const },
  { num: '06', name: 'REVIEWS', detail: 'Illustrative guest review cards demonstrating social proof layout (fictional concept copy)', tone: 'light' as const },
  { num: '07', name: 'LOCATION', detail: 'Address details, opening hours, map access & contact information', tone: 'dark' as const },
  { num: '08', name: 'FINAL CTA', detail: 'Direct invitation to visit the space or place a WhatsApp order', tone: 'light' as const },
  { num: '09', name: 'FOOTER', detail: 'Brand mark, quick section links, social handles & closing details', tone: 'dark' as const },
];

export const PAGESPEED_BENCHMARKS = {
  mobile: [
    { label: 'Performance', score: 92, displayValue: '92–93' },
    { label: 'Best Practices', score: 100, displayValue: '100' },
    { label: 'SEO', score: 100, displayValue: '100' },
  ],
  desktop: [
    { label: 'Performance', score: 100, displayValue: '100' },
    { label: 'Best Practices', score: 100, displayValue: '100' },
    { label: 'SEO', score: 100, displayValue: '100' },
  ],
} as const;
