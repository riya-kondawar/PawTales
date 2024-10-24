import React, { useState, useEffect } from "react";
import AdminMenu from "../components/Layout/AdminMenu";
import Layout from "../components/Layout/Layout";
import React from "react"
import axios from 'axios'
import toast from 'react-hot-toast'

const Products = () =>{
    const[Products,setProducts] = useState([])

    const getAllProducts = async () => {
        try{
            const{data} = await axios.get("/api/v1/product/get-product");
            setProducts(data.Products);
        } catch(error){
            console.log(error);
            toast.error("something went wrong");
        }
    };

    useEffect(() =>{
        getAllProducts();

    },[]);

    return(
        <Layout>
            <div className= "row"></div>
            <div className= "col-md-3">
                <AdminMenu/>
            </div>
            <div className="col-md-9">
                <h1 className="text-center">Cats and Dogs</h1>
                {product?.map(p =>{
                     <div className="card" key={p.id}>
                     <img src= {p.photo} />
                     <div class="card-details">
                        <p><strong>Name:</strong> {p.name}</p>
                        <p><strong>City:</strong> {p.location}</p>
                     </div>
                 </div>
                })}
            </div>
            
        </Layout>
    );
};

export default Products;
