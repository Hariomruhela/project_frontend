import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";

const Dashboard = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [skillCount, setSkillCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
  const projects =
    JSON.parse(localStorage.getItem("projects")) || [];

  setProjectCount(projects.length);

  // Count unique tech skills
  const techSet = new Set();
  projects.forEach((project) => {
    project.tech?.split(",").forEach((t) =>
      techSet.add(t.trim())
    );
  });

  setSkillCount(techSet.size);

  // Count projects with description
  setMessageCount(
    projects.filter((p) => p.description).length
  );
}, []);

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Projects */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Projects</h2>
          <p className="text-3xl mt-4 font-bold">
            {projectCount}
          </p>
        </div>

        {/* Skills */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Skills</h2>
          <p className="text-3xl mt-4 font-bold">
            {skillCount}
          </p>
        </div>

        {/* Messages */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Messages</h2>
          <p className="text-3xl mt-4 font-bold">
            {messageCount}
          </p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;