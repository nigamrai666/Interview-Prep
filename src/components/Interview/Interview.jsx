import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader.jsx';
import './interviewCss.css';

const Interview = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbzI_rB4uIWVOIlrb0nBbY7yGEj2jn0hIPDkob1mbaKISnRsvNpRDkzetvF7Ui57veNU/exec')
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleClick = (card) => {
    navigate(`/interview-prep/${card.id}`, { state: { card } });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <h1 className="title">Courses</h1>
          <div className="cards">
            {cards.map((card, index) => {
              console.log("Image URL:", card.image); // Add this line for debugging
              return (
                <div key={index} className="card" onClick={() => handleClick(card)}>
                  <div className="card-body">
                    {card.image ? (
                      <img src={card.image} alt={`${card.name} image`} className="card-image" />
                    ) : (
                      <p>No image available</p>
                    )}

                    {/* <h3>{card.name}</h3> */}
                    <p>Click to view </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      )}
    </>
  );
};

export default Interview;
