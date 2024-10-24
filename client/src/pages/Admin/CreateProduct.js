import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";

const CreateProduct = () => {
  return (
    <Layout title={"Dashboard - Add new Pet for Adoption"}>
      <div className="dashboard">
        <div className="row p-5 m-auto d-flex align-items-start justify-content-start">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-3">
            <h1>Add New Pet</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
