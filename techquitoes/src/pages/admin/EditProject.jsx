import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import toast from "react-hot-toast";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);

  useEffect(() => {
    const savedProjects =
      JSON.parse(localStorage.getItem("projects")) || [];

    const foundProject = savedProjects.find(
      (p) => p.id === Number(id)
    );

    setProject(foundProject);
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const savedProjects =
      JSON.parse(localStorage.getItem("projects")) || [];

    const updatedProjects = savedProjects.map((p) =>
      p.id === project.id ? project : p
    );

    localStorage.setItem(
      "projects",
      JSON.stringify(updatedProjects)
    );

    toast.success("Project Updated 🚀");
    navigate("/admin/projects");
  };

  if (!project) return <p>Loading...</p>;

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Edit Project</h1>

      <form
        onSubmit={handleUpdate}
        className="bg-white p-6 rounded-xl shadow space-y-4"
      >
        <input
          type="text"
          className="w-full border p-3 rounded-lg"
          value={project.title}
          onChange={(e) =>
            setProject({ ...project, title: e.target.value })
          }
        />

        <input
          type="text"
          className="w-full border p-3 rounded-lg"
          value={project.tech}
          onChange={(e) =>
            setProject({ ...project, tech: e.target.value })
          }
        />

        <textarea
          className="w-full border p-3 rounded-lg"
          value={project.description}
          onChange={(e) =>
            setProject({ ...project, description: e.target.value })
          }
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={project.showProject}
            onChange={() =>
              setProject({
                ...project,
                showProject: !project.showProject,
              })
            }
          />
          Show Project To Users
        </label>

        <button className="bg-black text-white px-6 py-2 rounded-lg">
          Update Project
        </button>
      </form>
    </AdminLayout>
  );
};

export default EditProject;