import Header from "@/shared/widgets/header/header";

import Benefits from "./features/benefits";
import Branding from "./features/branding";
import Hero from "./features/hero";
import FeatureHighlight from "./features/feature-highlight";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Branding />
      <Benefits />
      <FeatureHighlight />
    </>
  );
};

export default Home;
