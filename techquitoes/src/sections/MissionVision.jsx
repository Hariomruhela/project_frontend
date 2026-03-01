import { items } from "../data/vissionData";


const MissionVision = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* dotted line */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 border-t-2 border-dotted border-purple-400/40" />

          {items.map((item, i) => (
            <div key={i} className="relative">
              <div className="flex flex-col items-center">
                <div
                  className={`w-32 h-32 rounded-full bg-gradient-to-br ${item.gradient} 
                  flex items-center justify-center mb-6 shadow-2xl relative z-10
                  hover:scale-105 transition`}
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-center max-w-xs">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
