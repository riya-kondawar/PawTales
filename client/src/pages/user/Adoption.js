import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from './../../components/Layout/UserMenu';

const Adoption = () => {
  return (
    <Layout title={"Dashboard - Add new Pet for Adoption"}>
    <div className="dashboard">
      <div className="row p-5 m-auto d-flex align-items-start justify-content-start">
        <div className="col-md-3">
          <UserMenu />
        </div>
        <div className="col-md-9">
          <h1>Pets Adopted</h1>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Adoption
