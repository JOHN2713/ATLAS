import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Principles from '../components/Principles';
import WhatIsAtlas from '../components/WhatIsAtlas';
import AreasOfFocus from '../components/AreasOfFocus';
import WhoWeServe from '../components/WhoWeServe';
import Insights from '../components/Insights';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-atlas-primary text-atlas-dark">
      <Navigation />
      <Hero />
      <Principles />
      <WhatIsAtlas />
      <AreasOfFocus />
      <WhoWeServe />
      <Insights />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;