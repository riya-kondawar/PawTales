import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";

const Users = () => {
  const users = [
    {
      id: 0,
      name: "Riya",
      email: "riya@gmail.com",
    },
    {
      id: 1,
      name: "Manasi",
      email: "manasi@gmail.com",
    },
    {
      id: 2,
      name: "Suhani",
      email: "suhani@gmail.com",
    },
    {
      id: 3,
      name: "Mahek",
      email: "mahek@gmail.com",
    },
    {
      id: 4,
      name: "User1",
      email: "user1@gmail.com",
    },
    {
      id: 5,
      name: "User2",
      email: "user1@gmail.com",
    },
    {
      id: 6,
      name: "User3",
      email: "user3@gmail.com",
    },
    {
      id: 7,
      name: "Sagar Sir",
      email: "sagarsir@gmail.com",
    },
  ];

  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="dashboard">
        <div className="row p-5 m-auto d-flex align-items-start justify-content-start">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
            <div className="row">
              {users.map((user) => (
                <div className="col-md-4 mt-3" key={user.id}>
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{user.name}</h5>
                      <p className="card-text">
                        <strong>Email:</strong> {user.email}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
