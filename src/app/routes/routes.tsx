import LoginPage from "@/pages/auth-pages/login-page";
import RegisterPage from "@/pages/auth-pages/register-page";
import HomePage from "@/pages/home-page";
import ProjectPage from "@/pages/project-page";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:projectId" element={<ProjectPage />} />
    </Routes>
  );
};

export default AppRoutes;
