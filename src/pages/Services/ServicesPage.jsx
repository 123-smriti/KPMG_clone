import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import Container from '../../components/common/Container.jsx';
import { MAIN_ID } from '../../utils/constants.js';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id={MAIN_ID} className="page">
        <Container>
          <h1>Services</h1>
          <p>Placeholder content for the Services page.</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
