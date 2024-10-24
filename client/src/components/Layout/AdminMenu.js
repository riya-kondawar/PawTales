import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div
          className="list-group"
          style={{ color: "#fff", backgroundColor: "#274c92" }}
        >
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
            style={{ color: "#274c92", backgroundColor: "#274c92" }}
          >
            Create Pet Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
            style={{ color: "#274c92", backgroundColor: "#274c92" }}
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-products"
            className="list-group-item list-group-item-action"
            style={{ color: "#274c92", backgroundColor: "#274c92" }}
          >

           Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
            style={{ color: "#274c92", backgroundColor: "#274c92" }}
          >

          
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
