import FooterRoot from "@/components/FooterRoot";
import HeaderRoot from "@/components/HeaderRoot";
import LandingGlobe from "@/components/LandingGlobe";
import LandingHero from "@/components/LandingHero";
import LandingNewsletter from "@/components/LandingNewsletter";

export default function LandingScreen(): JSX.Element {
  return (
    <>
      <HeaderRoot />
      <LandingHero />
      <LandingGlobe />
      <LandingNewsletter />
      <FooterRoot />
    </>
  );
}
