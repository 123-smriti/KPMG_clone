import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import Container from '../../components/common/Container.jsx';
import Button from '../../components/common/Button.jsx';
import { MAIN_ID } from '../../utils/constants.js';

export default function NotFound() {
  return (
    <>
      <Header />
      <main id={MAIN_ID} className="page">
        <Container>
          <h1>404 - Page not found</h1>
          <p>The page you are looking for does not exist.</p>
          <Button to="/">Back to home</Button>
        </Container>
      </main>
      <Footer />
    </>
  );
}
