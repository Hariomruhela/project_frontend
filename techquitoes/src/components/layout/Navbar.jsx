import { useState } from "react";
import Button from "../ui/Button";
import { navLinks } from "../../data/navData";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";
import ChecKUser from "../../CheckUser";


const Navbar = () => {
  
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
const { user, logout } = useAuth();
  const handleCase = () =>
    navigate(
      location.pathname === "/case-study" ||
        location.pathname === "/form"
        ? "/"
        : "/case-study"
    );
const isAdminPage = location.pathname.startsWith("/admin");
const isAdmin = localStorage.getItem("is_admin") === "true";

//.......Logout
//  const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("is_admin")
//     navigate("/");
//   };

const checkuser=ChecKUser()
  return (
    <nav className="fixed top-0 z-50 w-full bg-black/40 backdrop-blur border-b border-white/10">
      <div  className={`${
    isAdminPage ? "w-full" : "max-w-7xl mx-auto"
  } px-6 py-4 flex items-center justify-between`}>
        
        {/* Logo */}
      <div className="w-44">
  {!isAdminPage ? (
    <a href="/">
      <img
        className="w-44"
        src="/techQlogo.png"
        alt="Q"
      />
    </a>
  ):(
    <h1 className="text-white font-bold text-2xl ">Admin Panel</h1>
  )}
</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          
          {location.pathname === "/" && (
            <ul className="flex items-center gap-8 text-white/70">
              {navLinks.map((link, i) => (
                <li key={i} className="relative group">
                  <a
                    href={link.href}
                    className="text-white transition"
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          )}
       {(checkuser && isAdmin) &&(
  <Button
    onClick={() =>
      navigate(location.pathname === "/admin" ? "/" : "/admin")
    }
  >
    {location.pathname === "/admin" ? "Home" : "Dashboard"}
  </Button>
)}


          <Button onClick={handleCase}>
            {location.pathname === "/case-study" ||
            location.pathname === "/form"
              ? "Home"
              : "Case Study"}
          </Button>
          
          {/* {!user ? (
  <Button onClick={() => navigate(  location.pathname === "/login"
        ? "/signup"
        : "/login")}>
    {location.pathname==="/login"?"SingUp":"Login"}
    
  </Button>
) : (
  <Button
    onClick={() => {
      logout();
      navigate("/");
    }}
  >
    Logout
  </Button>
)} */}

<div className={`${
    !isAdminPage &&"md:-mr-56"
  } `}>

  {!user?(<button
          onClick={()=>navigate(  location.pathname === "/login"
        ? "/signup"
        : "/login")}
          className="flex items-center gap-2 text-gray-400 hover:text-gray-50"
        >
          <FaSignOutAlt />{location.pathname==="/login"?"SingUp":"Login"}
        </button>):(<button
          onClick={() => {
      logout();
      navigate("/");
    }}
          className="flex items-center gap-2 text-red-400 hover:text-red-600"
        >
          <FaSignOutAlt /> {checkuser?"LogOut":"Login"}
        </button>)
}

</div>
       
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/80 backdrop-blur border-t border-white/10 px-6 py-6">
          <ul className="flex flex-col gap-5 text-white/80">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-indigo-400 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <Button
              className="mt-4 w-full"
              onClick={() => navigate("/case-study")}
            >
              case study
            </Button>
           {!user ? (
  <Button onClick={() => navigate("/login")}>
    
    Login
  </Button>
) : (
  <Button
    onClick={() => {
      logout();
      navigate("/");
    }}
  >
    Logout
  </Button>
)}
{user&&<Button onClick={() => navigate("/admin")}>
    
    DashBoard
  </Button>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;