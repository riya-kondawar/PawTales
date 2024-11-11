import React, { useState, useEffect, useCallback } from 'react';
import AdoptedCards from './AdoptedCards';
import { useAuthContext } from '../../hooks/UseAuthContext';

const AdoptedHistory = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();

  const fetchAdoptedPets = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:4000/adoptedPets', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      if (!response.ok) {
        throw new Error('An error occurred while fetching adopted pets');
      }
      const data = await response.json();
      setRequests(data);
    } catch (error) {
      console.error('Error fetching adopted pets:', error);
    } finally {
      setLoading(false);
    }
  }, [user.token]);

  useEffect(() => {
    fetchAdoptedPets();
  }, [fetchAdoptedPets]); 

  return (
    <div className='pet-container'>
      {loading ? (
        <p>Loading...</p>
      ) : 
      requests.length > 0 ? (
        requests.map((request) => (
          <AdoptedCards
            key={request._id}
            pet={request}
            updateCards={fetchAdoptedPets}
            deleteBtnText="Delete History"
            approveBtn={false}
          />
        ))
      ) : (
        <p>No Adopted Pets available</p>
      )}
    </div>
  );
};

export default AdoptedHistory;
