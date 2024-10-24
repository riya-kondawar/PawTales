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
            to="/dashboard/admin/create-pet"
            className="list-group-item list-group-item-action"
            style={{ color: "#274c92", backgroundColor: "#274c92" }}
          >
            Add New Pet Profile
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-pet-card"
            className="list-group-item list-group-item-action"
            style={{ color: "#274c92", backgroundColor: "#274c92" }}
          >
            Create Product
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
