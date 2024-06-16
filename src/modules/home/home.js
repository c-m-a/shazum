import Header from "@/shared/widgets/header/header";

import Benefits from "./features/benefits";
import Branding from "./features/branding";
import Hero from "./features/hero";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Branding />
      <Benefits />
    </>
  );
};

export default Home;
