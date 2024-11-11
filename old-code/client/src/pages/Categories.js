import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout"; // Assuming you're using Layout component for consistency

const Categories = () => {
  // Static list of pets with details
  const pets = [
    {
      id: 0,
      name: "Shadow",
      category: "Cats",
      gender: "Male",
      intakeDate: "06-17-2024",
      description: "He likes to eat ice-cream.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8uiLjHakqI97Ugn0p7vnnPUnuUMFVlP93g&s",
    },
    {
      id: 1,
      name: "Tony",
      category: "Dogs",
      gender: "Male",
      intakeDate: "02-07-2024",
      description: "He's playful and energetic.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg",
    },
    {
      id: 2,
      name: "Milo",
      category: "Cats",
      gender: "Female",
      intakeDate: "05-06-2024",
      description: "She's calm and loves to cuddle.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/04/20/17/18/cat-3336579_640.jpg",
    },
    {
      id: 3,
      name: "Charlie",
      category: "Dog",
      gender: "Male",
      intakeDate: "12-08-2024",
      description: "Friendly and loves to be around people.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxgymgh5Ai1X9xv659iTCCULE3bfkp6YKDg&s",
    },
    {
      id: 4,
      name: "Bella",
      category: "Cat",
      gender: "Female",
      intakeDate: "15-09-2024",
      description:
        "Curious and loves to explore. A perfect companion for any home.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbUy-9zaKU3Sv-2Ct41H2iwBpJZa6AdNdyg&s",
    },
    {
      id: 5,
      name: "Max",
      category: "Dog",
      gender: "Male",
      intakeDate: "22-09-2024",
      description: "Energetic and playful, always ready for an adventure.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGqzndpBMV6KMRJfx52yNq4ftUCwySxL_MQ&s",
    },
  ];

  return (
    <Layout title={"Adopt a Pet"}>
      <div className="category">
        <div className="container mt-5 text-center">
          <h1 className="text-center">Meet Our Pets</h1>
          <div className="row">
            {pets.map((pet) => (
              <div className="col-md-4 mt-3" key={pet.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={pet.imageUrl}
                    className="card-img-top"
                    alt={pet.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pet.name}</h5>
                    <p className="card-text">
                      <strong>Category:</strong> {pet.category}
                    </p>
                    <p className="card-text">
                      <strong>Gender:</strong> {pet.gender}
                    </p>
                    <p className="card-text">
                      <strong>Intake Date:</strong> {pet.intakeDate}
                    </p>
                    <p className="card-text">{pet.description}</p>
                    {/* <Link to={`/adopt/${pet.id}`} className="btn btn-primary">
                    Adopt {pet.name}
                  </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to={`/products`} className="btn btn-primary m-5 p-3">
            Show More Pets
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Checkbox } from "antd";
// import { useCart } from "../context/cart";
// import toast from "react-hot-toast";
// import Layout from "../components/Layout/Layout";

// const Categories = () => {
//   const navigate = useNavigate();
//   const [cart, setCart] = useCart();
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]); // Initialize with an empty array
//   const [checked, setChecked] = useState([]);
//   const [radio, setRadio] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   // Fetch all categories
//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get("/api/v1/category/get-category");
//       if (data?.success) {
//         setCategories(data?.category || []); // Fallback to an empty array
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Fetch all products
//   const getAllProducts = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
//       setLoading(false);
//       setProducts(data?.products || []); // Fallback to an empty array
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   // Fetch total product count
//   const getTotal = async () => {
//     try {
//       const { data } = await axios.get("/api/v1/product/product-count");
//       setTotal(data?.total || 0); // Fallback to 0
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Load more products on page change
//   const loadMore = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
//       setLoading(false);
//       setProducts((prevProducts) => [
//         ...prevProducts,
//         ...(data?.products || []),
//       ]); // Fallback to an empty array
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   // Filter by category
//   const handleFilter = (value, id) => {
//     let all = [...checked];
//     if (value) {
//       all.push(id);
//     } else {
//       all = all.filter((c) => c !== id);
//     }
//     setChecked(all);
//   };

//   // Get filtered products
//   const filterProduct = async () => {
//     try {
//       const { data } = await axios.post("/api/v1/product/product-filters", {
//         checked,
//         radio,
//       });
//       setProducts(data?.products || []); // Fallback to an empty array
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllCategory();
//     getTotal();
//   }, []);

//   useEffect(() => {
//     if (!checked.length || !radio.length) getAllProducts();
//   }, [checked.length, radio.length]);

//   useEffect(() => {
//     if (checked.length || radio.length) filterProduct();
//   }, [checked, radio]);

//   useEffect(() => {
//     if (page === 1) return;
//     loadMore();
//   }, [page]);

//   return (
//     <Layout title={"All Categories"}>
//       <div className="category">
//         <div className="container">

//           <div className="row">
//             {/* Check if categories array is not empty */}
//             {categories.length > 0 ? (
//               categories.map((c) => (
//                 <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
//                   <div className="card" style={{ width: "18rem" }}>
//                     <img
//                       src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg"
//                       className="card-img-top"
//                       alt="..."
//                     />
//                     <div className="card-body">
//                       <h4>Tony</h4>
//                       <p>Category: Dog</p>
//                       <p>Gender: M</p>
//                       <p>IntakeDate: 02-07-2024</p>
//                       <p></p>
//                       <p className="card-text">He's playful</p>
//                     </div>
//                   </div>

//                   <Link to={`/category/${c.slug}`} className="btn btn-primary">
//                     {c.name}
//                   </Link>
//                 </div>
//               ))
//             )
//             : (
//               // <p>No categories found</p>
//               <p>show more Pets</p>
//             )}
//           </div>
//           <div className="container-fluid row mt-3">
//             <div className="col-md-2">
//               <h4 className="text-center">Filter By Category</h4>
//               <div className="d-flex flex-column">
//                 {categories.length > 0 &&
//                   categories.map((c) => (
//                     <Checkbox
//                       key={c._id}
//                       onChange={(e) => handleFilter(e.target.checked, c._id)}
//                     >
//                       {c.name}
//                     </Checkbox>
//                   ))}
//               </div>
//               <button
//                 className="btn btn-danger"
//                 onClick={() => window.location.reload()}
//               >
//                 RESET FILTERS
//               </button>
//             </div>
//             <div className="col-md-9 offset-1">
//               <h1 className="text-center">All Products</h1>
//               <div className="d-flex flex-wrap">
//                 {products.length > 0 ? (
//                   products.map((p) => (
//                     <div
//                       className="card m-2"
//                       style={{ width: "18rem" }}
//                       key={p._id}
//                     >
//                       <img
//                         src={`/api/v1/product/product-photo/${p._id}`}
//                         className="card-img-top"
//                         alt={p.name}
//                       />
//                       <div className="card-body">
//                         <h5 className="card-title">{p.name}</h5>
//                         <p className="card-text">
//                           {p.description.substring(0, 30)}...
//                         </p>
//                         <button
//                           className="btn btn-primary ms-1"
//                           onClick={() => navigate(`/product/${p.slug}`)}
//                         >
//                           More Details
//                         </button>
//                         <button
//                           className="btn btn-secondary ms-1"
//                           onClick={() => {
//                             setCart([...cart, p]);
//                             localStorage.setItem(
//                               "cart",
//                               JSON.stringify([...cart, p])
//                             );
//                             toast.success("Item Added to cart");
//                           }}
//                         >
//                           ADD TO CART
//                         </button>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No products found</p>
//                 )}
//               </div>
//               <div className="m-2 p-3">
//                 {products.length < total && (
//                   <button
//                     className="btn btn-warning"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setPage(page + 1);
//                     }}
//                   >
//                     {loading ? "Loading ..." : "Load more"}
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Categories;
