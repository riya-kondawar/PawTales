import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Policy from "./pages/Policy.js";
import PageNotFound from "./pages/PageNotFound.js";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login.js";
import Pets from "./pages/Pets.js";
import Dashboard from "./pages/user/Dashboard.js";
import AdminRoute from "./components/Routes/AdminRoutes.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import ForgotPassword from "./pages/Auth/ForgotPassword.js";
import PrivateRoute from "./components/Routes/Private.js";
import CreatePet from "./pages/Admin/CreatePet.js";
import CreatePetCard from "./pages/Admin/CreatePetCard.js";
import Users from "./pages/Admin/Users.js";
import Adoption from "./pages/user/Adoption.js";
import Profile from "./pages/user/Profile.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Pets from "./pages/user/Pets.js";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/adoption" element={<Adoption />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-pet" element={<CreatePet />} />
          <Route path="admin/create-pet-card" element={<CreatePetCard />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/pets" element={<Pets />} />
      </Routes>
    </>
  );
}

export default App;
