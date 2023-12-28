export const Layout = ({ children }) => {
  return (
    <main className="mx-auto max-w-7xl min-h-screen">
      <nav className="">
        <ul className="flex flex-row gap-10 p-2"></ul>
      </nav>
      {children}
    </main>
  );
};

export default Layout;
