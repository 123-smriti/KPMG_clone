import { Link } from 'react-router-dom';

// Internal paths ("/services") use the router so the page doesn't reload.
// Everything else renders a normal <a>; a bare "#" placeholder doesn't jump to the top.
export default function AppLink({ href, children, onClick, ...rest }) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  const handleClick = (event) => {
    if (href === '#') event.preventDefault();
    if (onClick) onClick(event);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
