import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import HouseClubsSection from "@/components/HouseClubsSection";
import GuidanceSection from "@/components/GuidanceSection";
import SpecialFeatureSection from "@/components/SpecialFeatureSection";
import StatsSection from "@/components/StatsSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import ContactSection from "@/components/ContactSection";
import ParallaxBreak from "@/components/ParallaxBreak";

import parallaxLearning from "@/assets/learning.jpeg";
import parallaxSports from "@/assets/sports.jpg";
import parallaxInnovation from "@/assets/lab.jpeg";
import parallaxCampus from "@/assets/campus.jpeg";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ParallaxBreak
        image={parallaxLearning}
        alt="Students learning in classroom"
        quote="Education is not the filling of a pail, but the lighting of a fire"
      />
      <VisionMissionSection />
      <ParallaxBreak
        image={parallaxSports}
        alt="Students playing sports"
        quote="Building champions in the classroom and on the field"
      />
      <FacilitiesSection />
      <ParallaxBreak
        image={parallaxInnovation}
        alt="Students in innovation lab"
        quote="Where curiosity meets creativity and innovation begins"
      />
      <HouseClubsSection />
      <GuidanceSection />
      <SpecialFeatureSection />
      <ParallaxBreak
        image={parallaxCampus}
        alt="School campus"
        quote="A campus designed to inspire generations"
      />
      <StatsSection />
      <AdmissionsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
