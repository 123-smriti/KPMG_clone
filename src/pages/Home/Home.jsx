import Header from '../../components/layout/Header.jsx';
import Hero from '../../components/sections/Hero.jsx';
import CyberDay from '../../components/sections/CyberDay.jsx';
import MakeDifference from '../../components/sections/MakeDifference.jsx';
import Perspectives from '../../components/sections/Perspectives.jsx';
import PromoBand from '../../components/sections/PromoBand.jsx';
import LocationBanner from '../../components/sections/LocationBanner.jsx';
import Footer from '../../components/layout/Footer.jsx';
import { subscribePromo, careersPromo } from '../../data/promos.js';
import { MAIN_ID } from '../../utils/constants.js';

// Home only composes the page sections, in the same order as the KPMG homepage.
export default function Home() {
  return (
    <>
      <Header />
      <main id={MAIN_ID}>
        <Hero />
        <CyberDay />
        <MakeDifference />
        <Perspectives />
        <PromoBand {...subscribePromo} />
        <PromoBand {...careersPromo} />
      </main>
      <Footer />
      <LocationBanner />
    </>
  );
}
