import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Policy from "./pages/Policy.js";
import PageNotFound from "./pages/PageNotFound.js";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login.js";
import Dashboard from "./pages/user/Dashboard.js";
import PrivateRoute from "./components/Routes/Private.js";
import ForgotPassword from "./pages/Auth/ForgotPassword.js";
import AdminRoute from "./components/Routes/AdminRoutes.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import CreateCategory from "./pages/Admin/CreateCategory.js";
import CreateProduct from "./pages/Admin/CreateProduct.js";
import Users from "./pages/Admin/Users.js";
import Adoption from "./pages/user/Adoption.js"; // Orders
import Profile from "./pages/user/Profile.js";
import Products from "./pages/Admin/Products.js";
import UpdateProduct from "./pages/Admin/UpdateProduct.js";
import Search from "antd/es/transfer/search.js";
// product details
import Categories from "./pages/Categories.js";
// Categ Product
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/product/:slug" element={<ProductDetails />} /> */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        {/* <Route path="/category/:slug" element={<CategoryProduct />} /> */}
        <Route path="/search" element={<Search />} />

        {/* User Dashboard and Related Routes */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/adoption" element={<Adoption />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        {/* Admin Dashboard and Related Routes */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
        </Route>

        {/* Authentication Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />

        {/* Informational Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />

        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
