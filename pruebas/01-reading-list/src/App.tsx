import AsideMenu from "./components/AsideMenu";
import Catalogue from "./components/Catalogue";

const App = () => {
  return (
    <main className="bg-stone-50">
      <div className="flex">
        <AsideMenu />
        <Catalogue />
      </div>
    </main>
  );
};

export default App;
