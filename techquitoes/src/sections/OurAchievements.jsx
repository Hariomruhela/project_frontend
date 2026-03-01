import { points, stats } from "../data/achievementData";

const OurAchievements = () => {
  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-effect rounded-3xl p-6 sm:p-8 md:p-12">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Left */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                Our{" "}
                <span className="bg-gradient-to-r from-[#ff4fd8] via-[#d946ef] to-[#a855f7] bg-clip-text text-transparent">
                  Achievements
                </span>
              </h2>

              <p className="text-base sm:text-lg text-gray-300 mb-8">
                At TechQuitoes Solution, our journey has been defined by
                dedication, innovation, and trust. Over the years, we've reached
                milestones that reflect our commitment to delivering excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="text-center glass-effect p-4 sm:p-6 rounded-xl border-2 border-white/10 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 text-indigo-300 text-3xl sm:text-4xl">
                    {item.icon}
                  </div>

                  <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">
                    {item.value}
                  </div>

                  <div className="text-xs sm:text-sm text-gray-400 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {points.map((p, i) => (
              <div key={i} className="flex items-start gap-4">
                
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${p.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white text-lg sm:text-xl">
                    {p.icon}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    {p.title}
                  </h4>

                  <p className="text-sm sm:text-base text-gray-400">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
