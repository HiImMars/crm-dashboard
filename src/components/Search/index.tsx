// import css from "./Search.module.css";

// export const Search = () => {
//   return <input className={css.search_input} placeholder="Search" />;
// };

import css from "./Search.module.css";
import searchIcon from "../../assets/icons/search-icon.svg";

export const Search = () => {
  return (
    <div className={css.search_wrapper}>
      <img src={searchIcon} alt="Search Icon" className={css.search_icon} />
      <input className={css.search_input} placeholder="Search" />
    </div>
  );
};
