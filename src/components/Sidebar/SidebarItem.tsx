import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import { ISidebarItem } from "./types";
import arrow from "../../assets/icons/arrow-right.svg";
import css from "./Sidebar.module.css";

interface Props extends ISidebarItem {
  setIsOpen?: (isOpen: boolean) => void;
}

export const SidebarItem = forwardRef<HTMLLIElement, Props>(
  ({ title, link, icon, setIsOpen }, ref) => {
    const location = useLocation();
    const isActive = location.pathname === link;

    const handleClick = () => {
      if (setIsOpen) {
        setIsOpen(false);
      }
    };

    return (
      <li ref={ref} onClick={handleClick}>
        <Link
          to={link}
          className={cn(css.sidebarList_link, {
            [css.sidebarList_link_active]: isActive,
          })}
        >
          <div className={css.sidebarLink_item}>
            <img
              src={icon}
              alt={title}
              className={cn(css.sidebar_icon, {
                [css.icon_active]: isActive,
              })}
            />
            <span>{title}</span>
          </div>
          <img
            src={arrow}
            alt="right arrow"
            className={cn(css.sidebar_icon, {
              [css.svg_active]: isActive,
            })}
          />
        </Link>
      </li>
    );
  }
);

export default SidebarItem;
