import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth()
  return (
    <Layout title={"Dashboard - PawTales"}>
      <div className="dashboard">
        <div className="row p-5 m-auto d-flex align-items-start justify-content-start">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.amail}</h3>
              <h3>{auth?.user?.address}</h3>
              <h3>{auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
