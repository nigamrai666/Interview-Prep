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
    if (!info) return '';

    // Split the info by commas
    const sentences = info.split('~');

    // Iterate over sentences and wrap every alternate one in <strong> for bold
    return sentences.map((sentence, index) => {
      const trimmedSentence = sentence.trim(); // Remove extra spaces

      if (index % 2 === 1) { 
        return `A. ${trimmedSentence}<br/>`; // Normal text for even indices
      } else {
        return `<strong> Q. ${trimmedSentence}</strong>`; // Bold text for odd indices
      }
    }).join('<br/>'); // Join with <br/> for line breaks
  };

  return (
    <div className="selected-card">
      <div className="card-content">
        <h2>{card.name}</h2>
        {/* Render formatted info with commas replaced by <br> and alternating bold sentences */}
        <p dangerouslySetInnerHTML={{ __html: formatInfo(card.info) }}></p><br />
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default CardDetail;
