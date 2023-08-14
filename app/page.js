import { FooterPage } from "@/components/footer/footer";
import HeroPage from "@/components/hero/hero";
import { JoinPage } from "@/components/join/join";
import { PlansPage } from "@/components/plans/plans";
import ProgramPage from "@/components/programs/programs";
import { ReasonsPage } from "@/components/reasons/reasons";
import { TestmonialPage } from "@/components/testmonial/testmonial";

 function Home() {
  return (
    <div>
      <HeroPage />
      {/* <ProgramPage />
      <ReasonsPage /> */}
      <PlansPage />
      {/* <TestmonialPage/>
      <JoinPage />
      <FooterPage /> */}
    </div>
  );
}
export default Home;