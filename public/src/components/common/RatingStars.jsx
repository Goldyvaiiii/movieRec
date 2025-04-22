import { useState } from 'react';

const RatingStars = ({ initialRating = 0, maxRating = 5, onRatingChange, readOnly = false }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingClick = (newRating) => {
    if (readOnly) return;
    
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const handleMouseEnter = (index) => {
    if (readOnly) return;
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverRating(0);
  };

  return (
    <div className="rating">
      <div className="rating-stars">
        {[...Array(maxRating)].map((_, index) => {
          const starValue = index + 1;
          const isActive = starValue <= (hoverRating || rating);
          
          return (
            <span
              key={index}
              className={`rating-star ${isActive ? 'active' : ''}`}
              onClick={() => handleRatingClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
              role={readOnly ? 'presentation' : 'button'}
              tabIndex={readOnly ? -1 : 0}
            >
              ★
            </span>
          );
        })}
      </div>
      {rating > 0 && <span className="rating-value">{rating}.0</span>}
    </div>
  );
};

export default RatingStars;