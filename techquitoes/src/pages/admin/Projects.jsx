import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { FaFlag, FaRegFlag } from "react-icons/fa";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
// ✅ Toggle Visibility
const handleToggleVisibility = (id) => {
  const updatedProjects = projects.map((project) =>
    project.id === id
      ? { ...project, showProject: !project.showProject }
      : project
  );

  localStorage.setItem(
    "projects",
    JSON.stringify(updatedProjects)
  );

  setProjects(updatedProjects);

  toast.success("Visibility Updated 🚀");
};
  // Load projects
  useEffect(() => {
    const savedProjects =
      JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(savedProjects);
  }, []);

  // ✅ Delete Project
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    const updatedProjects = projects.filter(
      (project) => project.id !== id
    );

    localStorage.setItem(
      "projects",
      JSON.stringify(updatedProjects)
    );

    setProjects(updatedProjects);
    toast.success("Project Deleted 🚀");
  };

  // ✅ Edit Project
  const handleEdit = (id) => {
    navigate(`/admin/projects/edit/${id}`);
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Projects</h1>
        <Link
          to="/admin/projects/add"
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          + Add Project
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow">
          <p>No projects yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead className="bg-gray-500 text-white">
              <tr>
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3">Tech</th>
                <th className="p-3">Description</th>
                <th className="p-3">Active/InActive</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-t text-center">
                  <td className="p-3">
                    <img
                      src={project.image}
                      alt="project"
                      className="h-16 mx-auto rounded"
                    />
                  </td>
                  <td className="p-3">{project.title}</td>
                  <td className="p-3">{project.tech}</td>
                  <td className="p-3">{project.description}</td>
                 <td className="p-3">
  <button
    onClick={() => handleToggleVisibility(project.id)}
    className={`p-2 rounded-full text-white transition ${
      project.showProject
        ? "bg-green-500 hover:bg-green-600"
        : "bg-red-700 hover:bg-red-500"
    }`}
  >
   
  </button>
</td>

                  {/* ✅ ACTION BUTTONS */}
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleEdit(project.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(project.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
};

export default Projects;