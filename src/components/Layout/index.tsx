import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <main className={css.layout}>
      <Sidebar />
      <div className={css.outletWrapper}>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
