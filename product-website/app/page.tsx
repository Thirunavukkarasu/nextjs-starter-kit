import HeroSection from '../components/HeroSection';
import Pricing from '../components/Pricing';
import Subscribe from '../components/Subscribe';
import Testimonials from '../components/Testimonials';
import WhySection from '../components/WhySection';
import About from '../components/About';
import AboutTwo from '../components/AboutTwo';
import FeatureSection from '../components/FeatureSection';

export default function page() {
    return (
        <>
            <HeroSection />
            <FeatureSection />
            <About />
            <AboutTwo />
            <WhySection />
            <Pricing />
            <Testimonials />
            <Subscribe />
        </>
    )
}
