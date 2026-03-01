import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import ChecKUser from "../../CheckUser";
import { useEffect } from "react";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(()=>{


    const checkuser=ChecKUser()
    if(!checkuser){navigate("/login") }

    const is_admin = localStorage.getItem("is_admin")
    console.log("is admin data in admin layout is :- ", is_admin)
    if(is_admin==="false")(
      navigate("/")
    )
    
  },[navigate])
  return (
    <div className="flex mt-20 min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
};

export default AdminLayout;