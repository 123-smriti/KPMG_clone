import AppLink from './AppLink.jsx';
import Icon from './Icon.jsx';
import './Card.css';

// One reusable card. Appearance is controlled by props, not by content type:
//   variant : 'plain' (no box) | 'outline' (bordered box) | 'row' (ruled list row)
//   size    : 'default' | 'large'
//   layout  : 'vertical' (image on top) | 'horizontal' (image beside text)
//   icon    : optional Icon name shown above the text
//   cta     : optional link-style text (e.g. "Explore") shown in place of the arrow
//   showMedia reserves the image area and shows a placeholder when `image` is missing.
// When `href` is set, the title is the link and it stretches over the whole card,
// so the card is clickable but keyboard/screen-reader users get one clear link.
export default function Card({
  category,
  title,
  description,
  image,
  imageAlt = '',
  showMedia = false,
  href,
  icon,
  cta,
  showArrow = Boolean(href),
  variant = 'plain',
  size = 'default',
  layout = 'vertical',
  headingLevel = 3,
  className = '',
}) {
  const Heading = `h${headingLevel}`;
  const hasMedia = showMedia || Boolean(image);

  const classes = [
    'card',
    `card--${variant}`,
    size === 'large' && 'card--large',
    layout === 'horizontal' && 'card--horizontal',
    href && 'card--linked',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classes}>
      {icon && (
        <span className="card__icon" aria-hidden="true">
          <Icon name={icon} size={32} />
        </span>
      )}

      {hasMedia && (
        <div className="card__media">
          {image ? (
            <img className="card__image" src={image} alt={imageAlt} loading="lazy" />
          ) : (
            <div className="card__placeholder" aria-hidden="true" />
          )}
        </div>
      )}

      <div className="card__body">
        {category && <p className="card__category">{category}</p>}
        <Heading className="card__title">
          {href ? (
            <AppLink href={href} className="card__link">
              {title}
            </AppLink>
          ) : (
            title
          )}
        </Heading>
        {description && <p className="card__description">{description}</p>}
      </div>

      {cta ? (
        <span className="card__cta" aria-hidden="true">
          {cta}
          <Icon name="arrow" size={18} />
        </span>
      ) : (
        showArrow && (
          <span className="card__arrow" aria-hidden="true">
            <Icon name="arrow" size={20} />
          </span>
        )
      )}
    </article>
  );
}
