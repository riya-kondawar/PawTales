import React from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout'

const CreateCategory = () => {
  return (
    <Layout title={"Dashboard - Add new Pet"}>
      <div className='dashboard'>
    <div className="row p-5 m-auto d-flex align-items-start justify-content-start">
      <div className="col-md-3">
        <AdminMenu />
      </div>
      <div className="col-md-3">
        <h1>Add Pet for Adoption</h1>
      </div>
    </div>
    </div>
  </Layout>
  )
}

export default CreateCategory
