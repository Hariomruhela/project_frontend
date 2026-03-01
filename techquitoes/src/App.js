import Footer from "./components/layout/ Footer";
import Navbar from "./components/layout/Navbar";
import Body from "./main/Body";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaseStudy from "./main/CaseStudy";
import Chatbot from "./components/Chatbot";
// import BubbleBackground from "./components/BubbleBackground";
import ProjectForm from "./main/ProjectForm";
import { OrbitsBackground } from "./components/OrbitsBackground";
// import AdminRoute from "./routes/AdminRoute";
import Dashboard from "./pages/admin/ Dashboard";
import Projects from "./pages/admin/Projects";
import AddProject from "./pages/admin/ AddProject";
import EditProject from "./pages/admin/EditProject";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import { Toaster } from "react-hot-toast";
import AboutManage from "./pages/admin/AboutManage";
import TeamManage from "./pages/admin/TeamManage";
import FaqsMange from "./pages/admin/FaqsMange";


function App() {
  return (
    <BrowserRouter>
   
    <div className=" relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#2b0f3f] via-[#12071f] to-black">
       <OrbitsBackground count={9} />
    <div
      className="mt-12 pt-96 fixed w-full min-h-screen overflow-hidden text-white
       opacity-90
      before:absolute before:inset-0 before:content-['']
      before:bg-[radial-gradient(30%_30%_at_50%_40%,rgba(217,70,239,0.45),rgba(5,0,20,0.95)_68%)]
      "
    >
        {/* Left glow */}
  <div className="pointer-events-none absolute  top-1/2 left-[-10%] -translate-y-1/2
        w-[70%] h-[80%] blur-[140px]
        bg-[radial-gradient(50%_50%_at_20%_20%,rgba(192,132,252,0.4),transparent_70%)]" />

  {/* Right glow */}
  <div className="pointer-events-none absolute top-48 right-[-30%] -translate-y-1/2
  w-[70%] h-[80%] blur-[140px]
  bg-[radial-gradient(50%_50%_at_50%_50%,rgba(192,132,252,0.4),transparent_70%)]" />

  

  {/* Extra soft streak blur */}
  {/* <div className="mt-2 pointer-events-none absolute inset-10 opacity-5
  bg-[repeating-linear-gradient(175deg,transparent,transparent_120px,rgba(217,70,239,0.8)_122px,rgba(217,70,239,0.8)_120px)]" /> */}
  
  
   
     </div>
    
      

      <div className="relative z-5">
        <Toaster position="top-center" />
        
        {/* <BubbleBackground/> */}
        <Navbar />

          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/form" element={<ProjectForm/>}/>
             <Route
          path="/admin"
          element={
            
              <Dashboard />
          
          }
        />

        <Route
          path="/admin/projects"
          element={
            
              <Projects />
            
          }
        />
        <Route path="/admin/about" element={<AboutManage />} />
        <Route path="/admin/team" element={<TeamManage />} />
        <Route path="/admin/faqs" element={<FaqsMange />} />
        <Route
          path="/admin/projects/add"
          element={
            
              <AddProject />
            
          }
        />
           <Route path="/admin/projects/edit/:id" element={<EditProject />} /> 
           <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          </Routes>


           

          <Chatbot />
        <Footer/>
      </div>
    
    </div></BrowserRouter>
  );
}




export default App;
