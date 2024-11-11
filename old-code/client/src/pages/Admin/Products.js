import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  // Fetch all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout title={"Show all Pets"}>
      <div className="dashboard">
        <div className="row p-5 m-auto d-flex align-items-start justify-content-start">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Products List</h1>
            <div className="d-flex flex-wrap">
              {products.map((product) => (
                <Link
                  key={product._id}
                  to={`/dashboard/admin/product/${product.slug}`}
                  className="product-link"
                >
                  <div className="card m-2" style={{ width: "18rem" }}>
                    <img
                      src={`/api/v1/product/product-photo/${product._id}`}
                      className="card-img-top"
                      alt={products.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      <p>
                        <strong>Animal ID:</strong> {product.animalID}
                      </p>
                      <p>
                        <strong>Gender:</strong> {product.gender}
                      </p>
                      <p>
                        <strong>Location:</strong> {product.location}
                      </p>
                      <p>
                        <strong>Date of Birth:</strong>{" "}
                        {product.dob
                          ? new Date(product.dob).toLocaleDateString()
                          : "N/A"}
                      </p>
                      <p>
                        <strong>Intake Date:</strong>{" "}
                        {new Date(product.intakeDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
