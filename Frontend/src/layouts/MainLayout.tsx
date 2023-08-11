import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen w-full flex-col overflow-hidden">
        <Navbar />
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
