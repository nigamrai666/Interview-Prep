import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './interviewCss.css';

const CardDetail = () => {
  const { state } = useLocation(); // Access the card data passed via state
  const navigate = useNavigate();
  const { cardId } = useParams(); // Access the card ID from URL params

  const card = state?.card || {}; // Use state if available, otherwise handle fetching by cardId

  const handleBack = () => {
    navigate('/interview-prep');
  };

  // Format the info by alternating bold and normal sentences, and inserting line breaks
  const formatInfo = (info) => {
    if (!info) return null;

    const sentences = info.split('~').map(sentence => sentence.trim());

    return sentences.map((sentence, index) => {
      if (index % 2 === 0) {
        // Return question with a line break
        return (
          <React.Fragment key={index}>
            <strong>Q. {sentence}</strong>
            <br />
          </React.Fragment>
        );
      } else {
        // Return answer with a line break
        return (
          <React.Fragment key={index}>
            <strong>Answer:</strong> {sentence}
            <br />
            <br />
          </React.Fragment>
        );
      }
    });
  };


  return (
    <div className="selected-card">
      <div className="card-content">
        <h2>Top Interview Questions of {card.name}</h2><br />
        <p>{formatInfo(card.info)}</p><br />
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default CardDetail;