import CustomAvatar from "./Avatar";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between px-5 py-2">
      <NavItems />
      <CustomAvatar src="" />
    </div>
  );
};

export default Navbar;
