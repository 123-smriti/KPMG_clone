import Container from '../common/Container.jsx';
import Button from '../common/Button.jsx';
import { getImage } from '../../utils/images.js';
import './PromoBand.css';

// A coloured text panel overlapping a large photo.
//  - tone:   'blue' (bright blue panel) | 'dark' (navy panel)
//  - layout: 'panel-left'  panel at the top-left, photo runs the full width beneath it
//            'panel-right' photo on the left, panel overlaps its lower-right corner
// Used for the "Subscribe" and "Careers" calls to action.
export default function PromoBand({
  id,
  tone = 'blue',
  layout = 'panel-left',
  title,
  text,
  ctaLabel,
  ctaHref,
  image,
  imageAlt,
  imagePosition,
}) {
  const imageSrc = getImage(image);
  const titleId = `promo-${id}-title`;

  return (
    <section className={`promo promo--${layout}`} aria-labelledby={titleId}>
      <Container>
        <div className="promo__layout">
          {/* Panel comes first in the DOM so the heading is read before the photo */}
          <div className={`promo__panel promo__panel--${tone}`}>
            <h2 id={titleId} className="promo__title">{title}</h2>
            <p className="promo__text">{text}</p>
            <Button href={ctaHref} variant="outline-light">{ctaLabel}</Button>
          </div>

          <div className="promo__media">
            {imageSrc ? (
              <img
                className="promo__image"
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
                style={imagePosition ? { objectPosition: imagePosition } : undefined}
              />
            ) : (
              <div className="promo__placeholder" aria-hidden="true" />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
