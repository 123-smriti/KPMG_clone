import Container from '../common/Container.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import Card from '../common/Card.jsx';
import { perspectives, perspectivesHeading } from '../../data/perspectives.js';
import './Perspectives.css';

export default function Perspectives() {
  return (
    <section className="section section--alt perspectives" aria-labelledby="perspectives-title">
      <Container>
        <SectionTitle id="perspectives-title" title={perspectivesHeading} />

        <ul className="perspectives__grid">
          {perspectives.map((topic) => (
            <li key={topic.id}>
              <Card
                variant="outline"
                icon={topic.icon}
                title={topic.title}
                description={topic.description}
                href={topic.href}
                cta="Explore"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
