import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import Container from '../../components/common/Container.jsx';
import { MAIN_ID } from '../../utils/constants.js';

export default function About() {
  return (
    <>
      <Header />
      <main id={MAIN_ID} className="page">
        <Container>
          <h1>About</h1>
          <p>Placeholder content for the About page.</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
