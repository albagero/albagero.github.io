import React from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ResearchSection from './components/ResearchSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050d1a]">
      <ParticleBackground />
      <div className="noise-overlay absolute inset-0 z-0 pointer-events-none"></div>
      <div className="mesh-gradient absolute inset-0 z-0 pointer-events-none"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <ResearchSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
