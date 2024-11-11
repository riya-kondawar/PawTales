import React, { useEffect, useState } from "react";
import PetsViewer from "./PetsViewer";
import { useAuthContext } from "../../hooks/UseAuthContext";

const Pets = () => {
  const [filter, setFilter] = useState("all");
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchRequests = async () => {
      if (!user || !user.token) {
        setError('User is not authenticated');
        setLoading(false);
        return;
      }
      try {
        const response = await fetch('http://localhost:4000/approvedPets', {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch pets data');
        }
        const data = await response.json();
        console.log(data);  // Log the data to inspect its structure

        // Check if the data is an array and set petsData accordingly
        if (Array.isArray(data)) {
          setPetsData(data);
        } else if (data.pets && Array.isArray(data.pets)) {
          setPetsData(data.pets);  // Adjust this if your API returns { pets: [...] }
        } else {
          setError("Data format is incorrect or empty.");
          setPetsData([]);
        }

        setError(null); 
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching the data');
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [user]);

  // Ensure petsData is an array before using .filter()
  const filteredPets = Array.isArray(petsData) ? petsData.filter((pet) => {
    if (filter === "all") {
      return true;
    }
    return pet.type === filter;
  }) : [];

  return (
    <>
      <div className="filter-selection">
        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="all">All Pets</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
          <option value="Rabbit">Rabbits</option>
          <option value="Bird">Birds</option>
          <option value="Fish">Fish</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="pet-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : filteredPets.length > 0 ? (
          filteredPets.map((petDetail, index) => (
            <PetsViewer pet={petDetail} key={index} />
          ))
        ) : (
          <p className="oops-msg">Oops!... No pets available</p>
        )}
      </div>
    </>
  );
};

export default Pets;
