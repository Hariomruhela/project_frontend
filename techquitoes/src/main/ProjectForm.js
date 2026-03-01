import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    return /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
  };
  const validatePhone = (phone) => {
  return /^[6-9]\d{9}$/.test(phone);
};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.description) {
      toast.error("Please fill all fields");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
     if (!validatePhone(formData.phone)) {
      toast.error("Please enter a valid  phone number");
      return;
    }

    toast.success("Project Submitted Successfully ");

    setFormData({
      name: "",
      email: "",
      phone: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-gray-900 to-black">

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#ff4fd8] via-[#d946ef] to-[#a855f7] bg-clip-text text-transparent">
          Start Your Project
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-lg bg-transparent border border-gray-600 focus:border-purple-500 focus:outline-none text-white"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-lg bg-transparent border border-gray-600 focus:border-purple-500 focus:outline-none text-white"
        />

        {/* Project Title */}
        <input
          type="digits"
          name="phone"
          placeholder="Phone number "
          value={formData.phone}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-lg bg-transparent border border-gray-600 focus:border-purple-500 focus:outline-none text-white"
        />

        {/* Description */}
        <textarea
          name="description"
          rows="4"
          placeholder="Tell us about your project..."
          value={formData.description}
          onChange={handleChange}
          className="w-full mb-6 p-3 rounded-lg bg-transparent border border-gray-600 focus:border-purple-500 focus:outline-none text-white resize-none"
        ></textarea>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ff4fd8] font-semibold hover:opacity-90 transition "
        >
          Send Project →
        </motion.button>
        <div className=" p-7">
         <Toaster 
        position="bottom-0 center"
        reverseOrder={true}
      /></div>
      </motion.form>
      
    </div>
  );
};

export default ProjectForm;
