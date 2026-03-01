import React from "react";
import { team } from "../data/ teamData";



export default function Team() {
  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto  px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left */}
        <div className="w-full max-w-3xl  mx-auto text-center md:text-left">
      <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">
        Our <span className="bg-gradient-to-r from-[#ff4fd8] via-[#d946ef] to-[#a855f7] bg-clip-text text-transparent">Team</span>
      </h3>

      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        At TechQuitoes Solution, our team is a blend of creative
        designers, skilled developers, and strategic thinkers working together
        to build impactful digital solutions. We combine innovation, dedication,
        and continuous learning to go beyond just building software — we become
        trusted partners in your digital journey.
      </p>

      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
        With a culture of transparency, dedication, and continuous learning, we
        go beyond just building software — we become trusted partners in your
        digital journey.
      </p>

      <div className="flex justify-center md:justify-start">
        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 
          hover:bg-gradient-to-r hover:from-[#ff4fd8] hover:via-[#d946ef] hover:to-[#a855f7] 
          text-white px-8 py-4 rounded-lg font-semibold 
          shadow-lg hover:shadow-xl transition-all duration-300">
          Read More →
        </button>
      </div>
    </div>

        {/* Right */}
        <div className="grid grid-cols-2 mt-56  gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className={`relative bg-white/5 backdrop-blur-xl border  border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition ${
                member.large ? "col-span-1 " : ""
              }`}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover
              "
              />

              <div className="p-4">
                <h4 className="text-white font-semibold">{member.name}</h4>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>

              <span className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs">
                ✓
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
