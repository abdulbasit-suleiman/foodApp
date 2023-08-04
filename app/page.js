import HeroPage from "./components/hero/hero";
import ProgramPage from "./components/programs/programs";
import { ReasonsPage } from "./components/reasons/reasons";
import { PlansPage } from "./components/plans/plans";
import { TestmonialPage } from "./components/testmonial/testmonial";
import { JoinPage } from "./components/join/join";
import { FooterPage } from "./components/footer/footer";

 function Home() {
  return (
    <div>
      <HeroPage />
      <ProgramPage />
      <ReasonsPage />
      <PlansPage />
      <TestmonialPage />
      <JoinPage />
      <FooterPage />
    </div>
  );
}
export default Home;