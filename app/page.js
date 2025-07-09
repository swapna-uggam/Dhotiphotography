import AboutUs from './components/AboutUs';
import BackToHomeButton from './components/button';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import GallerySection from './components/GallerySection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PackagesSection from './components/PackagesSection';
import PhotowiseTeam from './components/PhotowiseTeam';
import PricingJustification from './components/PricingJustification';
import ServicesSection from './components/ServicesSection';
import VideoHighlight from './components/VideoHighlight';
import WhyChooseUs from './components/WhyChooseUs';
import WhyTrustUs from './components/WhyTrustUs';
//import { WhyTrustUs } from './components/WhyTrustUs';


export default function Home() {
  return (
    <>
      <Navbar/>
      <button/>
      <HeroSection />
      <WhyChooseUs/>
      <VideoHighlight />
      <PricingJustification/>
      <PackagesSection/>
      <WhyTrustUs/>
      <AboutUs/>
      <ServicesSection />
      <PhotowiseTeam/>
      <GallerySection />
      <ContactSection />
      <BackToHomeButton />
      <FooterSection />
    </>
  );
}
