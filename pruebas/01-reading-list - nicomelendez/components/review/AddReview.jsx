import React, { useState } from "react";
import Review from "./Review";
import { addReview } from "../../context/helpers/services/review/addReview";
import { toastSucess } from "../../context/helpers/toast/sucess";
import Swal from "sweetalert2";
import useLibrary from "../../hooks/useLibrary";

export default function AddReview({ ISBN }) {
  const { addReviewToBook, existReviewUser, getReviewUser, getUserAuth } =
    useLibrary();

  const [rating, setRating] = useState(1);
  const handleRatingChange = (e) => {
    const newRating = parseInt(e.target.value);
    setRating(newRating);
  };

  const handleReview = async (e) => {
    e.preventDefault();
    const fields = Object.fromEntries(new window.FormData(e.target));
    const { rating, description } = fields;

    const id = `${ISBN}-${getUserAuth()}`;
    const { respuesta, review } = await addReview(
      id,
      getUserAuth(),
      rating,
      description,
      ISBN
    );

    if (respuesta.status === "error") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: respuesta.message,
      });
      return;
    }

    toastSucess("✅ Review creada!");

    await addReviewToBook(ISBN, review);
  };

  if (!existReviewUser(ISBN)) {
    return (
      <div className="rounded-lg lg:col-span-3 pt-10">
        <h2 className="pb-5 text-xl md:text-2xl font-extrabold">
          Deja tu opinión
        </h2>
        <form onSubmit={handleReview} className="space-y-4">
          <div className="flex gap-x-5">
            <label htmlFor="rating">Rating:</label>
            <input
              type="range"
              name="rating"
              min="1"
              max="5"
              className="cursor-pointer"
              value={rating}
              onChange={handleRatingChange}
            />
            <p>{rating}</p>
          </div>
          <div>
            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Descripción"
              rows="8"
              name="description"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    const review = getReviewUser(ISBN);

    if (review != null) {
      const { user, description, rating } = review;

      return <Review user={user} description={description} rating={rating} />;
    }
  }
}
