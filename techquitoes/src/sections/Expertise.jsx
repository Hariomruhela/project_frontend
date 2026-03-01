import { fadeInUp, staggerContainer } from "../animations/variants";
import ServiceCard from "../components/ui/ServiceCard";
import { expertises } from "../data/servicesData"
import { motion } from "framer-motion";
const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp(60)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#ff4fd8] via-[#d946ef] to-[#a855f7] bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {expertises.map((service, index) => (
            <motion.div key={index} variants={fadeInUp(80)}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
