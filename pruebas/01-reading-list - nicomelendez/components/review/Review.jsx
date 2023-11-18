import { useState } from "react";
import { renderRatingIcons } from "../utils/renderRatingIcons";

export default function Review({ user, description, rating }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncatedDescription = description.slice(0, 250);
  const displayDescription = showFullDescription
    ? description
    : truncatedDescription + (description.length > 250 ? "..." : "");
  return (
    <article className="bg-white p-5 md:p-10 rounded-lg flex flex-col justify-center space-y-2">
      <div className="flex items-center">
        <div className="space-y-1 font-medium">
          <p className="text-xl font-bold">{user}</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex gap-0.5 text-amber-500">
          {renderRatingIcons(rating, "w-4 h-4")}
        </div>
      </div>
      <p className="text-gray-500 pb-2 ">{displayDescription}</p>

      {description.length > 250 && (
        <button
          onClick={handleReadMoreClick}
          className="block text-sm font-medium text-left text-blue-600 hover:underline"
        >
          {showFullDescription ? "Leer menos" : "Leer más"}
        </button>
      )}
    </article>
  );
}
