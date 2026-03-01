
import MissionVision from "./MissionVision";
import OurAchievements from "./OurAchievements";

const ThinkAndAchievements = () => {
  return (
    <section className="relative  overflow-hidden">
      {/* Glow Orbs */}
      {/* <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-purple-600/20 blur-[140px] rounded-full" /> */}

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold  bg-gradient-to-r from-[#ff4fd8] via-[#d946ef] to-[#a855f7] bg-clip-text text-transparent mb-0">
          What We Think?
        </h2>

        {/* Think Cards */}
        {/* <div className="relative grid md:grid-cols-3 gap-16 mb-32">
          <div className="absolute top-20 left-0 right-0 hidden md:block border-t border-dotted border-white/30" /> */}

          <MissionVision/>
          
        {/* </div> */}

        {/* Achievements */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-12 py-2">
          <OurAchievements/>
        </div>
      </div>
    </section>
  );
};

export default ThinkAndAchievements;
