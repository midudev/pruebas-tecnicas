export const GenreOptions = ({ uniqueGenres }) => {
  return (
    <>
      <option value="">All Genres</option>
      {[...uniqueGenres].map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </>
  );
};
