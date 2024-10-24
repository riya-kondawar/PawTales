import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [animalID, setAnimalID] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [dob, setDob] = useState("");
  const [intakeDate, setIntakeDate] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");

  // Get all categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while getting categories");
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  // Create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("animalID", animalID);
      productData.append("name", name);
      productData.append("description", description);
      productData.append("gender", gender);
      productData.append("location", location);
      productData.append("dob", dob);
      productData.append("intakeDate", intakeDate);
      productData.append("photo", photo);
      productData.append("category", category);

      const { data } = await axios.post("/api/v1/product/create-product", productData);
      if (data?.success) {
        toast.success(data?.message);
        navigate("/dashboard/admin/products");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Pet Product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Pet Product</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => setCategory(value)}
              >
                {categories?.map((c) => (
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
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={animalID}
                  placeholder="Animal ID"
                  className="form-control"
                  onChange={(e) => setAnimalID(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Pet Name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="Pet Description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Gender"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => setGender(value)}
                >
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                  <Option value="Unknown">Unknown</Option>
                </Select>
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
                <input
                  type="date"
                  value={dob}
                  className="form-control"
                  onChange={(e) => setDob(e.target.value)}
                />
                <label className="mt-2">Date of Birth</label>
              </div>
              <div className="mb-3">
                <input
                  type="date"
                  value={intakeDate}
                  className="form-control"
                  onChange={(e) => setIntakeDate(e.target.value)}
                />
                <label className="mt-2">Intake Date</label>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE PET PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
