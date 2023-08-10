import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const NavItems = () => {
  const navigate = useNavigate();

  const navItems = [
    {
      id: "home",
      title: "Home",
      href: "/",
    },
    {
      id: "search",
      title: "Search",
      href: "/search",
    },
  ];

  const handleClick = (href: string): void => {
    navigate(href);
  };
  return (
    <ul className="flex items-center gap-4">
      {navItems.map(({ id, title, href }) => (
        <li key={id}>
          <Button
            className="rounded-full"
            variant="ghost"
            onClick={() => handleClick(href)}
          >
            {title}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
