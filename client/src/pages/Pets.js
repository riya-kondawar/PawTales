import React from "react";
import {} from "./Pets.css";
import Layout from "../components/Layout/Layout";


let favorites = [];

function addToFavorites(petName) {
    if (!favorites.includes(petName)) {
        favorites.push(petName);
        alert("${petName} has been added to your favorites!");
    } else {
        alert("${petName} is already in your favorites!");
    }
}

document.getElementById('meet-all-btn').addEventListener('click', function() {
    fetch('/getAllPets')
        .then(response => response.json())
        .then(data => {
            const additionalPetsSection = document.getElementById('additional-pets');
            additionalPetsSection.style.display = 'grid';
            data.pets.forEach(pet => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${pet.image}" alt="${pet.name}">
                    <h3>${pet.name}</h3>
                    <span class="heart" onclick="addToFavorites('${pet.name}')">&hearts;</span>
                    <button class="meet-btn">Meet ${pet.name}</button>
                `;
                additionalPetsSection.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching additional pets:', error));
});

document.querySelectorAll('.view-all-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Here you can redirect to another page with more articles
        // or load more content dynamically (e.g., via AJAX)
        alert('Redirecting to more articles...');
    });
});

const Pets = () => {
    return (
      <Layout title={"Pets"}>
        <div>
      
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
    <p>Welcome to our comprehensive guide for pet lovers! Whether you're a dog or cat enthusiast, we provide all the tips and resources you need to keep your pets happy and healthy. From expert advice on training and behavior to health care and adoption guidance, we cover every stage of your furry friend’s life. Explore articles on small pups, large breeds, playful kittens, or independent adult cats—everything you need to become the best pet parent is right here!</p>
  </section>
  <section className="search">
    <input type="text" placeholder="Search by location" id="locationSearch" />
    <input type="text" placeholder="Search by breed" id="breedSearch" />
    <button onclick="searchPets()">Search</button>
  </section>
  <section id="pet-cards" className="pet-cards">
    {/* Cards for dogs and cats */}
    <div className="card">
      <img src="https://goofytails.com/cdn/shop/files/labrador-retriever_1000x.jpg?v=1701077639" alt="Dog 1" />
      <h3>John</h3>
      <span className="heart" onclick="addToFavorites('John')">♥</span>
      <button className="meet-btn">Meet John</button>
    </div>
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s" alt="Cat 1" />
      <h3>Pinky</h3>
      <span className="heart" onclick="addToFavorites('Pinky')">♥</span>
      <button className="meet-btn">Meet Pinky</button>
    </div>
    <div className="card">
      <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="Dog 2" />
      <h3>Buddy</h3>
      <span className="heart" onclick="addToFavorites('Buddy')">♥</span>
      <button className="meet-btn">Meet Buddy</button>
    </div>
    {/* More pet cards */}
    {/* The last card with 'Meet them all' */}
    <div className="card">
      <h4>20 more pets available on Pawtales</h4>
      <button className="meet-btn">Meet them all</button>
    </div>
  </section>
  <section id="articles-section" className="articles-section">
    {/* Pet Health & Wellness Section */}
    <div className="section-header">
      <h2>Pet Health &amp; Wellness</h2>
      <button className="view-all-btn">View All Health Articles</button>
    </div>
    <div className="article-container">
      <div className="article-card">
        <h3>Top 5 Tips for Keeping Your Dog Healthy</h3>
        <p>Learn essential tips to ensure your dog stays healthy and happy, from regular vet visits to proper nutrition.</p>
        <button className="read-more-btn">Read More</button>
      </div>
      <div className="article-card">
        <h3>Essential Vaccinations for Your Pet</h3>
        <p>Discover the must-have vaccinations to keep your furry friend safe from diseases and infections.</p>
        <button className="read-more-btn">Read More</button>
      </div>
      <div className="article-card">
        <h3>Balanced Diet for Pets</h3>
        <p>Explore how a balanced diet can improve the overall health and longevity of your pet.</p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
    {/* Pet Training Section */}
    <div className="section-header">
      <h2>Pet Training</h2>
      <button className="view-all-btn">View All Training Articles</button>
    </div>
    <div className="article-container">
      <div className="article-card">
        <h3>Basic Obedience Training for Dogs</h3>
        <p>Get started with basic training techniques to teach your dog essential commands and behaviors.</p>
        <button className="read-more-btn">Read More</button>
      </div>
      <div className="article-card">
        <h3>House Training Your New Puppy</h3>
        <p>Learn effective methods to house train your puppy and prevent accidents inside the house.</p>
        <button className="read-more-btn">Read More</button>
      </div>
      <div className="article-card">
        <h3>Solving Common Behavior Problems</h3>
        <p>Find out how to handle common behavior issues like excessive barking and leash pulling.</p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
    {/* Other Information Section */}
    <div className="section-header">
      <h2>Other Information</h2>
      <button className="view-all-btn">View All Information Articles</button>
    </div>
    <div className="article-container">
      <div className="article-card">
        <h3>Pet Adoption: What You Need to Know</h3>
        <p>Considering pet adoption? Here's everything you need to know before bringing a new pet home.</p>
        <button className="read-more-btn">Read More</button>
      </div>
      <div className="article-card">
        <h3>Preparing Your Home for a New Pet</h3>
        <p>Learn how to pet-proof your home and create a comfortable environment for your new furry friend.</p>
        <button className="read-more-btn">Read More</button>
      </div>
      <div className="article-card">
        <h3>Traveling with Pets: Tips for a Safe Journey</h3>
        <p>Find out how to make traveling with your pet stress-free, whether by car or by air.</p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  </section>
</div>
</div>
      </Layout>
    );
  };


export default Pets;