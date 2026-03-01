import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import Expertise from "../sections/Expertise";
import HowItWorks from "../sections/HowItWorks";
import TechStack from "../sections/TechStack";
import AboutSection from "../sections/AboutSection";
import ThinkAndAchievements from "../sections/ThinkAndAchievements";
import Team from "../sections/Team";
import FAQ from "../sections/FAQ";
import ContactSection from "../sections/ContactSection";
// import ChecKUser from "../CheckUser";
// import BubbleBackground from "../components/BubbleBackground";

const Body = () => {
  // const checkuser=ChecKUser()
  return (
    <div className=" text-white">
      {/* <BubbleBackground/> */}
      <Navbar />
      <Hero />
      <Expertise />
      <AboutSection/>
      <ThinkAndAchievements/>
      <Team/>
      <HowItWorks />
      <TechStack />
      <FAQ/>
      <ContactSection/>
    </div>
  );
};

export default Body;
