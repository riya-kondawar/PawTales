import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [animalID, setAnimalID] = useState("");
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");  // Added slug state
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState(null);
  const [dob, setDob] = useState("");
  const [intakeDate, setIntakeDate] = useState("");
  const [id, setId] = useState("");

  // Fetch single product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`);
      setAnimalID(data.product.animalID);
      setName(data.product.name);
      setSlug(data.product.slug); // Set slug
      setId(data.product._id);
      setDescription(data.product.description);
      setGender(data.product.gender);
      setLocation(data.product.location);
      setCategory(data.product.category._id);
      setDob(data.product.dob ? new Date(data.product.dob).toISOString().substring(0, 10) : "");
      setIntakeDate(data.product.intakeDate ? new Date(data.product.intakeDate).toISOString().substring(0, 10) : "");
    } catch (error) {
      console.log(error);
      toast.error("Error fetching product details");
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [params.slug]);

  // Fetch all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting categories");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Update product function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("animalID", animalID);
      productData.append("name", name);
      productData.append("slug", slug);  // Add slug to product data
      productData.append("description", description);
      productData.append("gender", gender);
      productData.append("location", location);
      if (photo) productData.append("photo", photo);
      productData.append("category", category);
      if (dob) productData.append("dob", dob);
      if (intakeDate) productData.append("intakeDate", intakeDate);

      const { data } = await axios.put(`/api/v1/product/update-product/${id}`, productData);
      if (data.success) {
        toast.success("Product Updated Successfully");
        navigate("/dashboard/admin/products");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Delete product function
  const handleDelete = async () => {
    try {
      const answer = window.confirm("Are you sure you want to delete this product?");
      if (!answer) return;

      const { data } = await axios.delete(`/api/v1/product/delete-product/${id}`);
      toast.success("Product Deleted Successfully");
      navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Update Product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Update Product</h1>
            <div className="m-1 w-75">
              <input
                type="text"
                value={animalID}
                placeholder="Animal ID"
                className="form-control mb-3"
                onChange={(e) => setAnimalID(e.target.value)}
              />
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                className="form-select mb-3"
                onChange={(value) => setCategory(value)}
                value={category}
              >
                {categories.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo ? (
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="product"
                    height={"200px"}
                    className="img img-responsive"
                  />
                ) : (
                  <img
                    src={`/api/v1/product/product-photo/${id}`}
                    alt="product"
                    height={"200px"}
                    className="img img-responsive"
                  />
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Write a name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={slug}
                  placeholder="Write a slug" // Added slug input field
                  className="form-control"
                  onChange={(e) => setSlug(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  value={description}
                  placeholder="Write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={location}
                  placeholder="Location"
                  className="form-control"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Gender"
                  size="large"
                  className="form-select mb-3"
                  onChange={(value) => setGender(value)}
                  value={gender}
                >
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                  <Option value="Unknown">Unknown</Option>
                </Select>
              </div>
              <div className="mb-3">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  value={dob}
                  className="form-control"
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Intake Date</label>
                <input
                  type="date"
                  value={intakeDate}
                  className="form-control"
                  onChange={(e) => setIntakeDate(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpdate}>
                  UPDATE PET
                </button>
              </div>
              <div className="mb-3">
                <button className="btn btn-danger" onClick={handleDelete}>
                  DELETE PET
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;
