export default function ErrorMessage({ error }) {
  return (
    <div className="w-full h-[calc(100vh-192px)] flex items-center justify-center">
      <div className="relative sm:w-2/5 sm:max-w-[500px] text-balance text-center">
        <span className="relative text-2xl z-20 font-semibold">
          {error.message}
        </span>
        <img
          src={error.asset}
          alt="Gatico triste ;("
          className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 z-10 opacity-25 scale-105"
        />
      </div>
    </div>
  );
}
