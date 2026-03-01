import Typewriter from "typewriter-effect";
// import BubbleBackground from "../components/BubbleBackground";
import ServiceCard from "../components/ui/ServiceCard";
import { services } from "../data/servicesData";
import { motion } from "framer-motion";   // 👈 ADD THIS
import { useNavigate } from "react-router-dom";




const Hero = () => {
const navigate=useNavigate()
  // 👇 Container animation (controls stagger)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // delay between cards
      },
    },
  };

  // 👇 Individual card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (<>
   
    <section id="home" className="relative max-w-6xl mx-auto px-6 mt-24 pt-44 text-center">
       

      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Building Reliable Software <br />
        <span className="text-6xl font-bold text-pink-400">
          <Typewriter
            options={{
              strings: ["Delivering Real Results"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>

      <p className="text-lg md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
        We deliver primarily web applications offering results for our clients,
        and it's much more than this while delivering Real Result
      </p>

      <div className="mt-10 flex justify-center gap-4">
        
        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ff4fd8] hover:opacity-90 transition flex items-center gap-2 shadow-glow"
        onClick={()=>{
          console.log("clicked the button")
          navigate("/form")
        }}
       
        >
          Start Your Project →
        </button>

        <button className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-white/5 transition">
          Our Services
        </button>
      </div>

      {/* <BubbleBackground /> */}

      {/* 🔥 Animated Services Cards */}
      <motion.div
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={cardVariants}>
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </motion.div>

    </section>
    </>
    
  );
};

export default Hero;
