import { useEffect, useState } from "react";

export const AuthorCard = ({ name }) => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    // NOTE: suppose to fetch author image
  }, []);

  return (
    <div>
      <p className="text-neutral-500">
        {name}
      </p>
    </div>
  );
};
