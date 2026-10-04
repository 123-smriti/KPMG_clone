import Container from '../common/Container.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import Button from '../common/Button.jsx';
import Card from '../common/Card.jsx';
import { cyberDay } from '../../data/cyberDay.js';
import { getImage } from '../../utils/images.js';
import './CyberDay.css';

// Two bands: the four safety-tip cards, then the "ten years" highlight.
export default function CyberDay({ content = cyberDay }) {
  const { heading, tips, stat } = content;
  const statImage = getImage(stat.image);

  return (
    <>
      <section className="section cyberday" aria-labelledby="cyberday-title">
        <Container>
          <SectionTitle id="cyberday-title" title={heading} />
          <ul className="cyberday__grid">
            {tips.map((tip) => (
              <li key={tip.id}>
                <Card
                  showMedia
                  title={tip.title}
                  description={tip.description}
                  image={getImage(tip.image)}
                  imageAlt={tip.imageAlt}
                  href={tip.href}
                  cta="Learn more"
                  className="card--tip"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section cyberday-stat" aria-labelledby="cyberday-stat-title">
        <Container className="cyberday-stat__inner">
          <div className="cyberday-stat__content">
            <h2 id="cyberday-stat-title" className="cyberday-stat__title">{stat.title}</h2>
            <p className="cyberday-stat__text">{stat.text}</p>
            <Button href={stat.href}>{stat.ctaLabel}</Button>
          </div>

          <div className="cyberday-stat__media">
            {statImage ? (
              <img className="cyberday-stat__image" src={statImage} alt={stat.imageAlt} loading="lazy" />
            ) : (
              <div className="cyberday-stat__placeholder" aria-hidden="true" />
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
