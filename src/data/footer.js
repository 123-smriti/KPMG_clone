// Footer content only. Paths starting with "/" are router routes;
// "#" is a placeholder for pages that don't exist yet.
export const footerColumns = [
  {
    title: 'Contact',
    links: [
      { label: 'Contact Us', href: '#' },
      { label: 'Submit RFP', href: '#' },
    ],
  },
  {
    title: 'Media',
    links: [
      { label: 'Newsroom', href: '#' },
      { label: 'Press Releases', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Careers', href: '/careers' },
      { label: 'About Us', href: '/about' },
    ],
  },
];

// Genuine external links (opened in a new tab). `icon` is a name from SocialIcon.jsx.
export const socialLinks = [
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/kpmg' },
  { label: 'X', icon: 'x', href: 'https://x.com/kpmg' },
  { label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/kpmg' },
  { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/KPMG' },
];

// Shown under the social icons. These point to the official KPMG pages.
export const legalLinks = [
  { label: 'Legal', href: 'https://kpmg.com/xx/en/misc/legal.html' },
  { label: 'Privacy', href: 'https://kpmg.com/xx/en/misc/privacy.html' },
  { label: 'Accessibility', href: 'https://kpmg.com/xx/en/misc/accessibility.html' },
  { label: 'Help', href: 'https://kpmg.com/xx/en/misc/help.html' },
];

// The copyright line is built in Footer.jsx (it needs the year).
export const copyrightText =
  'Copyright owned by one or more of the KPMG International entities. KPMG International entities provide no services to clients. All rights reserved.';

// Legal notice. A part is plain text, or { label, href } for an inline link.
export const footerNotes = [
  [
    'KPMG refers to the global organization or to one or more of the member firms of KPMG International Limited (\u201CKPMG International\u201D), each of which is a separate legal entity. KPMG International Limited is a private English company limited by guarantee and does not provide services to clients. For more detail about our structure please visit ',
    { label: 'https://kpmg.com/governance', href: 'https://kpmg.com/xx/en/misc/governance.html' },
    '.',
  ],
  [
    'Member firms of the KPMG network of independent firms are affiliated with KPMG International. KPMG International provides no client services. No member firm has any authority to obligate or bind KPMG International or any other member firm vis-\u00E0-vis third parties, nor does KPMG International have any such authority to obligate or bind any member firm.',
  ],
  [
    'Throughout this website, \u201Cwe\u201D, \u201CKPMG\u201D, \u201Cus\u201D and \u201Cour\u201D refers to the KPMG global organization, to KPMG International Limited (\u201CKPMG International\u201D), and/or to one or more of the member firms of KPMG International, each of which is a separate legal entity.',
  ],
  [
    'At KPMG, every idea starts with human ingenuity. KPMG professionals combine their insight and creativity with AI tools, applying them thoughtfully and responsibly under the ',
    {
      label: 'KPMG Trusted AI framework',
      href: 'https://kpmg.com/xx/en/what-we-do/services/ai/trusted-ai-framework.html',
    },
    ' to develop imagery and content.',
  ],
];
