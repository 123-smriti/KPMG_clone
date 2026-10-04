# KPMG Clone

A responsive front-end clone of the [KPMG International homepage](https://kpmg.com/xx/en.html).
Built with React 18, Vite, React Router and plain CSS (no UI framework).

## Getting started

Requires Node.js 18 or newer.

    npm install
    npm run dev       # start the dev server
    npm run build     # production build into dist/
    npm run preview   # serve the production build locally
    npm run lint      # ESLint
    npm run format    # Prettier (use format:check to only check)

`node_modules/` is not part of the project files; `npm install` creates it.
After the first `npm install` the `package-lock.json` is refreshed to include the lint/format tools.

## Homepage sections (top to bottom)

Utility bar, header with mega menus (hides when scrolling down, returns when scrolling up), hero (Global Cyber Day, one slide with a looping video),
safety-tip cards and the "ten years" highlight, Make the Difference, perspectives grid,
subscribe band, careers band, footer, and the "visiting from..." location banner.

## Project structure

    kpmg-clone/
    ├── index.html               # page shell, Open Sans loaded from Google Fonts
    ├── vite.config.js
    ├── eslint.config.js         # ESLint 9 flat config (React + hooks rules)
    ├── .prettierrc, .editorconfig
    ├── public/                  # favicon
    └── src/
        ├── main.jsx             # entry: router + global styles
        ├── App.jsx              # URL -> page mapping only
        ├── pages/               # one folder per route
        │   ├── Home/            # composes the homepage sections
        │   ├── About/
        │   ├── Services/
        │   ├── Careers/
        │   └── NotFound/
        ├── components/
        │   ├── common/          # reusable pieces: Button, Card, Container, Icon, ...
        │   ├── layout/          # Header, Navbar, MainNav, MegaMenu, MobileMenu, Footer, ...
        │   └── sections/        # homepage sections, each with its own .css file
        ├── data/                # all copy and links (see below)
        ├── hooks/               # useMobileMenu, useSlideshow, useHideOnScroll
        ├── utils/               # constants, image/video lookup, region, validators
        ├── styles/              # variables.css, global.css, responsive.css
        └── assets/
            ├── images/
            ├── logo/
            └── video/

Conventions: a component and its stylesheet sit side by side (`Hero.jsx` + `Hero.css`);
pages only compose sections; sections get their text from `src/data/`, not from JSX.
`responsive.css` holds the header breakpoints and is imported last in `main.jsx` so it overrides the base styles.

## Editing content

All text, links and image names live in `src/data/`:

| File | Controls |
| --- | --- |
| `heroSlides.js` | Hero text, button, video and poster |
| `cyberDay.js` | Safety-tip cards and the "ten years" highlight |
| `makeDifference.js` | Make the Difference section |
| `perspectives.js` | Perspectives grid |
| `promos.js` | Subscribe and Careers bands |
| `navigation.js` | Header and mega-menu links |
| `footer.js` | Footer links |

## Images, video and logo

Images are looked up by file name from `src/assets/images/` (`.jpg`, `.png`, `.webp`, `.avif` or `.svg`).
To change a picture, add the file there and update its name in the matching `src/data/` file.
If a file is missing, a grey placeholder is shown instead of a broken image.

| File | Used by |
| --- | --- |
| `hero-poster.jpg` | Hero poster (first frame of the video) |
| `cyber-tip-1.webp` ... `cyber-tip-4.jpg` | Safety-tip cards |
| `cyber-stat-video-call.webp` | "Ten years" highlight |
| `make-the-difference-poster.webp` | Make the Difference |
| `promo-subscribe.webp` | Subscribe band |
| `promo-careers.jpg` | Careers band ("Interested in a career at KPMG?") |

Logos are in `src/assets/logo/` (`logo.png` blue, `logo-white.png` for the footer).
Footer social icons are in `components/common/SocialIcon.jsx`.

### Hero video

The hero plays `src/assets/video/hero.mp4` (muted, looping, no sound). `hero-poster.jpg` shows while the
video loads, if the browser blocks autoplay, and for visitors who prefer reduced motion.
To swap the video, replace `hero.mp4` (H.264, ideally 1280 px wide or more, around 5 MB) and keep the
file names in `src/data/heroSlides.js` in sync. The hero still supports several slides: add more
entries to `heroSlides` and the slideshow and dot navigation turn on automatically.

## Accessibility

Skip-friendly landmarks, labelled navigation, keyboard-operable menus, visible focus rings,
and reduced-motion support (no autoplay video or slideshow movement).
