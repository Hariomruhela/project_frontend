import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // ✅ Fetch Projects from API
  const fetchProjects = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/projects/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 401) {
        toast.error("Session expired ❌");
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }

      const data = await response.json();
      setProjects(data);
    } catch (error) {
      toast.error("Failed to load projects ❌");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchProjects();
  }, []);

  // ✅ Toggle Visibility (API)
  const handleToggleVisibility = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/projects/${id}/toggle`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update visibility");
      }

      toast.success("Visibility Updated 🚀");
      fetchProjects();
    } catch (error) {
      toast.error("Error updating visibility ❌");
    }
  };

  // ✅ Delete Project (API)
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/projects/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      toast.success("Project Deleted 🚀");
      fetchProjects();
    } catch (error) {
      toast.error("Error deleting project ❌");
    }
  };

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
                      src={project.image_url}
                      alt="project"
                      className="h-16 mx-auto rounded"
                      />  
                  </td>
                  <td className="p-3">{project.title}</td>
                  <td className="p-3">
                      {project.techstack?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-200 rounded mr-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </td>
                  <td className="p-3">{project.description}</td>

                  <td className="p-3">
                    <td className="p-3">
                    <button
                      onClick={() => handleToggleVisibility(project.id)}
                      className={`px-3 py-1 rounded text-white ${
                        project.is_visible ? "bg-green-500" : "bg-red-600"
                      }`}
                    >
                      {project.is_visible ? "Active" : "Inactive"}
                    </button>
                  </td>
                  </td>

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