import { useEffect, useState } from "react";

const CaseStudy = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const savedProjects =
      JSON.parse(localStorage.getItem("projects")) || [];

    // ✅ Only show visible projects
    const visibleProjects = savedProjects.filter(
      (project) => project.showProject === true
    );

    setProjects(visibleProjects);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10">Case Studies</h1>

      {projects.length === 0 ? (
        <p>No visible projects available.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
           <div
  key={project.id}
  className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500 hover:scale-105"
>
  {/* Inner Card */}
  <div className="bg-gray-800 rounded-2xl p-6 h-full transition-all duration-500 group-hover:shadow-2xl">

    {/* Image */}
    <div className="overflow-hidden rounded-xl">
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    {/* Title */}
    <h2 className="text-2xl font-bold text-white mt-6">
      {project.title}
    </h2>

    {/* Description */}
    <p className="text-gray-300 mt-3 leading-relaxed">
      {project.description}
    </p>

    {/* Tech Stack */}
    <p className="mt-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
      {project.tech}
    </p>

  </div>
</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CaseStudy;