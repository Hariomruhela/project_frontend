import { steps } from "../data/workData";

const HowItWorks = () => {
  return (
    <section
      id="works"
      className="py-24 px-4 overflow-hidden relative"
    >
      {/* Glow */}
     

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            How It <span className="bg-gradient-to-r from-[#ff4fd8] via-[#d946ef] to-[#a855f7] bg-clip-text text-transparent">Works</span> 
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our streamlined process ensures your project is delivered on time,
            within budget, and exceeds expectations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  relative">
          <div className="hidden lg:block absolute top-28 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 opacity-30" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="relative rounded-2xl border bg-[#17132e] border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-2 ">
                <div className="glass-effect rounded-2xl border-hidden text-center relative z-10 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute -top-7 -right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg">
                    {step.id}
                  </div>

                  <div
                    className={` w-20 h-20 mx-auto mt-5 mb-6 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl`}
                  >
                    <Icon className=" w-10 h-10 text-white" />
                  </div>

                  <h3 className=" px-16 text-xl font-bold mb-4 text-white">
                    {step.title}
                  </h3>

                  <p className="  text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {index !== 3 && (
                  <div className="hidden lg:block absolute top-24 -right-4 text-purple-400 z-20">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      className="animate-pulse"
                    >
                      <path
                        d="M5 15H25M25 15L18 8M25 15L18 22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-[#ff4fd8] via-[#d946ef] to-[#a855f7] hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-purple-500/40 transition-all duration-300">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
