import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AboutUs from './Views/AboutUs';
import FeatureSpotlight from './Views/FeatureSpotlight';
import Hero from './Views/Hero';
import Integrations from './Views/Integrations';
import MainFeatures from './Views/MainFeatures';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MainFeatures />
      <FeatureSpotlight />
      <Integrations />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
