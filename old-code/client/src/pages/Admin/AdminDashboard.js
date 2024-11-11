import React from "react";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import AdminMenu from "./../../components/Layout/AdminMenu";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Admin"}>
      <div className=" dashboard container-fluid ">
        <div className=" row p-5 m-auto d-flex align-items-start justify-content-start">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div
              className="card w-75 p-3"
              style={{ color: "#fff", backgroundColor: "#274c92" }}
            >
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
