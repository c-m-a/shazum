import Header from "@/shared/widgets/header/header";

import Benefits from "./elements/benefits";
import Branding from "./elements/branding";
import Hero from "./elements/hero";
import FeatureHighlight from "./elements/feature-highlight";
import Pricing from "./elements/pricing";
import Footer from "@/shared/widgets/footer/footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Branding />
      <Benefits />
      <FeatureHighlight />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
