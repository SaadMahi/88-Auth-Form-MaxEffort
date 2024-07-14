import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="h-screen bg-[#F0F3F6]">
      <div className="color-line"></div>

      <Outlet />
    </main>
  );
};

export default Layout;
