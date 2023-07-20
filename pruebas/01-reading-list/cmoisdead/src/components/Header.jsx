export const Header = () => {
  return (
    <div className="relative my-3 min-h-[60vh] rounded-lg">
      <img
        src="https://printawallpaper.com/wp-content/uploads/2020/07/old_library_detail.jpg"
        alt="library image"
        className="h-[60vh] w-full rounded-lg object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 flex w-full flex-col content-center items-center justify-center rounded-lg backdrop-brightness-50">
        <h1 className="classic mb-5 text-3xl text-rose-700 md:text-5xl lg:text-7xl">
          Library & Books.
        </h1>
        <p className="text-sm text-neutral-500">
          Library and books, classics and news, etc...
        </p>
      </div>
    </div>
  );
};
