import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import Container from '../../components/common/Container.jsx';
import { MAIN_ID } from '../../utils/constants.js';

export default function CareersPage() {
  return (
    <>
      <Header />
      <main id={MAIN_ID} className="page">
        <Container>
          <h1>Careers</h1>
          <p>Placeholder content for the Careers page.</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
