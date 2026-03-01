const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-purple-700">
            About Us
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold text-white mt-4">
            Building Smarter Digital Solutions
          </h3>

          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            We craft innovative Web Applications, APIs, and Web Design solutions
            that empower businesses to connect, engage, and succeed in the
            digital era.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h4 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              At TechQuitoes Solution.
            </h4>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">We deliver Web Application Development, Recharge &amp; Bill Payment solutions, API services, and APIs for seamless integrations. Our innovative software helps businesses adapt to the digital era.</p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">We focus on simplifying processes while building technology that drives measurable growth and long-term success.</p>
           
            <div className="space-y-4 mb-8">
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-indigo-400 rounded-full mr-4 shadow-[0_0_10px_#818cf8]">
                        </div>
                        <span className="text-gray-200">Modern Technologies &amp; Best Practices</span>
                        </div>
                        <div className="flex items-center"><
                            div class="w-3 h-3 bg-purple-400 rounded-full mr-4 shadow-[0_0_10px_#c084fc]">
                            </div>
                            <span className="text-gray-200">Agile Development Process</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-pink-400 rounded-full mr-4 shadow-[0_0_10px_#f472b6]">
                                    </div>
                                    <span className="text-gray-200">24/7 Support &amp; Maintenance</span>
                                    </div>
                                    </div>   
          </div>
          {/* Right */}
          <div className="opacity: 1; transform: none;">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Approach</h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">We work with startups, SMEs, and enterprises to design solutions that improve customer experiences and business efficiency. No matter the business size, we're here to help you succeed.</p>
            <p className="text-lg text-gray-300 leading-relaxed">At Techquitoes Solution , we don't just build software—we create future-ready digital solutions that empower businesses worldwide.</p>
            </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
