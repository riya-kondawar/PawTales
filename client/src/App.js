import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Pets from "./Components/Pets/Pets";
import AdoptForm from "./Components/AdoptForm/AdoptForm";
import AdminLogin from "./Components/AdminPanel/AdminLogin";
import Profile from "./Components/Profile/Profile";
import Auth from "./Components/Auth/Auth";
import { useAuthContext } from './hooks/UseAuthContext';
import "./App.css";
import FourOhFourPage from "./Components/404/FourOhFourPage";

const Layout = ({ children }) => (
  <>
    <Navbar title="PawFinds" />
    {children}
    <Footer title="PawFinds" />
  </>
);

const ProtectedRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/auth" />;
};

const App = () => {
  const { user } = useAuthContext();

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute user={user}>
              <Layout>
                <Home description="Ensure you are fully prepared to provide proper care and attention to your pet before welcoming them into your home." />
              </Layout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/services" 
          element={
            <ProtectedRoute user={user}>
              <Layout>
                <Services />
              </Layout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <ProtectedRoute user={user}>
              <Layout>
                <Contact />
              </Layout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/pets" 
          element={
            <ProtectedRoute user={user}>
              <Layout>
                <Pets />
              </Layout>
            </ProtectedRoute>
          } 
        />
         <Route 
          path="/profile" 
          element={
            <ProtectedRoute user={user}>
              <Layout>
                <Profile />
              </Layout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/adopt-form" 
          element={
            <ProtectedRoute user={user}>
              <Layout>
                <AdoptForm />
              </Layout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin" 
          element={
              <AdminLogin />
          } 
        />
       
        <Route 
          path="/auth" 
          element={!user ? <Auth /> : <Navigate to="/" />} 
        />
         <Route 
          path="/*" 
          element={<FourOhFourPage/>} 
        />
      </Routes>
    </Router>
  );
};

export default App;
