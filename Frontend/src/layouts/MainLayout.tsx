import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
