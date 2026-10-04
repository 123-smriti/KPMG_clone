import { Link } from 'react-router-dom';
import logoBlue from '../../assets/logo/logo.png';
import logoWhite from '../../assets/logo/logo-white.png';
import { SITE_NAME } from '../../utils/constants.js';

// The logo image. variant "default" = blue (light backgrounds),
// "light" = white (use on the blue footer). To change the logo, replace the
// two files in src/assets/logo - nothing else needs to change.
export default function Logo({ onClick, variant = 'default' }) {
  const src = variant === 'light' ? logoWhite : logoBlue;
  return (
    <Link to="/" className="logo" aria-label={`${SITE_NAME} home`} onClick={onClick}>
      <img className="logo__img" src={src} alt="" width="113" height="46" />
    </Link>
  );
}
