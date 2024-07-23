import React, { FC } from "react";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";
import { ISidebarItem } from "./types";
import arrow from "../../assets/icons/arrow-right.svg";
import css from "./Sidebar.module.css";

export const SidebarItem: FC<ISidebarItem> = ({ title, link, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <li>
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
            className={cn({
              [css.icon_active]: isActive,
            })}
          />
          <span>{title}</span>
        </div>

        <img
          src={arrow}
          alt="right arrow"
          className={cn({
            [css.svg_active]: isActive,
          })}
        />
      </Link>
    </li>
  );
};
