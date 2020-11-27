import FooterRoot from "@/components/FooterRoot";
import HeaderRoot from "@/components/HeaderRoot";
import LandingGlobe from "@/components/LandingGlobe";
import LandingHero from "@/components/LandingHero";
import LandingMission from "@/components/LandingMission";
import LandingNewsletter from "@/components/LandingNewsletter";
import LandingStats from "@/components/LandingStats";
import LandingTestimonial from "@/components/LandingTestimonial";
import SeoLanding from "@/components/SeoLanding";

export default function LandingScreen(): JSX.Element {
  return (
    <>
      <SeoLanding title="Sentrei" />
      <HeaderRoot />
      <LandingHero />
      <LandingTestimonial />
      <LandingMission />
      <LandingGlobe />
      <LandingStats />
      <LandingNewsletter />
      <FooterRoot />
    </>
  );
}
