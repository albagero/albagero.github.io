import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import ResearchSection from './components/ResearchSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-navy-900">
      <ParticleBackground />
      <Navbar />
      <main>
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
  )
}

export default App
