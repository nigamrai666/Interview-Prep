import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './Practice.css';

const Topic = () => {
  const { state } = useLocation(); // Access the card data passed via state
  const navigate = useNavigate();
  const { cardId } = useParams(); // Access the card ID from URL params

  const card = state?.card || {}; // Use state if available, otherwise handle fetching by cardId

  const handleBack = () => {
    navigate('/practice');
  };

  // Format the info by separating questions with line breaks
  const formatInfo = (info) => {
    if (!info) return null;

    const sentences = info.split('<br>').map(sentence => sentence.trim()); // Split based on <br>

    return sentences.map((sentence, index) => (
      <React.Fragment key={index}>
        <strong>Q. {sentence}</strong>  {/* Display each question with Q. */}
        <br />
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="selected-card">
      <div className="card-content">
        <h2>Top Practice Questions of {card.name} (Basic to Advance)</h2><br />
        <p>{formatInfo(card.info)}</p><br />
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Topic;
