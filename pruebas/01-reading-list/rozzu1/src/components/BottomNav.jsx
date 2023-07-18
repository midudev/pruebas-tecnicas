import { useMemo } from "react";
import { getLinks } from "../helpers";
import { NavLink } from "./NavLink";
import { Link } from "wouter";

export const BottomNav = () => {
  const links = useMemo(() => getLinks(), []);

  return (
    <nav className="btm-nav bg-transparent">
      {links.map(({ title, href, ...props }) => (
        <Link key={title} href={href}>
          <a>
            <NavLink key={title} title={title} href={href} {...props} />
          </a>
        </Link>
      ))}
    </nav>
  );
};
