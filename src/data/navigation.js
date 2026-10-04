// Navigation data only. Paths starting with "/" are router routes;
// "#" is a placeholder for pages that don't exist yet.
//
// An item with `links` opens a mega menu (desktop) or an accordion (mobile).
// A link with `children` is a group heading followed by its own links.
// `featured` entries are the promo cards shown beside the links.

export const utilityLinks = [
  { label: 'Submit RFP', href: '#', icon: 'rfp' },
  { label: 'Login', href: '#', icon: 'user' },
];

export const languageLink = { label: 'Global (EN)', href: '#', icon: 'globe' };

export const navigationItems = [
  {
    id: 'insights',
    label: 'Our Insights',
    viewAllHref: '#',
    links: [
      { label: 'All Our Insights', href: '#' },
      { label: 'AI and Technology', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Operations', href: '#' },
      { label: 'Risk and Regulation', href: '#' },
      { label: 'Transformation', href: '#' },
      { label: 'Value Creation', href: '#' },
      { label: 'Workforce', href: '#' },
    ],
    featured: [
      { title: 'Podcasts', text: 'Listen to our global podcasts on the latest developments and ideas.', cta: 'View more', href: '#' },
      { title: 'Stay up to date with what matters to you', text: 'Sign up for content personalised to your interests.', cta: 'View more', href: '#' },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    viewAllHref: '/services',
    links: [
      { label: 'All Services', href: '/services' },
      { label: 'Advisory', href: '/services' },
      { label: 'AI', href: '/services' },
      { label: 'Audit & Assurance', href: '/services' },
      { label: 'Law', href: '/services' },
      { label: 'Sustainability', href: '/services' },
      { label: 'Tax', href: '/services' },
    ],
    featured: [
      { title: 'Transforming the Enterprise', text: 'A report on how enterprises execute, scale and sustain change.', cta: 'Read the report', href: '#' },
      { title: 'A global leader in Sustainability Consulting', text: 'KPMG firms are named a leader in an independent 2026 analyst assessment.', cta: 'Read more', href: '#' },
    ],
  },
  {
    id: 'industries',
    label: 'Industries',
    viewAllHref: '#',
    links: [
      { label: 'All Industries', href: '#' },
      { label: 'Automotive', href: '#' },
      { label: 'Consumer, Retail & Leisure', href: '#' },
      { label: 'Energy, Natural Resources & Chemicals', href: '#' },
      {
        label: 'Financial Services',
        children: [
          { label: 'Financial Services', href: '#' },
          { label: 'Asset Management', href: '#' },
          { label: 'Banking & Capital Markets', href: '#' },
          { label: 'Insurance', href: '#' },
          { label: 'Private Equity', href: '#' },
        ],
      },
      { label: 'Government & Public Sector', href: '#' },
      { label: 'Healthcare', href: '#' },
      { label: 'Industrial Manufacturing', href: '#' },
      { label: 'Infrastructure & Transport', href: '#' },
      { label: 'Life Sciences', href: '#' },
      { label: 'Private Enterprise', href: '#' },
      { label: 'Technology, Media & Telecommunications', href: '#' },
    ],
    featured: [
      { title: 'Global family business report 2026', text: 'Family businesses facing the future: confident, yet cautious.', cta: 'Read the report', href: '#' },
      { title: 'Most well-known firm in financial services', text: 'Ranked first by clients in an independent research study.', cta: 'Read more', href: '#' },
    ],
  },
  { id: 'client-stories', label: 'Client Stories', href: '#' },
  {
    id: 'alliances',
    label: 'Global Alliances',
    viewAllHref: '#',
    links: [
      { label: 'All Global Alliances & Ecosystems', href: '#' },
      { label: 'Google Cloud', href: '#' },
      { label: 'Microsoft', href: '#' },
      { label: 'Oracle', href: '#' },
      { label: 'Salesforce', href: '#' },
      { label: 'SAP', href: '#' },
      { label: 'ServiceNow', href: '#' },
      { label: 'Workday', href: '#' },
    ],
    featured: [
      { title: 'KPMG and Anthropic sign global alliance', text: 'Bringing Claude into the firm\u2019s global client delivery platform.', cta: 'Read more', href: '#' },
      { title: 'Trusted enterprise AI agents at scale', text: 'KPMG and Microsoft help clients manage, monitor and secure AI agents.', cta: 'Read more', href: '#' },
    ],
  },
  {
    id: 'about',
    label: 'About KPMG',
    viewAllHref: '/about',
    links: [
      { label: 'All About KPMG', href: '/about' },
      {
        label: 'Who we are',
        children: [
          { label: 'Who we are', href: '/about' },
          { label: 'Our leadership', href: '#' },
          { label: 'Our strategy', href: '#' },
          { label: 'Our values', href: '#' },
          { label: 'Our history', href: '#' },
        ],
      },
      {
        label: 'Careers at KPMG',
        children: [
          { label: 'Careers at KPMG', href: '/careers' },
          { label: 'Job search', href: '/careers' },
          { label: 'Working at KPMG', href: '/careers' },
        ],
      },
      {
        label: 'Make the Difference',
        children: [
          { label: 'Make the Difference', href: '#' },
          { label: 'Our Impact Plan', href: '#' },
          { label: 'Annual results', href: '#' },
          { label: 'Analyst recognitions', href: '#' },
        ],
      },
    ],
    featured: [
      { title: 'Our Impact Plan', text: 'How we make the difference for our people, planet and communities.', cta: 'Read the report', href: '#' },
      { title: 'Working at KPMG', text: 'We welcome people at every stage of their careers.', cta: 'Learn more', href: '/careers' },
    ],
  },
];
