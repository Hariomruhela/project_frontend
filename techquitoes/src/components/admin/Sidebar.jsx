import { Link,  } from "react-router-dom";
import { FaProjectDiagram, FaTachometerAlt, } from "react-icons/fa";

const Sidebar = () => {
  // const navigate = useNavigate();

  // const logout = () => {
  //   localStorage.removeItem("user");
  //   navigate("/");
  // };

  return (
    <div className="w-64 min-h-screen bg-black text-white p-6 flex flex-col justify-start">
      {/* Top Section */}
  <div>
      {/* <h2 className="text-2xl font-bold">Admin Panel</h2> */}

      <nav className="space-y-5 mt-5">
        <Link to="/admin" className="flex items-center gap-2 hover:text-gray-400">
          <FaTachometerAlt /> Dashboard
        </Link>

        <Link to="/admin/projects" className="flex items-center gap-2 hover:text-gray-400">
          <FaProjectDiagram /> Projects
        </Link>

        <Link to="/admin/about" className="flex items-center gap-2 hover:text-gray-400">
          <FaProjectDiagram /> AboutUs
        </Link>

        <Link to="/admin/team" className="flex items-center gap-2 hover:text-gray-400">
          <FaProjectDiagram /> Team
        </Link>
        <Link to="/admin/faqs" className="flex items-center gap-2 hover:text-gray-400">
          <FaProjectDiagram /> FAQs
        </Link>

        
      

        {/* <button
          onClick={logout}
          className="flex items-center gap-2 text-red-400 hover:text-red-600"
        >
          <FaSignOutAlt /> Logout
        </button> */}


        
      </nav></div>
      <div className="pt-6 mt-72  border-t border-white/10 rounded-full">
      <Link to="/">
    <img
      src="/TQ_logo.png"
      alt="TechQ Logo"
      className="w-32 mx-auto opacity-70  hover:opacity-100 transition"
    /></Link>
  </div>
  
    </div>
  );
};

export default Sidebar;