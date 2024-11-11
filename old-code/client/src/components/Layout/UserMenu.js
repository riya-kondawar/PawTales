import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="text-center">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/adoption"
            className="list-group-item list-group-item-action"
          >
            Pet Adopted
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;