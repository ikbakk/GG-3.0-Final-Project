import CustomAvatar from "../Avatar";
import Logo from "./Logo";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between bg-accent px-5 py-2">
      <div className="flex items-center gap-2">
        <Logo />
        <NavItems />
      </div>
      <CustomAvatar src="" fallback="U" />
    </div>
  );
};

export default Navbar;
