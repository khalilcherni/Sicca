import React, { useState, useEffect } from 'react';
import "./Star.css";

const StarRating = ({ rating, onRatingClick }) => {
  const [hoveredRating, setHoveredRating] = useState(null);
  const [clickedRating, setClickedRating] = useState(null);

  useEffect(() => {
    // Update clickedRating only if it's not set (prevent overriding user's click)
    if (clickedRating === null) {
      setClickedRating(rating);
    }
  }, [rating]);

  const handleMouseOver = (hoveredStar) => {
    if (clickedRating === null) {
      setHoveredRating(hoveredStar);
    }
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  const handleRatingClick = (clickedStar) => {
    setClickedRating(clickedStar);
    onRatingClick(clickedStar);
  };

  const stars = [];
  for (let i = 0; i <= 4; i++) {
    const className = i <= (hoveredRating || clickedRating || rating || 0) ? 'star-filled' : 'star-empty';
    stars.push(
      <span
        key={i}
        className={className}
        onMouseOver={() => handleMouseOver(i)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleRatingClick(i)}
      >
        &#9733;
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
