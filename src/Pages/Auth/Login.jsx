import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const res = await axiosInstance.post("/auth/login", formData);
    //   login(res.data.user); // Assuming API sends { user: { ... } }
    //   navigate("/dashboard");
    // } catch (error) {
    //   console.error("Login failed:", error.response?.data || error.message);
    //   alert("Login failed");
    // }
     const validEmail = "nagi@gmail.com";
    const validPassword = "Reddy123";

    if (formData.email === validEmail && formData.password === validPassword) {
      login({ email: validEmail }); // Store in context
      navigate("/dashboard");
    } else {
      alert("Invalid credentials. Try nagi@gmail.com / Reddy123");
    }

  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <h2 className="text-2xl mb-4">Login</h2>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-2 mb-4 w-full" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 mb-4 w-full" />
      <button type="submit" className="bg-green-500 text-white px-4 py-2">Login</button>
    </form>
  );
};

export default Login;
