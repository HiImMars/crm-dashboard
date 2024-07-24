import { SIDEBAR_ITEMS } from "./constants";
import { SidebarItem } from "./SidebarItem";
import css from "./Sidebar.module.css";
import logo from "../../assets/images/logo.png";
import { Avatar } from "./Avatar";

export const Sidebar = () => {
  return (
    <aside className={css.sidebarWrapper}>
      <div className={css.sidebarLogo_wrapper}>
        <img src={logo} alt="logo" />
        <ul className={css.sidebarList}>
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
      <Avatar />
    </aside>
  );
};
