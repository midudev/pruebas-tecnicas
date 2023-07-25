import AsideMenu from "./components/AsideMenu";
import Catalogue from "./components/Catalogue";
import MyList from "./components/MyList";

const App = () => {
  return (
    <main className="bg-stone-50">
      <div className="min-h-screen flex">
        <AsideMenu />
        <Catalogue />
        <MyList />
      </div>
    </main>
  );
};

export default App;
