import Container from '../common/Container.jsx';
import Button from '../common/Button.jsx';
import { makeDifference } from '../../data/makeDifference.js';
import { getImage } from '../../utils/images.js';
import './MakeDifference.css';

export default function MakeDifference({ content = makeDifference }) {
  const { title, paragraphs, primaryCta, secondaryCta, image, imageAlt } = content;
  const imageSrc = getImage(image);

  return (
    <section className="make-difference section" aria-labelledby="make-difference-title">
      <Container className="make-difference__inner">
        <div className="make-difference__media">
          {imageSrc ? (
            <img className="make-difference__image" src={imageSrc} alt={imageAlt} loading="lazy" />
          ) : (
            <div className="make-difference__placeholder" aria-hidden="true" />
          )}
        </div>

        <div className="make-difference__content">
          <h2 id="make-difference-title" className="make-difference__title">{title}</h2>
          {paragraphs.map((text) => (
            <p key={text} className="make-difference__text">{text}</p>
          ))}
          <div className="make-difference__actions">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            <Button href={secondaryCta.href} variant="outline">{secondaryCta.label}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
