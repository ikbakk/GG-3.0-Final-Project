import CustomAvatar from "../Avatar";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between bg-secondary px-5 py-2">
      <NavItems />
      <CustomAvatar src="" fallback="U" />
    </div>
  );
};

export default Navbar;
