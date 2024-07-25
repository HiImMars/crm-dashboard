import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Sidebar } from "../Sidebar";
import css from "./Layout.module.css";
import { BurgerButton } from "../BurgerButton";
import { MobileSidebar } from "../Sidebar/MobileSidebar";

const Layout = () => {
  const [isOpenSidebarMenu, setIsOpenSidebarMenu] = useState(false);

  const isMobileScreen = useMediaQuery({
    maxWidth: "767px",
  });

  return (
    <main className={css.layout}>
      {isMobileScreen ? (
        <>
          <div className={css.header}>
            <BurgerButton setIsOpen={setIsOpenSidebarMenu} />
          </div>
          <MobileSidebar
            isOpen={isOpenSidebarMenu}
            setIsOpen={setIsOpenSidebarMenu}
          />
        </>
      ) : (
        <Sidebar />
      )}

      <div className={css.outletWrapper}>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
