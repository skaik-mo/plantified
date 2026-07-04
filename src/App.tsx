import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Catalog } from './components/Catalog';
import { SeasonalCareSection } from './components/SeasonalCareSection';
import { CareJourney } from './components/CareJourney';
import { PersonalityCards } from './components/PersonalityCards';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-page-bg text-dark-accent selection:bg-sage-panel selection:text-primary-green relative">

      <Navbar />

      <HeroSection />

      <Catalog />

      <PersonalityCards />

      <CareJourney />

      <SeasonalCareSection />

      <Newsletter />

      <Footer />

    </div>
  );
}
