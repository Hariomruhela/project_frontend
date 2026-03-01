import { useState } from "react";
import Button from "../ui/Button";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 Replace with real backend API later
    const fakeUser = {
      email,
      role: "admin",
    };

    login(fakeUser);
    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur p-8 rounded-xl w-96 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">
          {type === "login" ? "Login" : "Sign Up"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-black/40 rounded border border-white/20"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-black/40 rounded border border-white/20"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit" className="w-full">
          {type === "login" ? "Login" : "Create Account"}
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;