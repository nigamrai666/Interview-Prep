import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader.jsx'; // Import the reusable Loader component
import './interviewCss.css'; // Ensure the Interview-specific CSS is imported

const Interview = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch data from Google Sheets API
  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxvNuTzAEkwg55tOWTPE6zRFlUm7FMNM9MKEOxZo88jxN-xRPD3gVPPVEO9kPpR_dpT/exec')
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false on error
      });
  }, []);

  const handleClick = (card) => {
    navigate(`/interview-prep/${card.id}`, { state: { card } });
  };

  return (
    <>
      {/* Conditionally render loader or content */}
      {loading ? (
        <Loader />// Use the reusable Loader component here
      ) : (
        <div className="container">
          <h1 className="title">Courses</h1>
          <div className="cards">
            {cards.map((card, index) => (
              <div key={index} className="card" onClick={() => handleClick(card)}>
                <div className="card-body">
                  <h3>{card.name}</h3>
                  <p>Click to view details</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Interview;
