import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import "./Pets.css"; // Assuming you have your styles here

const Pets = () => {
  const [favorites, setFavorites] = useState([]);
  const [additionalPets, setAdditionalPets] = useState([]);

  const addToFavorites = (petName) => {
    if (!favorites.includes(petName)) {
      setFavorites([...favorites, petName]);
      alert(`${petName} has been added to your favorites!`);
    } else {
      alert(`${petName} is already in your favorites!`);
    }
  };

  const fetchAllPets = () => {
    fetch('/getAllPets')
      .then(response => response.json())
      .then(data => {
        setAdditionalPets(data.pets);
      })
      .catch(error => console.error('Error fetching additional pets:', error));
  };

  const handleViewAll = () => {
    // Redirect or load more content dynamically
    alert('Redirecting to more articles...');
  };

  return (
    <Layout title={"Pets"}>
      <div className="container">
        <header>
          <div className="logo">Find a Pet</div>
          <nav>
            <ul>
              <li className="dropdown">
                Find a Pet
                <ul className="dropdown-menu">
                  <li><a href="#">Dog</a></li>
                  <li><a href="#">Cat</a></li>
                </ul>
              </li>
              <li><a href="#">Sign In</a></li>
            </ul>
          </nav>
        </header>

        <h1>Dogs and Cats</h1>

        <section className="intro">
          <p>
            Welcome to our comprehensive guide for pet lovers! Whether you're a dog or cat enthusiast, 
            we provide all the tips and resources you need to keep your pets happy and healthy. 
            Explore articles on small pups, large breeds, playful kittens, or independent adult cats.
          </p>
        </section>

        <section className="search">
          <input type="text" placeholder="Search by location" id="locationSearch" />
          <input type="text" placeholder="Search by breed" id="breedSearch" />
          <button onClick={() => alert('Search functionality to be implemented')}>Search</button>
        </section>

        <section id="pet-cards" className="pet-cards">
          {/* Static Cards for demonstration */}
          <div className="card">
            <img src="https://goofytails.com/cdn/shop/files/labrador-retriever_1000x.jpg?v=1701077639" alt="Dog 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 001</p>
              <p><strong>Animal Name:</strong> John</p>
              <p><strong>Animal Type:</strong> Dog</p>
              <p><strong>Primary Color:</strong> Yellow</p>
              <p><strong>Secondary Color:</strong> None</p>
              <p><strong>Sex:</strong> Male</p>
              <p><strong>DOB:</strong> 01/01/2022</p>
            </div>
          </div>
          
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
            <div className="card-details">
              <p><strong>Animal ID:</strong> 002</p>
              <p><strong>Animal Name:</strong> Pinky</p>
              <p><strong>Animal Type:</strong> Cat</p>
              <p><strong>Primary Color:</strong> White</p>
              <p><strong>Secondary Color:</strong> Black</p>
              <p><strong>Sex:</strong> Female</p>
              <p><strong>DOB:</strong> 06/15/2021</p>
            </div>
          </div>
        </section>

        <button id="meet-all-btn" onClick={fetchAllPets}>Meet All Pets</button>

        {/* Dynamically loaded pets */}
        <section id="additional-pets" className="additional-pets">
          {additionalPets.map((pet, index) => (
            <div className="card" key={index}>
              <img src={pet.image} alt={pet.name} />
              <div className="card-details">
                <p><strong>Animal ID:</strong> {pet.id}</p>
                <p><strong>Animal Name:</strong> {pet.name}</p>
                <p><strong>Animal Type:</strong> {pet.type}</p>
                <p><strong>Primary Color:</strong> {pet.primaryColor}</p>
                <p><strong>Secondary Color:</strong> {pet.secondaryColor}</p>
                <p><strong>Sex:</strong> {pet.sex}</p>
                <p><strong>DOB:</strong> {pet.dob}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Health & Wellness Articles Section */}
        <section id="articles-section" className="articles-section">
          <div className="section-header">
            <h2>Pet Health &amp; Wellness</h2>
            <button className="view-all-btn" onClick={handleViewAll}>View All Health Articles</button>
          </div>
          <div className="article-container">
            <div className="article-card">
              <h3>Top 5 Tips for Keeping Your Dog Healthy</h3>
              <p>Learn essential tips to ensure your dog stays healthy and happy.</p>
              <button className="read-more-btn">Read More</button>
            </div>
            <div className="article-card">
              <h3>Essential Vaccinations for Your Pet</h3>
              <p>Discover the must-have vaccinations for your furry friend.</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Pets;
