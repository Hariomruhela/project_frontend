import { useState } from "react";
import { stacks } from "../data/techStackData";

const TechStack = () => {
  const [active, setActive] = useState(0);
  const Icon = stacks[active].icon;

  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Background glow */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl" />
      </div> */}

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            We leverage cutting-edge technologies across multiple domains to
            deliver exceptional digital solutions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="flex overflow-x-auto no-scrollbar bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
            {stacks.map((stack, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`whitespace-nowrap px-4 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-white/10"
                }`}
              >
                {stack.title}
              </button>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-8 text-center sm:text-left">
            {/* Icon */}
            <div
              className={`w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br ${stacks[active].gradient} flex items-center justify-center shadow-2xl`}
            >
              <Icon className="w-10 h-10 sm:w-14 sm:h-14 text-white" />
            </div>

            <div>
              <h3 className="text-xl sm:text-3xl font-bold text-white">
                {stacks[active].title} Development
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mt-2 max-w-xl">
                Building engaging and scalable solutions using modern{" "}
                {stacks[active].title} technologies.
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6">
            {stacks[active].items.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium text-white border border-pink-400/40 bg-gradient-to-r from-pink-500/10 to-purple-500/10 hover:from-pink-500 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base text-gray-300 mb-6">
            Don't see the technology you need? We're always learning and adapting
            to new tools.
          </p>

          <button className="px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300">
            Let's Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
