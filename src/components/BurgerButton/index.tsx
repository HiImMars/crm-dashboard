import { FC } from "react";
import burgerBtn from "../../assets/icons/burger-menu.svg";
import css from "./BurgerButton.module.css";

interface Props {
  setIsOpen: (isOpen: boolean | ((isOpen: boolean) => boolean)) => void;
}

export const BurgerButton: FC<Props> = ({ setIsOpen }) => {
  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <button className={css.burger_button} onClick={toggleIsOpen}>
      <img
        src={burgerBtn}
        alt="menu button"
        className={css.burger_button_icon}
      />
    </button>
  );
};
