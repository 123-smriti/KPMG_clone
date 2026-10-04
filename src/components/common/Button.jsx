import AppLink from './AppLink.jsx';

// One button for the whole site. The label is passed as children.
//  - variant: primary | outline | light (on dark backgrounds) | outline-light (white pill
//    outline for coloured panels) | text (inline link style)
//  - `to` or `href`  -> a link (router link for "/paths", plain <a> otherwise)
//  - neither         -> a real <button> (type, onClick)
export default function Button({ children, to, href, variant = 'primary', type = 'button', onClick }) {
  const className = `btn btn--${variant}`;
  const target = to ?? href;

  if (target) {
    return (
      <AppLink href={target} className={className} onClick={onClick}>
        {children}
      </AppLink>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
