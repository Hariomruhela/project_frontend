import React from "react";

const ServiceCard = ({ icon: Icon, title, desc, points, gradient }) => {
  return (
    <div
      className="relative group cursor-pointer rounded-2xl p-8 
      bg-white/5 backdrop-blur-xl border border-white/10
      overflow-hidden
      hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
      transition-all duration-300"
    >
      {/* Radial Glow */}
      <span
        className="pointer-events-none absolute inset-0 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500
        bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_70%)]"
      />

      {/* Content */}
      <div className="relative z-10 ">
        {/* Icon */}
        <div className="flex flex-col items-center">
        <div
          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} 
          flex items-center justify-center mb-6 
          group-hover:scale-110 transition-transform duration-300 shadow-lg`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div></div>

        <h3 className="text-2xl font-bold mb-4 text-white">
          {title}
        </h3>

        <p className="text-gray-400 mb-6">
          {desc}
        </p>

        <ul className="space-y-3">
          {points.map((item, i) => (
            <li
              key={i}
              className="flex items-center text-sm text-gray-400 
              group-hover:text-gray-200 transition-colors"
            >
              <span
                className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${gradient}`}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
