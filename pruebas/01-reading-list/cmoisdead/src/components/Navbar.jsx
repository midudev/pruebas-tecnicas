import { useSpring, animated } from "@react-spring/web";

export const Navbar = () => {
  const springs = useSpring({
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  return (
    <header>
      <nav className="container mx-auto flex w-full justify-between rounded-b-lg bg-neutral-900/75 px-3 py-2">
        <animated.a
          className="classic grow-0 font-bold text-rose-700"
          href="/"
          style={springs}
        >
          Library & Books
        </animated.a>
        <ul className="flex grow-0 gap-4">
          <a href="#books">Books</a>
          <a href="#authors">Authors</a>
        </ul>
      </nav>
    </header>
  );
};
