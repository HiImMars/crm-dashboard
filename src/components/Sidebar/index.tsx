import { SIDEBAR_ITEMS } from "./constants";
import { SidebarItem } from "./SidebarItem";
import css from "./Sidebar.module.css";
import logo from "../../assets/images/logo.png";
import { Avatar } from "./Avatar";
import { FC } from "react";

interface Props {
  setIsOpen?: (isOpen: boolean) => void;
}

export const Sidebar: FC<Props> = ({ setIsOpen }) => (
  <aside className={css.sidebarWrapper}>
    <div className={css.sidebarLogo_wrapper}>
      <img src={logo} alt="logo" className={css.sidebarLogo} />

      <ul className={css.sidebarList}>
        {SIDEBAR_ITEMS.map((item) => (
          <SidebarItem key={item.id} {...item} setIsOpen={setIsOpen} />
        ))}
      </ul>
    </div>
    <Avatar />
  </aside>
);
