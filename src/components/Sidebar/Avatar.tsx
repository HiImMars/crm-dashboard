import React from "react";
import avatar from "../../assets/images/avatar.png";
import css from "./Sidebar.module.css";

export const Avatar = () => (
  <div className={css.avatar_wrapper}>
    <img src={avatar} alt="avatar" />
    <div className={css.avatar_desc}>
      <span className={css.avatar_name}>Evano</span>
      <p className={css.avatar_title}>Project Manager</p>
    </div>
  </div>
);
