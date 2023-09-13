import { useState } from "react";
import StarRatings from 'react-star-ratings'
import "./star.css"
function StarItem({rating}){
 const [currentRating, setCurrentRating] = useState(rating);

  const handleClick = (newRating) => {
    setCurrentRating(newRating);
  };

  return (
    <div className="rating">
        <StarRatings
          rating={currentRating}
          starRatedColor="yellow"
          changeRating={handleClick}
          numberOfStars={5}
          name='rating'
        />
    </div>
  );
}


export default StarItem