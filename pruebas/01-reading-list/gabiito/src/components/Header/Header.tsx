import { Container } from "@/components";
import { ListToggle, Logo, Search } from "./components";

const Header: React.FC = () => {

  return <>
  <header className="sticky top-0 z-20">
    <nav className=" py-4 border-b top-0 bg-white">
      <Container>
        <div className="flex gap-6 md:gap-12 items-center justify-between">
          <Logo />
          <Search />
          <ListToggle />
        </div>
      </Container>
    </nav>
  </header>
  </>
}

export default Header;
