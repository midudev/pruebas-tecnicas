export const Layout = ({ children }) => {
  return (
    <main className="container mx-auto min-h-screen">
      <nav className="">
        <ul className="flex flex-row gap-10 p-2"></ul>
      </nav>
      {children}
    </main>
  );
};

export default Layout;
