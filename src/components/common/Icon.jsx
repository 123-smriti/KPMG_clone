// Minimal inline icons so we don't need an icon library.
const ICONS = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
    </>
  ),
  menu: (
    <>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </>
  ),
  arrow: (
    <>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14,6 20,12 14,18" />
    </>
  ),
  close: (
    <>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </>
  ),
  chevron: <polyline points="6,9 12,15 18,9" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </>
  ),
  rfp: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="8" y1="9" x2="16" y2="9" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3c3 3 3 15 0 18c-3-3-3-15 0-18z" />
    </>
  ),
  callmade: (
    <>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="8,7 17,7 17,16" />
    </>
  ),
  transform: (
    <>
      <path d="M4 7h12" />
      <polyline points="13,4 16,7 13,10" />
      <path d="M20 17H8" />
      <polyline points="11,14 8,17 11,20" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M17 14.5c2.5 0 4 1.7 4 4.5" />
    </>
  ),
  workspaces: (
    <>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </>
  ),
  devices: (
    <>
      <rect x="3" y="5" width="14" height="10" rx="1" />
      <rect x="15" y="10" width="6" height="11" rx="1" />
      <line x1="7" y1="19" x2="11" y2="19" />
    </>
  ),
  forest: (
    <>
      <line x1="12" y1="21" x2="12" y2="11" />
      <path d="M12 11c-4 0-6-3-6-7 4 0 6 3 6 7z" />
      <path d="M12 15c4 0 6-3 6-7-4 0-6 3-6 7z" />
    </>
  ),
  chart: (
    <>
      <line x1="4" y1="20" x2="20" y2="20" />
      <rect x="5" y="11" width="3" height="9" />
      <rect x="10.5" y="6" width="3" height="14" />
      <rect x="16" y="13" width="3" height="7" />
    </>
  ),
};

// Decorative: the button that contains the icon carries the accessible name.
export default function Icon({ name, size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICONS[name]}
    </svg>
  );
}
