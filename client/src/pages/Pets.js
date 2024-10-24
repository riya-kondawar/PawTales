import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import "./Pets.css"; // Assuming you have your styles here

const Pets = () => {
  const [favorites, setFavorites] = useState([]);
  const [additionalPets, setAdditionalPets] = useState([]);
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");

  useEffect(() => {
    fetchAllPets();
  }, []);

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
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setAdditionalPets(data.pets);
      })
      .catch(error => {
        console.error('Error fetching additional pets:', error);
        alert('Failed to fetch pets. Please try again later.');
      });
  };

  const handleViewAll = () => {
    // Redirect or load more content dynamically
    alert('Redirecting to more articles...');
  };

  const handleSearch = () => {
    // Implement search functionality
    alert(`Searching for ${breed} in ${location}`);
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
          <input
            type="text"
            placeholder="Search by location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </section>

        <section id="pet-cards" className="pet-cards">
          {additionalPets.map(pet => (
            <div className="card" key={pet.id}>
              <img src={pet.imageUrl} alt={pet.name} />
              <div className="card-details">
                <p><strong>ID:</strong> {pet.id}</p>
                <p><strong>Name:</strong> {pet.name}</p>
                <p><strong>Breed:</strong> {pet.breed}</p>
                <p><strong>City:</strong> {pet.city}</p>
                <button onClick={() => addToFavorites(pet.name)}>Add to Favorites</button>
              </div>
            </div>
          ))}
        </section>

        <section className="article-container">
          {/* Example Article Card 1 */}
          <div className="article-card">
            <img src="https://i.pinimg.com/enabled/564x/07/b3/62/07b3621e6dfccfe11ff667f5b695f2d4.jpg" alt="Article 1" />
            <div className="card-description">
              <h3>Article Title 1</h3>
              <p><strong>Breed:</strong> Labrador<br /><strong>City:</strong> New York</p>
              <a href="https://www.youtube.com/watch?v=example1" className="video-link">Watch Video</a>
            </div>
          </div>

          {/* Example Article Card 2 */}
          <div className="article-card">
            <img src="https://example.com/image2.jpg" alt="Article 2" />
            <div className="card-description">
              <h3>Article Title 2</h3>
              <p><strong>Breed:</strong> Bulldog<br /><strong>City:</strong> Los Angeles</p>
              <a href="https://www.youtube.com/watch?v=example2" className="video-link">Watch Video</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Pets;
