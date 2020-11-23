import FooterRoot from "@/components/FooterRoot";
import HeaderRoot from "@/components/HeaderRoot";
import LandingGlobe from "@/components/LandingGlobe";
import LandingHero from "@/components/LandingHero";
import LandingNewsletter from "@/components/LandingNewsletter";
import SeoLanding from "@/components/SeoLanding";

export default function LandingScreen(): JSX.Element {
  return (
    <>
      <SeoLanding title="Sentrei" />
      <HeaderRoot />
      <LandingHero />
      <LandingGlobe />
      <LandingNewsletter />
      <FooterRoot />
    </>
  );
}
