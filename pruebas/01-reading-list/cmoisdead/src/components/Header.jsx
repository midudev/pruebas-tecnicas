export const Header = () => {
  return (
    <div className="min-h-[60vh] rounded-lg my-3 relative">
      <img
        src="https://printawallpaper.com/wp-content/uploads/2020/07/old_library_detail.jpg"
        alt="library image"
        className="rounded-lg h-[60vh] w-full object-cover"
      />
      <div className="absolute top-0 bottom-0 right-0 left-0 backdrop-brightness-50 w-full flex flex-col items-center justify-center content-center rounded-lg">
        <h1 className="classic text-3xl md:text-5xl lg:text-7xl text-rose-700 mb-5">Library & Books.</h1>
        <p className="text-neutral-500 text-sm">
          Library and books, classics and news, etc...
        </p>
      </div>
    </div>
  );
};
