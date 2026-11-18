import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import VideoCarousel from '../components/VideoCarousel'
import AboutSection from '../components/AboutSection'
import WhyChooseUs from '../components/WhyChooseUs'
import ContactSection from '../components/ContactSection'

/**
 * Homepage section order:
 * hero -> collections -> video carousel -> about -> why choose us -> contact
 */
export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <VideoCarousel />
      <AboutSection />
      <WhyChooseUs />
      <ContactSection />
    </>
  )
}
