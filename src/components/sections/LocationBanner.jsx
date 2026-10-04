import { useState } from 'react';
import Button from '../common/Button.jsx';
import Container from '../common/Container.jsx';
import { detectCountry } from '../../utils/region.js';
import './LocationBanner.css';

const STORAGE_KEY = 'kpmg-location-banner-dismissed';

function wasDismissed() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === 'yes';
  } catch {
    return false; // storage can be blocked; just show the banner
  }
}

// Bottom-of-screen suggestion to visit the local firm site. It can be dismissed
// for the rest of the browser session.
export default function LocationBanner() {
  const [isVisible, setIsVisible] = useState(() => !wasDismissed());
  const [country] = useState(detectCountry);

  const dismiss = () => {
    setIsVisible(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, 'yes');
    } catch {
      // ignore: the banner is already hidden for this page view
    }
  };

  if (!isVisible) return null;

  return (
    <section className="location-banner" aria-labelledby="location-banner-title">
      <Container className="location-banner__inner">
        <div className="location-banner__text">
          <h2 id="location-banner-title" className="location-banner__title">
            Welcome to KPMG.{country && ` Looks like you are visiting from ${country}.`}
          </h2>
          <p>Discover Global perspectives or visit your local firm site for regional services and insights.</p>
        </div>
        <div className="location-banner__actions">
          {country && <Button href="#" variant="outline">{`Go to KPMG ${country}`}</Button>}
          <Button onClick={dismiss}>Remain on KPMG Global</Button>
        </div>
      </Container>
    </section>
  );
}
