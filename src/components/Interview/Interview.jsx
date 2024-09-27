import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './interviewCss.css';

const Interview = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  // Fetch data from Google Sheets API
  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxvNuTzAEkwg55tOWTPE6zRFlUm7FMNM9MKEOxZo88jxN-xRPD3gVPPVEO9kPpR_dpT/exec')
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleClick = (card) => {
    navigate(`/interview-prep/${card.id}`, { state: { card } });
  };

  return (
    <>
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
    </>
  );
};

export default Interview;
