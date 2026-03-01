import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ChecKUser from "../../CheckUser";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");
  const [description, setDescription] = useState("");
  const [showProject, setShowProject] = useState(true);
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const checkuser = ChecKUser();
    if (!checkuser) {
      navigate("/login");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Unauthorized ❌ Please login again");
        navigate("/login");
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("tech", tech);
      formData.append("description", description);
      formData.append("show_project", showProject);
      formData.append("image", image);

      const response = await fetch(
        "http://127.0.0.1:8000/api/projects/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await response.json()
      console.log("response data is : ", data)
      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      toast.success("Project Added Successfully 🚀");
      navigate("/admin/projects");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Add Project</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-4"
      >
        <input
          type="text"
          placeholder="Project Title"
          className="w-full border p-3 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Tech Stack"
          className="w-full border p-3 rounded-lg"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          required
        />

        <textarea
          placeholder="Project Description"
          className="w-full border p-3 rounded-lg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="file"
          accept="image/*"
          className="w-full"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showProject}
            onChange={() => setShowProject(!showProject)}
          />
          Show Project To Users
        </label>

        <button className="bg-black text-white px-6 py-2 rounded-lg">
          Add Project
        </button>
      </form>
    </AdminLayout>
  );
};

export default AddProject;