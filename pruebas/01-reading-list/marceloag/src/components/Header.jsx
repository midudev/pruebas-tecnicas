function Header() {
  return (
    <header className="py-8 flex flex-row items-center justify-center">
      <img src="/bookworm.svg" alt="BookWorm Worm" width="60" />
      <h1 className="text-slate-600 font-thin text-6xl">
        book<b className=" text-slate-900 font-medium">worm</b>
      </h1>
    </header>
  );
}

export default Header;
